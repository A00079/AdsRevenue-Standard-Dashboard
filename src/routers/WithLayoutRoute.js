import React, { useEffect } from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import Cookies from 'js-cookie';
import standardApi from '../utils/standardApi/standardApi.js';
import { authenticateUser } from "../actions/authActions.js";

const WithLayoutRoute = props => {
  const { layout: Layout, component: Component, layoutProps, isAuthorised, ...rest } = props;
  useEffect(() => {
    let accessToken = Cookies.get('access');
    if (!!accessToken) {
      let authData = {
        accessToken: Cookies.get('access'),
        refreshToken: Cookies.get('refresh'),
        isAuthenticated: true
      }
      props.authenticateUser(authData);
      props.history.push('/home');
    }
    setInterval(() => {
      handleLoginState();
    }, 60000);
  }, []);

  const handleLoginState = () => {
    let accessToken = Cookies.get('access');
    let refreshToken = Cookies.get('refresh');

    if (refreshToken !== 'undefined') {
      standardApi.create('/protected', null, accessToken).then((res) => {
        if (res.data.message === 'unsuccess') {
          handleRefreshToken(refreshToken);
        } else {
          Cookies.set('access', res.data.accessToken);
          let authData = {
            accessToken: res.data.accessToken,
            refreshToken: res.data.refreshToken,
            isAuthenticated: true
          }
          props.authenticateUser(authData);
          props.history.push('/home');
        }
      }).catch((err) => {
        console.log('Error:', err);
      });
    } else {
      props.history.push("/sign-in");
      let authData = {
        accessToken: null,
        refreshToken: null,
        isAuthenticated: false
      }
      props.authenticateUser(authData);
    }
  }
  const handleRefreshToken = (token) => {
    let data = {
      token
    }
    standardApi.create('/refresh', data, token).then((res) => {
      if (res.data.message === 'success') {
        Cookies.set('access', res.data.accessToken);
        let authData = {
          accessToken: res.data.accessToken,
          refreshToken: res.data.refreshToken,
          isAuthenticated: true
        }
        props.authenticateUser(authData);
        props.history.push('/home');
      } else {
        console.log('Invalid Refresh Token');
        props.history.push("/sign-in");
        let authData = {
          accessToken: res.data.accessToken,
          refreshToken: res.data.refreshToken,
          isAuthenticated: false
        }
        props.authenticateUser(authData);
      }
    }).catch((err) => {
      console.log('Error:', err);
    });
  }

  return (
    <Route
      {...rest}
      render={matchProps => (
        isAuthorised ?
          <Layout {...layoutProps}>
            <Component {...matchProps} />
          </Layout>
          : (
            <Redirect to={{ pathname: '/sign-in', state: { from: props.location } }} />
          )
      )}
    />
  );
};

WithLayoutRoute.propTypes = {
  component: PropTypes.any.isRequired,
  layout: PropTypes.any.isRequired,
  isAuthorised: PropTypes.bool,
  path: PropTypes.string,
  isAuthenticated: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  isAuthenticated: state.isAuthenticated
});

export default withRouter(connect(
  mapStateToProps,
  { authenticateUser }
)(WithLayoutRoute));

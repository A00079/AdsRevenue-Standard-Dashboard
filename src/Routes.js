import React, { lazy, Suspense } from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { WithLayoutRoute } from "./routers";
import { PublicLayout, SecondaryPublicLayout } from "./layouts";
import { SignInForm } from "./components/SignInForm/components";
import PropTypes from 'prop-types';
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import Cookies from 'js-cookie';
import standardApi from './utils/standardApi/standardApi.js';
// import history from './utils/history.js';
import { useHistory } from "react-router-dom";
// const LandingPage = lazy(() => import("./pages/LandingPage"));

import Home from "./pages/Home";

import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile,
} from "react-device-detect";
const Routes = (props) => {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const history = useHistory();
  console.log('history',useHistory());
  React.useEffect(() => {
    let accessToken = Cookies.get('access');
    let refreshToken = Cookies.get('refresh');

    if (refreshToken !== 'undefined') {
      standardApi.create('/protected', null, accessToken).then((res) => {
        if (res.data.message === 'unsuccess') {
          handleRefreshToken(refreshToken);
        } else {
          Cookies.set('access', res.data.accessToken);
          setIsLoggedIn(true);
          window.location.href = '#/home'
        }
      }).catch((err) => {
        console.log('Error:', err);
      });
    } else {
      history.push('/sign-in');
    }
    console.log('always render', props);
  }, [props]);

  const handleRefreshToken = (token) => {
    let data = {
      token
    }
    standardApi.create('/refresh', data, token).then((res) => {
      if (res.data.message === 'success') {
        Cookies.set('access', res.data.accessToken);
        setIsLoggedIn(true);
        window.location.href = '#/home'
      } else {
        console.log('Invalid Refresh Token');
        setIsLoggedIn(false);
        history.push('/sign-in');
      }
    }).catch((err) => {
      console.log('Error:', err);
    });
  }

  return (
    <Router>
      <Switch>
        <WithLayoutRoute
          exact
          path="/home"
          layout={PublicLayout}
          component={Home}
          isAuthenticated={isLoggedIn}
        />
        <WithLayoutRoute
          exact
          path="/add-employees"
          layout={PublicLayout}
          component={Home}
          isAuthenticated={isLoggedIn}
        />
        <WithLayoutRoute
          exact
          path="/sign-in"
          layout={SignInForm}
          component={SignInForm}
          isAuthenticated={true}
        />
        <Route path="*" component={() => "404 NOT FOUND"} />
      </Switch>
    </Router>
  );
};

Routes.propTypes = {
  isAuthenticated: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  isAuthenticated: state.isAuthenticated
});

export default connect(
  mapStateToProps,
)(Routes);


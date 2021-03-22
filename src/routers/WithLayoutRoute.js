import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withRouter } from "react-router-dom";

const WithLayoutRoute = props => {
  const { layout: Layout, component: Component, layoutProps, isAuthenticated, ...rest } = props;

  return (
    <Route
      {...rest}
      render={matchProps => (
        isAuthenticated ?
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
  isAuthenticated: PropTypes.bool,
  path: PropTypes.string
};

export default withRouter(WithLayoutRoute);

import React, { lazy, Suspense, useEffect } from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { WithLayoutRoute } from "./routers";
import { PublicLayout, SecondaryPublicLayout } from "./layouts";
import { SignInForm, AffiliateSignIn } from "./components/SignInForm/components";
import PropTypes from 'prop-types';
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import Cookies from 'js-cookie';
import standardApi from './utils/standardApi/standardApi.js';
import { authenticateUser } from "./actions/authActions.js";
import Home from "./pages/Home";

import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile,
} from "react-device-detect";
const Routes = (props) => {
  useEffect(() => {
    // console.log('props.isAuthenticated.isAuthenticated',props.isAuthenticated.isAuthenticated);
  }, [])
  return (
    <Router>
      <Switch>
        <WithLayoutRoute
          exact
          path="/home"
          layout={PublicLayout}
          component={Home}
          isAuthorised={props.isAuthenticated.isAuthenticated}
        />
        <WithLayoutRoute
          exact
          path="/add-employees"
          layout={PublicLayout}
          component={Home}
          isAuthorised={props.isAuthenticated.isAuthenticated}
        />
        <WithLayoutRoute
          exact
          path="/view-projects"
          layout={PublicLayout}
          component={Home}
          isAuthorised={props.isAuthenticated.isAuthenticated}
        />
        <WithLayoutRoute
          exact
          path="/view-employees"
          layout={PublicLayout}
          component={Home}
          isAuthorised={props.isAuthenticated.isAuthenticated}
        />
        <WithLayoutRoute
          exact
          path="/manage-affiliate/:aff_id"
          layout={PublicLayout}
          component={Home}
          isAuthorised={props.isAuthenticated.isAuthenticated}
        />
        <WithLayoutRoute
          exact
          path="/single-emails"
          layout={PublicLayout}
          component={Home}
          isAuthorised={props.isAuthenticated.isAuthenticated}
        />
        <WithLayoutRoute
          exact
          path="/sign-in"
          layout={SignInForm}
          component={SignInForm}
          isAuthorised={true}
        />
        <WithLayoutRoute
          exact
          path="/affiliate-signin"
          layout={AffiliateSignIn}
          component={AffiliateSignIn}
          isAuthorised={true}
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
  { authenticateUser }
)(Routes);
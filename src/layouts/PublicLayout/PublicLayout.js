import React from 'react';
import { Navbar, Footer } from "./components";
import { history } from "../../utils";
import { authenticateUser } from "../../actions/authActions.js";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import axios from 'axios';
function PublicLayout(props) {
  const { children, withFooter = true } = props;
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className="p-0">{children}</div>
      <div>{withFooter && <Footer />}</div>
    </div>
  );
}

PublicLayout.propTypes = {
  authVal: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  authVal: state.isAuthenticated,
  authAccessToken: state.authAccessToken
});

export default withRouter(connect(
  mapStateToProps,
  { authenticateUser }
)(PublicLayout));

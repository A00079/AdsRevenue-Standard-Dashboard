import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { authenticateUser } from "../../../../actions/authActions.js";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import axios from "axios";
import standardApi from "../../../../utils/standardApi/standardApi.js";
import { withRouter } from "react-router-dom";
import Cookies from "js-cookie";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        AdsRevenue
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const SignIn = (props) => {
  const classes = useStyles();
  const [userEmail, setUserEmail] = React.useState("");
  const [userPassword, setUserPassword] = React.useState("");

  React.useEffect(() => {
    if (props.isAuthenticated.isAuthenticated) {
      props.history.push("/home");
    }
  }, [props]);

  const handleSignin = () => {
    let signInData = {
      user: {},
    };
    signInData.user.email = userEmail;
    signInData.user.password = userPassword;
    standardApi
      .create("/login", signInData)
      .then((response) => {
        if (response.data.message === "success") {
          Cookies.set("access", response.data.accessToken);
          Cookies.set("refresh", response.data.refreshToken);
          Cookies.set("authrole", response.data.authrole);
          Cookies.set("email", response.data.email);
          Cookies.set("fullname", response.data.fullname);

          let authData = {
            authrole: response.data.authrole,
            accessToken: response.data.accessToken,
            refreshToken: response.data.refreshToken,
            isAuthenticated: true,
          };
          props.authenticateUser(authData);
          props.history.push("/home");
        } else {
          let authData = {
            authrole: response.data.authrole,
            accessToken: response.data.accessToken,
            refreshToken: response.data.refreshToken,
            isAuthenticated: false,
          };
          props.authenticateUser(authData);
          Cookies.remove("access");
          Cookies.remove("refresh");
          Cookies.set("authrole");
          Cookies.set("email");
          Cookies.set("fullname");
          props.history.push("/sign-in");
        }
      })
      .catch((err) => {
        console.log("Error:", err);
      });
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          <span className="font-bold">
            Sign in To<span className="text-indigo-600"> AdsRevenue</span>
          </span>
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            onChange={(e) => {
              setUserEmail(e.target.value);
            }}
            defaultValue={userEmail}
            label="Email Address"
            name="email"
            autoComplete="off"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            onChange={(e) => {
              setUserPassword(e.target.value);
            }}
            defaultValue={userPassword}
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="off"
          />
          <Button
            onClick={() => handleSignin()}
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
};

SignIn.propTypes = {
  isAuthenticated: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.isAuthenticated,
});

export default withRouter(
  connect(mapStateToProps, { authenticateUser })(SignIn)
);

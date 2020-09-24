import React, { useContext } from "react";
import * as firebase from "firebase/app";
import "firebase/auth";
import { UserContext } from "../../App";

import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";

import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import googleIcon from "../../resources/icon/google.png";
import fbIcon from "../../resources/icon/fb.png";
import logo from "../../resources/logo.png";
import "./Login.css";
import firebaseConfig from "./firebase.config";
import { useHistory, useLocation } from "react-router-dom";
import { useForm } from "react-hook-form";

const socialStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

const useStyles = makeStyles((theme) => ({


  form: {
    width: "100%",
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function Registration() {
  const [setLoggedInUser] = useContext(UserContext);
  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/" } };

  if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
  }
  const classes = useStyles();
  const socialClasses = socialStyles();

  const provider = new firebase.auth.GoogleAuthProvider();
  const fbProvider = new firebase.auth.FacebookAuthProvider();

  const handleGoogleSignIn = () => {
    firebase
      .auth()
      .signInWithPopup(provider)
      .then(function (result) {
        const { displayName, email } = result.user;
        const signedInUser = { name: displayName, email };
        setLoggedInUser(signedInUser);
        history.replace(from);
      })
      .catch(function (error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        var email = error.email;
        var credential = error.credential;
      });
  };

  const handleFbSignIn = () => {
    firebase
      .auth()
      .signInWithPopup(fbProvider)
      .then(function (result) {
        const { displayName, email } = result.user;
        const signedInUser = { name: displayName, email };
        setLoggedInUser(signedInUser);
        history.replace(from);
      })
      .catch(function (error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        var email = error.email;
        var credential = error.credential;
      });
  };

  const { register, handleSubmit } = useForm();
  const onSubmit = (e) => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(e.email, e.password)
      .catch(function (error) {
        var errorCode = error.code;
        var errorMessage = error.message;
      });
  };

  return (
    <>
      <Container className="loginContainer" component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <img
            style={{ width: "100px", paddingTop: "10px" }}
            src={logo}
            alt=""
            srcSet=""
          />
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className={classes.form}
            noValidate
          >
            <Grid item>
              <TextField
                autoComplete="fname"
                name="name"
                variant="outlined"
                inputRef={register}
                required
                fullWidth
                id="name"
                label="Name"
                autoFocus
              />
            </Grid>
            <TextField
              variant="outlined"
              margin="normal"
              inputRef={register}
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              inputRef={register}
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign Up
            </Button>
            <Grid container>
              <Grid item>
                <Link href="/login" variant="body2">
                  {"Already have an account? Sign In"}
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Container>
      <center>
        <h3 style={{ color: "white", marginTop: "15px" }}>Or</h3>
        <button onClick={handleGoogleSignIn} className="socialButton">
          <div className={socialClasses.root}>
            <Grid
              direction="row"
              justify="flex-start"
              alignItems="center"
              container
              spacing={1}
            >
              <Grid item xs={1}>
                <img className="socailIcon" src={googleIcon} alt="" srcSet="" />{" "}
              </Grid>
              <Grid item xs={11}>
                Continue with Google
              </Grid>
            </Grid>
          </div>
        </button>
        <br />
        <button
          onClick={handleFbSignIn}
          style={{ marginBottom: "20px" }}
          className="socialButton"
        >
          <div className={socialClasses.root}>
            <Grid
              direction="row"
              justify="flex-start"
              alignItems="center"
              container
              spacing={1}
            >
              <Grid item xs={1}>
                <img className="socailIcon" src={fbIcon} alt="" srcSet="" />{" "}
              </Grid>
              <Grid item xs={11}>
                Continue with Facebook
              </Grid>
            </Grid>
          </div>
        </button>
      </center>
    </>
  );
}

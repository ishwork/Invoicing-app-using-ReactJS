import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
//import { Route, Switch } from "react-router-dom";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import fire from "../firestore/Fire";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import { ScaleLoader } from "react-spinners";
import firebase from "firebase";
import { useHistory } from "react-router-dom";

export default function SignIn(props) {
  //const login = (props) => {
  const classes = useStyles();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [loading, setLoading] = useState(false);

  const override = "display: block; margin-left: 100px; border-color: red;";
  const history = useHistory();
  const handleEmail = (event) => {
    setEmail(event.target.value);
  };

  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleRememberMe = (value) => {
    setRememberMe(value);
  };

  const handleLogin = async () => {
    setLoading(true);
    await fire
      .auth()
      .setPersistence(
        rememberMe
          ? firebase.auth.Auth.Persistence.LOCAL
          : firebase.auth.Auth.Persistence.SESSION
      );

    try {
      await fire.auth().signInWithEmailAndPassword(email, password);
      history.push("/");
    } catch (error) {
      toast.error(error.message, {
        position: toast.POSITION.BOTTOM_LEFT,
      });
      setLoading(false);
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <ToastContainer />
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <ValidatorForm
          className={classes.form}
          onSubmit={handleLogin}
          onError={(errors) => {
            for (const err of errors) {
              console.log(err.props.errorMessages[0]);
            }
          }}
        >
          <TextValidator
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="off"
            autoFocus
            value={email}
            validators={["required", "isEmail"]}
            onChange={handleEmail}
            errorMessages={["This field is required", "Invalid email-address"]}
          />
          <TextValidator
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="password"
            label="Password"
            name="password"
            type="password"
            autoComplete="off"
            autoFocus
            value={password}
            validators={["required"]}
            onChange={handlePassword}
            errorMessages={["This field is required"]}
          />
          <FormControlLabel
            control={
              <Checkbox
                value={rememberMe}
                onChange={(e) => handleRememberMe(e.target.checked)}
                color="primary"
              />
            }
            label="Remember me"
          />
          {loading ? (
            <ScaleLoader
              css={override}
              size={150}
              color={"eb4034"}
              loading={loading}
            />
          ) : (
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign In
            </Button>
          )}

          <Grid container>
            <Grid item xs>
              <Link href="reset" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link onClick={props.toggle} variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </ValidatorForm>
      </div>
    </Container>
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

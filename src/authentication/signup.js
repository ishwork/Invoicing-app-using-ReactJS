import React, { useEffect, useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import fire from "../firestore/Fire";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
//import { ScaleLoader } from "react-spinners";
import { useHistory } from "react-router-dom";

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
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignUp() {
  const history = useHistory();
  const classes = useStyles();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };

  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPassword = (event) => {
    setConfirmPassword(event.target.value);
  };

  const handleSignUp = async () => {
    try {
      const { user } = await fire
        .auth()
        .createUserWithEmailAndPassword(email, password);
      const data = {
        userId: user.uid,
        email: user.email,
      };
      if (user) {
        await fire.firestore().collection("companyUser").doc(user.uid).set({
          email: user.email,
          address: "",
          businessId: "",
          city: "",
          iban: "",
          logo: "",
          name: "",
          phone: "",
          postalCode: "",
          referenceNumber: "",
        });
        toast.success("User Registered Successfully", {
          position: toast.POSITION.BOTTOM_LEFT,
        });
      }
      localStorage.setItem("user", JSON.stringify(data));
      history.push("dashboard");
    } catch (error) {
      // eslint-disable-next-line
      switch (error.code) {
        case "auth/email-already-exist":
          toast.error(error.message, {
            position: toast.POSITION.BOTTOM_LEFT,
          });
          break;
        case "auth/invalid-email":
          toast.error(error.message, {
            position: toast.POSITION.BOTTOM_LEFT,
          });
          break;
        case "auth/weak-password":
          toast.error(error.message, {
            position: toast.POSITION.BOTTOM_LEFT,
          });
          break;
      }
    }
  };

  useEffect(() => {
    ValidatorForm.addValidationRule("isPasswordMatch", (value) => {
      return value === password;
    });
    return () => {
      ValidatorForm.removeValidationRule("isPasswordMatch");
    };
  }, [password]);

  return (
    <Container component="main" maxWidth="xs">
      <ToastContainer />
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <ValidatorForm className={classes.form} onSubmit={handleSignUp}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextValidator
                variant="outlined"
                margin="normal"
                validators={["required", "isEmail"]}
                fullWidth
                id="email"
                label="Email Address"
                onChange={handleEmail}
                name="email"
                value={email}
                autoComplete="off"
                errorMessages={[
                  "This field is required",
                  "Invalid email address",
                ]}
              />
            </Grid>
            <Grid item xs={12}>
              <TextValidator
                variant="outlined"
                validators={["required"]}
                fullWidth
                name="password"
                label="Password"
                onChange={handlePassword}
                value={password}
                type="password"
                id="password"
                autoComplete="off"
                errorMessages={["This field is required"]}
              />
            </Grid>
            <Grid item xs={12}>
              <TextValidator
                variant="outlined"
                validators={["isPasswordMatch", "required"]}
                fullWidth
                name="confirmPassword"
                label="Confirm Password"
                onChange={handleConfirmPassword}
                value={confirmPassword}
                type="password"
                id="password"
                autoComplete="off"
                errorMessages={[
                  "Password does not match!",
                  "This field is required",
                ]}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign Up
          </Button>

          <Grid container justify="flex-end">
            <Grid item>
              <Link href="login" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </ValidatorForm>
      </div>
    </Container>
  );
}

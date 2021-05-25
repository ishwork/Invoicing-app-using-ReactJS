import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import fire from "../firestore/Fire";

export default function Reset(props) {
  const classes = useStyles();
  const [email, setEmail] = useState("");

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleReset = () => {
    fire
      .auth()
      .sendPasswordResetEmail(email)
      .then(() => {
        alert("Email has been sent to you. Please check and verify.");
      })
      .catch((error) => {
        let errorMessages = error.message;
        alert(errorMessages);
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
          Forgot Password ?
        </Typography>
        <br />
        <Typography component="p" fontWeight="bold">
          Please enter your email address below and we will send you information
          to recover your account.
        </Typography>
        <ValidatorForm
          className={classes.form}
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
            label="Your Email Address"
            name="email"
            autoComplete="off"
            autoFocus
            value={email}
            validators={["required", "isEmail"]}
            onChange={handleEmail}
            errorMessages={["This field is required", "Invalid email-address"]}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={handleReset}
          >
            Reset Password
          </Button>
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

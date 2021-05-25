import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { init, sendForm } from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import { makeStyles } from "@material-ui/core/styles";

init("user_z7aH0bQTexQ3GvLhBkjV1");
export default function FeedbackSection() {
  const styles = useStyles();

  const { register, handleSubmit, errors } = useForm();

  const [contactNumber, setContactNumber] = useState("000000");
  const [userName, setName] = useState("");
  const [userSubject, setSubject] = useState("");
  const [userEmail, setEmail] = useState("");
  const [userMessage, setMessage] = useState("");

  const generateContactNumber = () => {
    const numStr = "000000" + ((Math.random() * 1000000) | 0);
    setContactNumber(numStr.substring(numStr.length - 6));
  };

  const onSubmit = (e) => {
    generateContactNumber();
    sendForm("service_15bwfkc", "template_e93um5p", "#contact-form").then(
      function (response) {
        //console.log('SUCCESS!', response.status, response.text);
        toast.success("Your feedback has been sent", {
          position: toast.POSITION.BOTTOM_LEFT,
        });
      },
      function (error) {
        console.log("FAILED...", error);
      }
    );
    setName("");
    setSubject("");
    setEmail("");
    setMessage("");
  };

  return (
    <form id="contact-form" onSubmit={handleSubmit(onSubmit)}>
      <input type="hidden" name="contact_number" value={contactNumber} />
      <div className={styles.feedbackWrap}>
        <div className={styles.inputDivs}>
          <label className={styles.feedbackLabels}>Your name</label>
          <input
            className={styles.feedbackInputs}
            type="text"
            name="name"
            maxLength="30"
            value={userName}
            onChange={(e) => setName(e.target.value)}
            aria-invalid={errors.name ? "true" : "false"}
            ref={register({ required: true })}
          />
          {errors.name && errors.name.type === "required" && (
            <div role="alert" style={{ color: "red", padding: "5px" }}>
              Required
            </div>
          )}
        </div>

        <div className={styles.inputDivs}>
          <label className={styles.feedbackLabels}>Subject</label>
          <input
            className={styles.feedbackInputs}
            type="text"
            name="subject"
            maxLength="30"
            value={userSubject}
            onChange={(e) => setSubject(e.target.value)}
            aria-invalid={errors.subject ? "true" : "false"}
            ref={register({ required: true })}
          />
          {errors.subject && errors.subject.type === "required" && (
            <div role="alert" style={{ color: "red", padding: "5px" }}>
              Required
            </div>
          )}
        </div>

        <div className={styles.inputDivs}>
          <label className={styles.feedbackLabels}>Your email address</label>
          <input
            className={styles.feedbackInputs}
            type="email"
            name="email"
            maxLength="30"
            value={userEmail}
            onChange={(e) => setEmail(e.target.value)}
            aria-invalid={errors.email ? "true" : "false"}
            ref={register({ required: true })}
          />
          {errors.email && errors.email.type === "required" && (
            <div role="alert" style={{ color: "red", padding: "5px" }}>
              Required
            </div>
          )}
        </div>

        <div className={styles.inputDivs}>
          <label className={styles.feedbackLabels}>Message</label>
          <textarea
            className={styles.feedbackMessage}
            name="message"
            maxLength="1500"
            value={userMessage}
            onChange={(e) => setMessage(e.target.value)}
            aria-invalid={errors.message ? "true" : "false"}
            ref={register({ required: true })}
          />
          {errors.message && errors.message.type === "required" && (
            <div role="alert" style={{ color: "red", padding: "5px" }}>
              Required
            </div>
          )}
        </div>
        <div className={styles.feedbackButton_div}>
          <button className={styles.submit_button} type="submit">
            Send
          </button>
        </div>
        <ToastContainer />
      </div>
    </form>
  );
}

const useStyles = makeStyles((theme) => ({
  feedbackWrap: {
    width: "100%",
  },

  inputDivs: {
    display: "flex",
    width: "100%",
    padding: "5px",
  },

  feedbackLabels: {
    width: "30%",
    fontSize: "18px",
    fontFamily: "Arial",
    overflowWrap: "break-word",
    textAlign: "Right",
  },

  feedbackInputs: {
    width: "40%",
    marginLeft: "15px",
  },

  feedbackMessage: {
    width: "40%",
    marginLeft: "15px",
    height: "100px",
  },

  feedbackButton_div: {
    width: "25%",
    marginLeft: "50%",
    textAlign: "Right",
  },

  submit_button: {
    height: "25px",
    width: "60px",
    fontSize: "15px",
    fontFamily: "Arial",
    fontWeight: "bold",
    color: "whitesmoke",
    backgroundColor: "darkorange",
  },
}));

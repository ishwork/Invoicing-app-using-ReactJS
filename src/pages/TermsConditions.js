import { Paper, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";

export default function TermsConditions() {
  const styles = useStyles();

  return (
    <Paper style={{ marginTop: "10px", paddingBottom: 50 }}>
      <div className={styles.paragraphDiv}>
        <Typography className={styles.title}>TERMS AND CONDITIONS</Typography>
      </div>

      <div className={styles.paragraphDiv}>
        <Typography className={styles.headings}>
          AGREEMENT PARTICIPANTS
        </Typography>
        <Typography className={styles.paragraphText}>
          Participants of this agreement are Hivemind Consulting OY 2511500-7
          (Provider), and service using company, private person or community
          (Customer). Service is available at Frinvoice-pages (Service). <br />
          <br />
          By using the Service, Customer agrees in these terms and conditions.
        </Typography>
      </div>

      <div className={styles.paragraphDiv}>
        <Typography className={styles.headings}>SERVICE DESCRIPTION</Typography>
        <Typography className={styles.paragraphText}>
          Frinvoice is Finnish internet provided billing service. Service is
          meant for use of private persons, associates and companies. <br />
          <br />
          Use of Service is free of charge. Service is mostly usable 24 hours in
          a day. Breaks in usability are possible due of servicing, overload or
          any other reason.
        </Typography>
      </div>

      <div className={styles.paragraphDiv}>
        <Typography className={styles.headings}>SERVICE USAGE</Typography>
        <Typography className={styles.paragraphText}>
          Everything in the Service is under copyright laws. All copyright
          belongs to Provider. It is illegal to copy or redistribute. Use of
          automation or machine learning to generate billing is forbidden.
          Service is supposed to be used so that no harm comes to Provider,
          co-operating parties or other users. To use the service for crime is
          forbidden.
        </Typography>
      </div>

      <div className={styles.paragraphDiv}>
        <Typography className={styles.headings}>
          REGISTERING TO SERVICE USER
        </Typography>
        <Typography className={styles.paragraphText}>
          Customer has to give truthful registration information, at minimum
          user id, password and working email address, that they have rights to
          use. Customer is responsible of keeping their information updated and
          current.
        </Typography>
      </div>

      <div className={styles.paragraphDiv}>
        <Typography className={styles.headings}>
          ENDING THE USE OF SERVICE
        </Typography>
        <Typography className={styles.paragraphText}>
          Customer and Provider can stop using service any time by notifying it
          to one another. Provider has rights to stop Service temporarily or
          fully without prior notification. <br />
          <br />
          If Customer breaks these terms, its’ account be removed without
          warning. Provider can limit Customers use of its account.
        </Typography>
      </div>

      <div className={styles.paragraphDiv}>
        <Typography className={styles.headings}>
          PROVIDER AND USERS’ RESPONSIBILITIES
        </Typography>
        <Typography className={styles.paragraphText}>
          Provider is not responsible for any loss due of incorrect data
          inputted, use of Service might cause, problems or costs in Service.
          Provider is not responsible of costs for Customer, recipient of the
          bill or other participant. Provider is not responsible of Service
          availability nor any data Customer provides. Provider is not
          responsible of continuance of the Service, Customer data availability
          or existence or Service operability. Provider is not obligated to
          Customer or other parties of any damage or costs which are caused by
          denial-of-service attack, data theft, viruses or technically harmful
          material. Provider is not responsible of errors or service breaks due
          of Force Majeure or third-party actions. <br />
          <br />
          In case of misuse, Customer is responsible of compensating losses to
          Provider and other parties.
        </Typography>
      </div>

      <div className={styles.paragraphDiv}>
        <Typography className={styles.headings}>CHANGING THE TERMS</Typography>
        <Typography className={styles.paragraphText}>
          Provider has rights to do any changes by notifying changes on the
          pages.
        </Typography>
      </div>

      <div className={styles.paragraphDiv}>
        <Typography className={styles.headings}>APPLICABLE LAW</Typography>
        <Typography className={styles.paragraphText}>
          Service is under the Finnish law. Provider will not hand over any data
          without legally obligating requests. All misunderstandings will be
          primarily solved by negotiating.
        </Typography>
      </div>
    </Paper>
  );
}

const useStyles = makeStyles((theme) => ({
  paragraphDiv: {
    width: "80%",
    marginLeft: "10%",
    marginTop: "20px",
  },
  title: {
    fontSize: "25px",
    fontFamily: "Arial",
    fontWeight: "bold",
    textAlign: "center",
    color: "black",
  },
  headings: {
    fontSize: "20px",
    fontFamily: "Arial",
    fontWeight: "bold",
    textAlign: "left",
    color: "black",
  },
  paragraphText: {
    marginTop: 10,
    fontSize: "20px",
    fontFamily: "Arial",
    textAlign: "left",
    color: "black",
  },
}));

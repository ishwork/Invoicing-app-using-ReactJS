import React from "react";
import { Paper } from "@material-ui/core";
import { Link } from "react-router-dom";
import DescriptionIcon from "@material-ui/icons/Description";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import CheckIcon from "@material-ui/icons/Check";
import PhoneIcon from "@material-ui/icons/Phone";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";
import image from "../images/invoice_confused.PNG";
import FeedbackSection from "../components/FeedbackSection";
import ReactPlayer from "react-player";

export default function About() {
  const styles = useStyles();
  return (
    <Paper variant="outlined" square className="PaperCard">
      <div className={styles.firstDiv}>
        <div className={styles.headingDiv}>
          <Typography className={styles.heading1}>
            Generate Invoices For Free With FRINVOICE
          </Typography>
        </div>
        <div className={styles.paragraphDivider} />

        <div className={styles.divWrapper}>
          <div className={styles.div2}>
            <Video />
          </div>
          <div className={styles.paragraphDivider} />

          <div className={styles.div3}>
            <Typography className={styles.wrapIcon}>
              Save time by generating invoices easily with FRINVOICE – No costs,
              no unnecessary features. Only invoices.
            </Typography>
          </div>
        </div>
      </div>

      <div className={styles.paragraphDivider} />
      <div className={styles.horizonDivider} />
      <div className={styles.paragraphDivider} />

      <div className={styles.firstDiv}>
        <div className={styles.headingDiv}>
          <Typography className={styles.heading1}>
            Why choose FRINVOICE?
          </Typography>
        </div>
      </div>

      <div className={styles.paragraphDivider} />

      <div className={styles.firstDiv}>
        <Typography className={styles.wrapIcon}>
          Using FRINVOICE, you can
        </Typography>
        <div className={styles.lineDivider} />
        <div className={styles.lineDivider} />
        <Typography className={styles.wrapIcon}>
          <CheckIcon className={styles.checkmark} /> Create invoices completely
          free of charge
        </Typography>
        <div className={styles.lineDivider} />
        <Typography className={styles.wrapIcon}>
          <CheckIcon className={styles.checkmark} /> Save your product
          information to save time
        </Typography>
        <div className={styles.lineDivider} />
        <Typography className={styles.wrapIcon}>
          <CheckIcon className={styles.checkmark} /> Customize your invoices
          with your company’s logo
        </Typography>
        <div className={styles.lineDivider} />
        <Typography className={styles.wrapIcon}>
          <CheckIcon className={styles.checkmark} /> Download and print your
          invoices in PDF format
        </Typography>
        <div className={styles.lineDivider} />
        <Typography className={styles.wrapIcon}>
          <CheckIcon className={styles.checkmark} />
          Choose the look of your invoices from a variety of templates
        </Typography>
        <div className={styles.lineDivider} />
        <Typography className={styles.wrapIcon}>
          <CheckIcon className={styles.checkmark} />
          Keep a record of your invoices and client details
        </Typography>
        <div className={styles.lineDivider} />
      </div>

      <div className={styles.lineDivider} />
      <div className={styles.horizonDivider} />
      <div className={styles.lineDivider} />

      <div className={styles.firstDiv}>
        <div className={styles.headingDiv}>
          <Typography className={styles.heading1}>
            How to use FRINVOICE?
          </Typography>
        </div>
        <div className={styles.paragraphDivider} />
        <Typography className={styles.wrapIcon}>
          Use free invoice generator to create and download professional
          invoices to send to your contacts. When following these steps, you get
          the guidelines on how to fill out the invoice information accordingly.
        </Typography>

        <div className={styles.paragraphDivider} />
        <div className={styles.div2}>
          <img src={image} className={styles.imageTem} />
        </div>
        <div className={styles.paragraphDivider} />

        <Typography className={styles.wrapIcon}>
          <ArrowRightAltIcon className={styles.checkmark} /> Customize your
          template by adding a logo in “Upload company logo” section
        </Typography>
        <div className={styles.lineDivider} />
        <Typography className={styles.wrapIcon}>
          <ArrowRightAltIcon className={styles.checkmark} /> Add in your company
          details such as business ID, email, phone number, company name,
          company address, receiver IBAN and reference number in the “Company
          Information” section
        </Typography>
        <div className={styles.lineDivider} />
        <Typography className={styles.wrapIcon}>
          <ArrowRightAltIcon className={styles.checkmark} /> Fill out your
          customer’s details including their name, address, VAT number, phone
          number and email in the “Invoice Recipient Information” section
        </Typography>
        <div className={styles.lineDivider} />
        <Typography className={styles.wrapIcon}>
          <ArrowRightAltIcon className={styles.checkmark} /> Fill out invoice
          number, date of invoice, due date in “Invoice details” section
        </Typography>
        <div className={styles.lineDivider} />
        <Typography className={styles.wrapIcon}>
          <ArrowRightAltIcon className={styles.checkmark} /> Add in your item
          name, amount, price, VAT %, discount if applicable for each item in
          the “Add product details” section
        </Typography>
        <div className={styles.lineDivider} />
        <Typography className={styles.wrapIcon}>
          <ArrowRightAltIcon className={styles.checkmark} /> Click on “Select a
          template” button and select your suitable invoice template, and export
          it to PDF, where you can download or print your invoice.
        </Typography>
        <div className={styles.lineDivider} />
      </div>

      <div className={styles.lineDivider} />
      <div className={styles.horizonDivider} />
      <div className={styles.lineDivider} />

      <div className={styles.footerDiv}>
        <Typography className={styles.heading2}>Try FRINVOICE</Typography>
        <div className={styles.paragraphDivider} />
        <Typography className={styles.wrapText}>
          You can save loads of time spent filling out invoices manually by
          switching to online invoicing software that automatically does it for
          you.
        </Typography>

        <div className={styles.paragraphDivider} />
        <Typography className={styles.wrapText}>
          Start generating invoices for free and send them in a matter of
          minutes.
        </Typography>
        <div className={styles.paragraphDivider} />
        <div>
          <Link variant="button" color="textPrimary" to="/">
            <Button
              variant="contained"
              color="secondary"
              size="large"
              startIcon={<DescriptionIcon />}
            >
              Generate Invoice Now
            </Button>
          </Link>
        </div>
        <div className={styles.paragraphDivider} />
      </div>
      <div className={styles.contactDivDivider} />

      <div className={styles.emailPhoneDiv}>
        <Typography className={styles.heading2}>
          FRINVOICE by Hivemind
        </Typography>
        <Typography className={styles.heading2}>
          Free invoices provided by{" "}
          <Button variant="contained" color="secondary">
            <a style={{ color: "whitesmoke" }} href="https://www.hivemind.fi/">
              Hivemind Ltd
            </a>
          </Button>
        </Typography>
        <div className={styles.paragraphDivider} />

        <Typography className={styles.contactDivText}>
          Want to leave feedback? We'd love to hear from you. Here's how you can
          reach us...
        </Typography>
        <div className={styles.paragraphDivider} />
        <div>
          <FeedbackSection />
        </div>

        <div className={styles.paragraphDivider} />

        <Typography className={styles.contactDivText}>
          Or you can also reach us by calling to the phone number given below
          and sending emails
        </Typography>

        <div className={styles.reachWrappedDiv}>
          <div className={styles.phoneReach}>
            <Typography className={styles.contactDivText}>
              <PhoneIcon style={{ color: "lightblue", fontSize: "80" }} />
            </Typography>
            <Typography className={styles.contactDivText}>
              +358 400503966
            </Typography>
          </div>

          <div className={styles.emailReach}>
            <Typography className={styles.contactDivText}>
              <MailOutlineIcon style={{ color: "lightblue", fontSize: "80" }} />
            </Typography>
            <Typography className={styles.contactDivText}>
              hivemind@hivemind.fi
            </Typography>
          </div>
        </div>
      </div>
    </Paper>
  );
}

//Embed YouTube video in the page
const Video = () => {
  return (
    <div>
      <ReactPlayer
        url="https://www.youtube.com/watch?v=KLXlu2EH-h8&ab_channel=FRINVOICE"
        width="100%"
      />
    </div>
  );
};

//styling about page
const useStyles = makeStyles((theme) => ({
  firstDiv: {
    width: "80%",
    marginLeft: "10%",
  },
  divWrapper: {
    width: "100%",
  },
  div1: {
    width: "80%",
    textAlign: "center",
    marginLeft: "10%",
  },
  div2: {
    width: "80%",
    marginLeft: "10%",
    textAlign: "center",
  },

  div3: {
    width: "80%",
    textAlign: "center",
    marginLeft: "10%",
  },
  imageTem: {
    maxWidth: "100%",
  },
  headingDiv: {
    width: "80%",
    marginLeft: "10%",
  },
  heading1: {
    fontSize: "25px",
    fontFamily: "Arial",
    fontWeight: "bold",
    textAlign: "center",
    color: "black",
  },

  heading2: {
    fontSize: "25px",
    fontFamily: "Arial",
    fontWeight: "bold",
    textAlign: "center",
    color: "#ff9900",
  },
  wrapIcon: {
    verticalAlign: "middle",
    display: "inline-flex",
    fontSize: "20px",
    fontFamily: "Arial",
  },
  wrapText: {
    display: "inline-flex",
    fontSize: "20px",
    fontFamily: "Arial",
  },
  checkmark: {
    color: "green",
    paddingRight: "10px",
  },
  lineDivider: {
    width: "100%",
    height: "10px",
  },
  paragraphDivider: {
    width: "100%",
    height: "25px",
  },
  horizonDivider: {
    borderBottom: "5px dotted lightgray",
    width: "80%",
    marginLeft: "10%",
    marginTop: "20px",
    marginBottom: "20px",
  },
  footerDiv: {
    width: "80%",
    marginLeft: "10%",
    textAlign: "center",
  },
  contactDiv: {
    width: "50%",
    marginLeft: "25%",
  },
  contactDivText: {
    fontFamily: "Arial",
    fontSize: "20px",
    textAlign: "center",
  },
  emailPhoneDiv: {
    width: "50%",
    marginLeft: "25%",
  },
  reachWrappedDiv: {
    width: "100%",
    display: "flex",
  },
  phoneReach: {
    width: "40%",
    marginLeft: "10%",
    overflowWrap: "break-word",
  },
  emailReach: {
    width: "40%",
    marginLeft: "10%",
    overflowWrap: "break-word",
  },
  contactDivDivider: {
    borderBottom: "2px solid lightgray",
    width: "50%",
    marginLeft: "25%",
    marginTop: "25px",
    marginBottom: "25px",
  },
  container: {
    position: "relative",
    overflow: "hidden",
    width: "100%",
  },
  videoTag: {
    width: "100%",
    height: "100%",
    top: 0,
    left: 0,
  },
}));

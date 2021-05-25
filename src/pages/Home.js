import {
  Button,
  Container,
  Icon,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { useSelector } from "react-redux";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { useHistory } from "react-router-dom";
import CompanyInformation from "../components/CompanyInformation.js";
import CustomerInformation from "../components/CustomerInformation.js";
import ProductInformation from "../components/ProductInformation.js";
import { isValidCompanyInfo } from "../util/Validation.js";
import { isValidCustomerInfo } from "../util/Validation.js";
import React, { useEffect, useState } from "react";
import { useSnackbar } from "notistack";
import fire from "../firestore/Fire";
import * as fileUtil from "../util/FileUtil";
import { v4 as uuid } from "uuid";

import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import {
  setCompanyInfoSample1,
  setCustomerInfoSample1,
  setProductsSample1,
  setCompanyInfoSample2,
  setCustomerInfoSample2,
  setProductsSample2,
} from "../util/Mock.js";
import { calcInvoiceTotal } from "../util/Calculator.js";
import { addOrUpdateInvoice } from "../firestore/invoicesApi.js";
import { ToastContainer, toast } from "react-toastify";
import Fire from "../firestore/Fire";

export default function Home() {
  // eslint-disable-next-line
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const companyInfo = useSelector((state) => state.companyInformation);
  const customerInfo = useSelector((state) => state.customerInformation);
  const productInfo = useSelector((state) => state.productInformation);

  const history = useHistory();

  const [user, setUser] = useState(null);

  const loadUser = async () => {
    await Fire.auth().onAuthStateChanged(async (currentUser) => {
      if (currentUser) {
        const { uid, email } = currentUser;
        const cUser = { userId: uid, email: email };
        setUser(cUser);
      }
    });
  };

  const dispatch = useDispatch();
  let { id } = useParams();
  useEffect(() => {
    switch (id) {
      case "1":
        setCompanyInfoSample1(dispatch);
        setCustomerInfoSample1(dispatch);
        setProductsSample1(dispatch);
        break;
      case "2":
        setCompanyInfoSample2(dispatch);
        setCustomerInfoSample2(dispatch);
        setProductsSample2(dispatch);
        break;
      default:
        break;
    }
    loadUser();
  }, [id]);

  const handleSave = async (e) => {
    let file;
    if (companyInfo.logo !== "") {
      file = fileUtil.dataURLtoFile(companyInfo.logo);
      const id = uuid();
      const storageRef = fire.storage().ref("logos");
      const fileRef = storageRef.child(id);
      fileRef.put(file).then(() => {
        console.log(id);
      });
    }

    try {
      const savedCompanyInfo = await fire
        .firestore()
        .collection("companyInfo")
        .add({ companyInfo }); // todo: replace by e.g. companyApi call
      const savedCustomerInfo = await fire
        .firestore()
        .collection("customerInfo")
        .add({ customerInfo });
      const savedProducts = await fire
        .firestore()
        .collection("productInfo")
        .add({ productInfo });

      const invoice = {
        userId: user.userId,
        timestamp: Date.now(),
        recipientName: customerInfo.customerName,
        total: calcInvoiceTotal(productInfo.products),
        companyInfoId: savedCompanyInfo.id,
        customerInfoId: savedCustomerInfo.id,
        productsId: savedProducts.id,
      };
      addOrUpdateInvoice(invoice);

      toast.success("Data has been saved.", {
        position: toast.POSITION.BOTTOM_LEFT,
      });
    } catch (error) {
      console.log(error);
      toast.error("There is an error.", {
        position: toast.POSITION.BOTTOM_LEFT,
      });
    }
  };

  const styles = useStyles();
  return (
    <Container>
      <ToastContainer />
      <div style={{ width: "100%" }}>
        <Typography
          variant="h4"
          style={{
            textAlign: "center",
            paddingTop: "30px",
            fontWeight: "bold",
            color: "black",
            fontStyle: "bold",
          }}
        >
          Smart & Easy Invoicing
        </Typography>
        <Typography
          variant="h5"
          style={{
            textAlign: "center",
            paddingTop: "10px",
            fontWeight: "bold",
            color: "black",
            fontStyle: "bold",
          }}
        >
          Create your invoice now
        </Typography>
      </div>
      <CompanyInformation />
      <CustomerInformation />
      <ProductInformation />

      <Container className={styles.invoiceNavigation}>
        <>
          {user !== null ? (
            <>
              <Button
                variant="contained"
                color="primary"
                className={styles.button}
                endIcon={<Icon>send</Icon>}
                onClick={handleSave}
              >
                Save
              </Button>
              <Button
                variant="contained"
                color="primary"
                className={styles.button}
                endIcon={<Icon>send</Icon>}
                onClick={selectTemplate}
              >
                Select a template
              </Button>
            </>
          ) : (
            <>
              <Button
                variant="contained"
                color="primary"
                className={styles.button}
                endIcon={<Icon>send</Icon>}
                onClick={selectTemplate}
              >
                Select a template
              </Button>
            </>
          )}
        </>
      </Container>
      <Container maxWidth="lg" className={styles.faqContainer}>
        <>
          {user == null ? (
            <>
              <div className={styles.footerDivider} />
              <Typography className={styles.faqTypo}>
                {" "}
                Read some FAQs before get started
              </Typography>
              <Accordion className={styles.faqAccordion}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography className={styles.accordionHeading}>
                    How much does it cost to use invoice generator?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography className={styles.accordionText}>
                    The invoice generator is free to use for both personal and
                    commercial use. Use it as often as you’d like, share it with
                    your colleagues, or post a link to it from your blog.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion className={styles.faqAccordion}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography className={styles.accordionHeading}>
                    Do I have to be a customer to use the invoice generator?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography className={styles.accordionText}>
                    No. The invoice generator can be used by everyone and
                    anyone. We created it to give businesses a simple tool to
                    generate invoice from, without having to sign up for
                    anything.
                  </Typography>
                </AccordionDetails>
              </Accordion>

              <Accordion className={styles.faqAccordion}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography className={styles.accordionHeading}>
                    Can i customize my invoices?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography className={styles.accordionText}>
                    Yes, FRINVOICE lets you customize your invoice with your own
                    company logo and invoice information. You can create
                    invoices in different templates and download or print them,
                    and then send them to your customers.
                  </Typography>
                </AccordionDetails>
              </Accordion>

              <Accordion className={styles.faqAccordion}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography className={styles.accordionHeading}>
                    Why is it important to add due date on the invoice?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography className={styles.accordionText}>
                    Adding the due date in your invoice will encourage your
                    customers to make the payment within a certain period,
                    ensuring you get paid on time.
                  </Typography>
                </AccordionDetails>
              </Accordion>

              <Accordion className={styles.faqAccordion}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography className={styles.accordionHeading}>
                    Do I have the option to add discounts to my invoices?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography className={styles.accordionText}>
                    Yes, you do have the option to add discounts.
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </>
          ) : (
            <></>
          )}
        </>
      </Container>
    </Container>
  );

  function selectTemplate() {
    if (isValidCompanyInfo(companyInfo) && isValidCustomerInfo(customerInfo)) {
      history.push("/select-template");
    } else {
      // improve: show a notification or highlighting the invalid fields
      enqueueSnackbar("There is an error in company information.", {
        variant: "error",
      });
      // console.log(companyInfo);
    }
  }
}

const useStyles = makeStyles((theme) => ({
  invoiceNavigation: {
    textAlign: "right",
  },

  button: {
    fontSize: "1.1rem",
    margin: theme.spacing(2),
    backgroundColor: "#ffa500",
    "&:hover": {
      backgroundColor: "#b5651d",
    },
  },

  footerDivider: {
    height: "1px",
    width: "100%",
    backgroundColor: "grey",
    marginBottom: "30px",
    marginTop: "20px",
  },

  faqContainer: {
    width: "100%",
  },

  faqDiv: {
    width: "100%",
    marginTop: "50px",
  },

  faqAccordion: {
    width: "100%",
    marginTop: "10px",
  },

  faqTypo: {
    fontFamily: "Arial",
    fontSize: "25px",
    fontWeight: "bold",
    color: "black",
  },

  accordionHeading: {
    paddingTop: "10px",
    fontFamily: "Arial",
    fontSize: "20px",
    fontWeight: "bold",
  },

  accordionText: {
    fontFamily: "Arial",
    fontSize: "18px",
  },
}));

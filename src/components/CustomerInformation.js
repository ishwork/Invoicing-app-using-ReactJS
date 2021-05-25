import { Paper, TextField, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import * as validation from "../util/Validation.js";
import {
  setCustomerPhone,
  setCustomerName,
  setCustomerBusinessId,
  setCustomerAddress,
  setCustomerCity,
  setCustomerPostalCode,
  setCustomerEmail,
  setInvoiceNumber,
  setInvoiceDate,
  setInvoiceDueDate,
} from "../actions/CustomerInformation.js";
import * as Message from "../util/Message";

export default function CustomerInformation() {
  const styles = useStyles();
  const customerInfo = useSelector((state) => state.customerInformation);
  const dispatch = useDispatch();

  const [
    isCorrectCustomerBusinessId,
    setIsCorrectCustomerBusinessId,
  ] = useState(true);
  const [isCorrectEmail, setIsCorrectEmail] = useState(true);
  const [isCorrectPhone, setIsCorrectPhone] = useState(true);

  return (
    <Paper variant="outlined" square className="PaperCard">
      <div className="Content">
        <div className={styles.recipientInfo}>
          <div style={{ height: "60px" }}>
            <Typography variant="h5" style={{ paddingBottom: "20px" }}>
              Invoice Recipient Information
            </Typography>
          </div>
          <div>
            <TextField
              required
              id="customer_name"
              label="Name"
              size="small"
              className={styles.oneHalfWidth}
              value={customerInfo.customerName}
              onChange={(e) => dispatch(setCustomerName(e.target.value))}
            />
            <TextField
              id="customer_businessId"
              label="Business ID (Optional)"
              size="small"
              className={styles.oneHalfWidth}
              value={customerInfo.customerBusinessId}
              onChange={(e) => dispatch(setCustomerBusinessId(e.target.value))}
              onBlur={validateCustomerBusinessId}
              error={!isCorrectCustomerBusinessId}
              helperText={
                isCorrectCustomerBusinessId
                  ? ""
                  : Message.INVALID_FORMAT_CUSTOMER_BUSINESS_ID
              }
            />
          </div>

          <div>
            <TextField
              required
              id="customer_address"
              label="Address"
              size="small"
              className={styles.oneThirdWidth}
              value={customerInfo.customerAddress}
              onChange={(e) => dispatch(setCustomerAddress(e.target.value))}
            />
            <TextField
              required
              id="customer_city"
              label="City"
              size="small"
              className={styles.oneThirdWidth}
              value={customerInfo.customerCity}
              onChange={(e) => dispatch(setCustomerCity(e.target.value))}
            />
            <TextField
              required
              id="customer_postal_code"
              label="Postal code"
              size="small"
              className={styles.oneThirdWidth}
              value={customerInfo.customerPostalCode}
              onChange={(e) => dispatch(setCustomerPostalCode(e.target.value))}
            />
          </div>

          <div>
            <TextField
              id="customer_phoneNumber"
              label="Phone number (optional)"
              size="small"
              className={styles.oneHalfWidth}
              value={customerInfo.customerPhone}
              onChange={(e) => dispatch(setCustomerPhone(e.target.value))}
              onBlur={validatePhone}
              error={!isCorrectPhone}
              helperText={isCorrectPhone ? "" : Message.INVALID_FORMAT_PHONE}
            />
            <TextField
              id="customer_email"
              label="Email address (optional)"
              size="small"
              className={styles.oneHalfWidth}
              value={customerInfo.customerEmail}
              onChange={(e) => dispatch(setCustomerEmail(e.target.value))}
              onBlur={validateEmail}
              error={!isCorrectEmail}
              helperText={isCorrectEmail ? "" : Message.INVALID_FORMAT_EMAIL}
            />
          </div>
        </div>

        <div className={styles.invoiceDetail}>
          <div style={{ height: "60px" }}>
            <Typography variant="h5">Invoice Details</Typography>
          </div>
          <div>
            <TextField
              required
              id="invoice_number"
              label="Invoice number"
              size="small"
              className={styles.twoThirdWidth}
              value={customerInfo.invoiceNumber}
              onChange={(e) => dispatch(setInvoiceNumber(e.target.value))}
            />
          </div>

          <div>
            <TextField
              required
              id="invoice_date"
              label="Date of invoice"
              type="date"
              size="small"
              className={styles.twoThirdWidth}
              InputLabelProps={{
                shrink: true,
              }}
              value={customerInfo.invoiceDate}
              onChange={(e) => dispatch(setInvoiceDate(e.target.value))}
            />
            <TextField
              required
              id="due_date"
              label="Due date"
              type="date"
              size="small"
              className={styles.twoThirdWidth}
              InputLabelProps={{
                shrink: true,
              }}
              value={customerInfo.invoiceDueDate}
              onChange={(e) => dispatch(setInvoiceDueDate(e.target.value))}
            />
          </div>
        </div>
      </div>
    </Paper>
  );

  function validateEmail() {
    const isValid =
      customerInfo.customerEmail === "" ||
      validation.isValidEmailAddress(customerInfo.customerEmail);
    setIsCorrectEmail(isValid);
  }

  function validatePhone() {
    const isValid =
      customerInfo.customerPhone === "" ||
      validation.isValidPhoneNumber(customerInfo.customerPhone);
    setIsCorrectPhone(isValid);
  }

  function validateCustomerBusinessId() {
    const isValid =
      customerInfo.customerBusinessId === "" ||
      validation.isValidCustomerBusinessId(customerInfo.customerBusinessId);
    setIsCorrectCustomerBusinessId(isValid);
  }
}

const useStyles = makeStyles((theme) => ({
  oneHalfWidth: {
    width: "38.5%",
    marginRight: "1rem",
    [theme.breakpoints.down("sm")]: {
      width: "90%",
      margin: "1rem 0",
    },
  },
  oneThirdWidth: {
    width: "25%",
    marginRight: "1rem",
    [theme.breakpoints.down("sm")]: {
      width: "90%",
      margin: "1rem 0",
    },
  },
  twoThirdWidth: {
    width: "calc(50% + 1rem)",
    marginRight: "1rem",
    [theme.breakpoints.down("sm")]: {
      width: "90%",
      margin: "1rem 0",
    },
  },
  fullWidth: {
    width: "calc(90% + 2rem)",
    [theme.breakpoints.down("sm")]: {
      width: "90%",
      margin: "1rem 0",
    },
  },
  Content: {
    display: "flex",
    width: "100%",
  },
  recipientInfo: {
    width: "60%",
  },
  invoiceDetail: {
    width: "38%",
  },
}));

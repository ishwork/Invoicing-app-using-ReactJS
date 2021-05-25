import { Paper, TextField, Typography } from "@material-ui/core";
import { DropzoneArea } from "material-ui-dropzone";
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch, useSelector } from "react-redux";
import * as validation from "../util/Validation.js";
import * as fileUtil from "../util/FileUtil.js";
import {
  setLogo,
  setBusinessId,
  setCompanyName,
  setCompanyVATNumber,
  setCompanyAddress,
  setCompanyCity,
  setCompanyPostalCode,
  setIBAN,
  setPhone,
  setRefernceNumber,
  setSwiftCode,
  setEmail,
} from "../actions/CompanyInformation";
import React, { useState } from "react";
import * as Message from "../util/Message.js";

export default function CompanyInformation() {
  const styles = useStyles();
  const companyInfo = useSelector((state) => state.companyInformation);
  const dispatch = useDispatch();

  const [isCorrectBusinessId, setIsCorrectBusinessId] = useState(true);
  const [isCorrectVAT, setIsCorrectVAT] = useState(true);
  const [isCorrectEmail, setIsCorrectEmail] = useState(true);
  const [isCorrectPhone, setIsCorrectPhone] = useState(true);

  let file = null;
  if (companyInfo.logo !== "") {
    file = fileUtil.dataURLtoFile(companyInfo.logo);
  }

  return (
    <Paper variant="outlined" square className="PaperCard">
      <Typography variant="h5" style={{ paddingBottom: "20px" }}>
        Company Information
      </Typography>

      <div className="Content">
        <DropzoneArea
          dropzoneText="Upload company logo"
          initialFiles={file ? [file] : []}
          filesLimit={1}
          maxFileSize={2000000}
          acceptedFiles={["image/*"]}
          dropzoneClass={styles.uploader}
          onChange={(e) => uploadLogo(e)}
        />

        <div className={styles.textField}>
          <div>
            <TextField
              required
              label="Business ID"
              size="small"
              className={styles.oneThirdWidth}
              value={companyInfo.businessId}
              onChange={(e) => dispatch(setBusinessId(e.target.value))}
              onBlur={validateBusinessId}
              error={!isCorrectBusinessId}
              helperText={
                isCorrectBusinessId ? "" : Message.INVALID_FORMAT_BUSINESS_ID
              }
            />
            <TextField
              label="Email address"
              size="small"
              className={styles.oneThirdWidth}
              value={companyInfo.email}
              onChange={(e) => dispatch(setEmail(e.target.value))}
              onBlur={validateEmail}
              error={!isCorrectEmail}
              helperText={isCorrectEmail ? "" : Message.INVALID_FORMAT_EMAIL}
            />
            <TextField
              label="Phone number"
              size="small"
              className={styles.oneThirdWidth}
              value={companyInfo.phone}
              onChange={(e) => dispatch(setPhone(e.target.value))}
              onBlur={validatePhone}
              error={!isCorrectPhone}
              helperText={isCorrectPhone ? "" : Message.INVALID_FORMAT_PHONE}
            />
          </div>
          <div>
            <TextField
              required
              label="Company Name"
              size="small"
              className={styles.twoThirdWidth}
              value={companyInfo.companyName}
              onChange={(e) => dispatch(setCompanyName(e.target.value))}
            />
            <TextField
              required
              label="VAT number"
              size="small"
              value={companyInfo.companyVATNumber}
              className={styles.oneThirdWidth}
              onChange={(e) => dispatch(setCompanyVATNumber(e.target.value))}
              onBlur={validateVAT}
              error={!isCorrectVAT}
              helperText={isCorrectVAT ? "" : Message.INVALID_VAT_NUMBER}
            />
          </div>

          <div>
            <TextField
              required
              label="Company Address"
              size="small"
              value={companyInfo.companyAddress}
              className={styles.oneThirdWidth}
              onChange={(e) => dispatch(setCompanyAddress(e.target.value))}
            />
            <TextField
              required
              label="City"
              size="small"
              value={companyInfo.companyCity}
              className={styles.oneThirdWidth}
              onChange={(e) => dispatch(setCompanyCity(e.target.value))}
            />
            <TextField
              required
              label="Postal code"
              size="small"
              value={companyInfo.companyPostalCode}
              className={styles.oneThirdWidth}
              onChange={(e) => dispatch(setCompanyPostalCode(e.target.value))}
            />
          </div>

          <div>
            <TextField
              required
              label="Beneficiary's IBAN"
              size="small"
              value={companyInfo.iban}
              className={styles.twoThirdWidth}
              onChange={(e) => dispatch(setIBAN(e.target.value))}
            />
            <TextField
              required
              label="BCI/SWIFT code"
              size="small"
              value={companyInfo.swiftCode}
              className={styles.oneThirdWidth}
              onChange={(e) => dispatch(setSwiftCode(e.target.value))}
            />
          </div>

          <TextField
            label="Reference number"
            size="small"
            value={companyInfo.referenceNumber}
            className={styles.fullWidth}
            onChange={(e) => dispatch(setRefernceNumber(e.target.value))}
          />
        </div>
      </div>
    </Paper>
  );

  async function uploadLogo(e) {
    if (e[0]) {
      const base64 = await fileUtil.getBase64(e[0]);
      dispatch(setLogo(base64));
    } else {
      dispatch(setLogo(""));
    }
  }

  function validateBusinessId() {
    const isValid =
      companyInfo.businessId === "" ||
      validation.isValidBusinessId(companyInfo.businessId);
    setIsCorrectBusinessId(isValid);
  }

  function validateVAT() {
    const isValid =
      companyInfo.companyVATNumber === "" ||
      validation.isValidVATNumber(companyInfo.companyVATNumber);
    setIsCorrectVAT(isValid);
  }

  function validateEmail() {
    const isValid =
      companyInfo.email === "" ||
      validation.isValidEmailAddress(companyInfo.email);
    setIsCorrectEmail(isValid);
  }

  function validatePhone() {
    const isValid =
      companyInfo.phone === "" ||
      validation.isValidPhoneNumber(companyInfo.phone);
    setIsCorrectPhone(isValid);
  }
}

const useStyles = makeStyles((theme) => ({
  oneThirdWidth: {
    width: "30%",
    marginRight: "1rem",
    [theme.breakpoints.down("sm")]: {
      width: "90%",
      margin: "1rem 0",
    },
  },
  twoThirdWidth: {
    width: "calc(60% + 1rem)",
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
  uploader: {
    maxWidth: "300px",
  },
  textField: {
    minWidth: "300px",
    maxWidth: "800px",
  },
}));

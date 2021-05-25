import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch, useSelector } from "react-redux";

// for file upload
import { DropzoneArea } from "material-ui-dropzone";
import * as fileUtil from "../../util/FileUtil";

// material UI imports
import {
  Paper,
  Typography,
  Divider,
  Button,
  TextField,
} from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import SaveIcon from "@material-ui/icons/Save";
import BackspaceIcon from "@material-ui/icons/Backspace";

import { updateCompanyInfo } from "../../firestore/companyApi";

// actions
import { setCompanyInfo } from "../../actions/CompanyInformation";

const LoggedUserCompany = ({ companyId }) => {
  const styles = useStyles();
  const companyInfo = useSelector((state) => state.companyUser);
  const dispatch = useDispatch();

  //to toggle the edit and display template
  const [toggleEdit, setToggleEdit] = useState(false);

  const [tempCompanyInfo, setTempCompanyInfo] = useState(companyInfo);

  const cancelEdit = () => {
    setTempCompanyInfo(companyInfo);
    setToggleEdit(false);
  };

  const updateCompany = async () => {
    const data = await updateCompanyInfo(companyId, tempCompanyInfo);
    dispatch(setCompanyInfo(tempCompanyInfo));
    setToggleEdit(false);
  };

  // for file upload
  let file;
  if (companyInfo.logo !== "") {
    file = fileUtil.dataURLtoFile(companyInfo.logo);
  }

  async function uploadLogo(e) {
    if (e[0]) {
      const base64 = await fileUtil.getBase64(e[0]);
      console.log(base64);
      setTempCompanyInfo({
        ...tempCompanyInfo,
        logo: base64,
      });
    }
  }

  return (
    <>
      {/* Displaying company info section */}
      <Paper
        variant="outlined"
        square
        className="PaperCard"
        style={{ display: toggleEdit ? "none" : "block" }}
      >
        <Typography variant="h4" style={{ paddingBottom: "60px" }}>
          <div style={{ display: "inline", float: "left" }}>
            Company Information
          </div>
          <div style={{ display: "inline", float: "right" }}>
            <Button
              variant="contained"
              color="primary"
              size="large"
              onClick={() => setToggleEdit(true)}
            >
              <EditIcon />
            </Button>
          </div>
        </Typography>
        <Divider style={{ marginBottom: 10 }} />
        <Typography>
          {companyInfo.logo !== "" ? (
            <img
              src={companyInfo.logo}
              alt="Uploaded Images"
              height="100"
              width="100"
            />
          ) : (
            <Typography>No any logo yet</Typography>
          )}
        </Typography>
        <Typography
          variant="h6"
          component="body1"
          style={{ paddingBottom: "0px" }}
        >
          Email Address
        </Typography>
        <Typography variant="body1" style={{ paddingBottom: "10px" }}>
          {companyInfo.email}
        </Typography>

        <Typography variant="h6" style={{ paddingBottom: "0px" }}>
          Business ID
        </Typography>
        <Typography variant="body1" style={{ paddingBottom: "10px" }}>
          {companyInfo.businessId}
        </Typography>

        <Typography
          variant="h6"
          component="body1"
          style={{ paddingBottom: "0px" }}
        >
          Name
        </Typography>
        <Typography variant="body1" style={{ paddingBottom: "10px" }}>
          {companyInfo.name}
        </Typography>

        <Typography
          variant="h6"
          component="body1"
          style={{ paddingBottom: "0px" }}
        >
          VAT Number
        </Typography>
        <Typography variant="body1" style={{ paddingBottom: "10px" }}>
          {companyInfo.companyVATNumber}
        </Typography>

        <Typography
          variant="h6"
          component="body1"
          style={{ paddingBottom: "0px" }}
        >
          Address
        </Typography>
        <Typography variant="body1" style={{ paddingBottom: "10px" }}>
          {companyInfo.address} <br />
          {companyInfo.postalCode} {companyInfo.city}
        </Typography>

        <Typography
          variant="h6"
          component="body1"
          style={{ paddingBottom: "0px" }}
        >
          Phone Number
        </Typography>
        <Typography variant="body1" style={{ paddingBottom: "10px" }}>
          {companyInfo.phone}
        </Typography>

        <Typography
          variant="h6"
          component="body1"
          style={{ paddingBottom: "0px" }}
        >
          IBAN
        </Typography>
        <Typography variant="body1" style={{ paddingBottom: "10px" }}>
          {companyInfo.iban}
        </Typography>

        <Typography
          variant="h6"
          component="body1"
          style={{ paddingBottom: "0px" }}
        >
          Swift Code
        </Typography>
        <Typography variant="body1" style={{ paddingBottom: "10px" }}>
          {companyInfo.swiftCode}
        </Typography>

        <Typography
          variant="h6"
          component="body1"
          style={{ paddingBottom: "0px" }}
        >
          Reference Number
        </Typography>
        <Typography variant="body1" style={{ paddingBottom: "10px" }}>
          {companyInfo.referenceNumber}
        </Typography>
      </Paper>

      {/* Editing company info section */}
      <Paper
        variant="outlined"
        square
        className="PaperCard"
        style={{ display: toggleEdit ? "block" : "none" }}
      >
        <Typography variant="h4" style={{ paddingBottom: "20px" }}>
          Company Information
        </Typography>

        <div className="Content">
          <DropzoneArea
            dropzoneText="Upload new logo"
            dropzoneClass={styles.uploader}
            initialFiles={[file]}
            filesLimit={1}
            maxFileSize={2000000}
            acceptedFiles={["image/*"]}
            onChange={(e) => uploadLogo(e)}
          />

          <div className={styles.textField}>
            <div>
              <TextField
                label="Business ID"
                className={styles.oneHalfWidth}
                value={tempCompanyInfo.businessId}
                onChange={(e) =>
                  setTempCompanyInfo({
                    ...tempCompanyInfo,
                    businessId: e.target.value,
                  })
                }
              />

              <TextField
                label="Phone Number"
                className={styles.oneHalfWidth}
                value={tempCompanyInfo.phone}
                onChange={(e) =>
                  setTempCompanyInfo({
                    ...tempCompanyInfo,
                    phone: e.target.value,
                  })
                }
              />
            </div>

            <div>
              <TextField
                label="Name"
                className={styles.twoThirdWidth}
                value={tempCompanyInfo.name}
                onChange={(e) =>
                  setTempCompanyInfo({
                    ...tempCompanyInfo,
                    name: e.target.value,
                  })
                }
              />
              <TextField
                label="VAT Number"
                className={styles.oneThirdWidth}
                value={tempCompanyInfo.companyVATNumber}
                onChange={(e) =>
                  setTempCompanyInfo({
                    ...tempCompanyInfo,
                    companyVATNumber: e.target.value,
                  })
                }
              />
            </div>

            <div>
              <TextField
                label="Address"
                value={tempCompanyInfo.address}
                className={styles.oneThirdWidth}
                onChange={(e) =>
                  setTempCompanyInfo({
                    ...tempCompanyInfo,
                    address: e.target.value,
                  })
                }
              />
              <TextField
                label="City"
                value={tempCompanyInfo.city}
                className={styles.oneThirdWidth}
                onChange={(e) =>
                  setTempCompanyInfo({
                    ...tempCompanyInfo,
                    city: e.target.value,
                  })
                }
              />
              <TextField
                label="Postal Code"
                value={tempCompanyInfo.postalCode}
                className={styles.oneThirdWidth}
                onChange={(e) =>
                  setTempCompanyInfo({
                    ...tempCompanyInfo,
                    postalCode: e.target.value,
                  })
                }
              />
            </div>

            <div>
              <TextField
                label="IBAN"
                className={styles.twoThirdWidth}
                value={tempCompanyInfo.iban}
                onChange={(e) =>
                  setTempCompanyInfo({
                    ...tempCompanyInfo,
                    iban: e.target.value,
                  })
                }
              />
              <TextField
                label="Swift Code"
                className={styles.oneThirdWidth}
                value={tempCompanyInfo.swiftCode}
                onChange={(e) =>
                  setTempCompanyInfo({
                    ...tempCompanyInfo,
                    swiftCode: e.target.value,
                  })
                }
              />
            </div>

            <TextField
              label="Reference Number"
              className={styles.fullWidth}
              value={tempCompanyInfo.referenceNumber}
              onChange={(e) =>
                setTempCompanyInfo({
                  ...tempCompanyInfo,
                  referenceNumber: e.target.value,
                })
              }
            />
          </div>

          {/*<div>

        </div>*/}
        </div>
        <div className={styles.buttonDiv}>
          <div style={{ marginTop: "10px", float: "right" }}>
            <Button
              variant="contained"
              color="primary"
              onClick={updateCompany}
              style={{ marginLeft: "10px" }}
            >
              <SaveIcon />
            </Button>
            <Button
              variant="contained"
              color="secondary"
              onClick={cancelEdit}
              style={{ marginLeft: "20px" }}
            >
              <BackspaceIcon />
            </Button>
          </div>
        </div>
      </Paper>
    </>
  );
};

const useStyles = makeStyles((theme) => ({
  oneHalfWidth: {
    width: "46%",
    marginRight: "1rem",
    [theme.breakpoints.down("sm")]: {
      width: "90%",
      margin: "1rem 0",
    },
  },
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

  buttonDiv: {
    marginTop: "20px",
    width: "100%",
    height: "50px",
  },
}));

export default LoggedUserCompany;

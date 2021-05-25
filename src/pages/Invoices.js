import React, { useState, useEffect } from "react";
import { Paper, Typography, Divider } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import { ToastContainer, toast } from "react-toastify";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import Fire from "../firestore/Fire";

import {
  getInvoices,
  deleteInvoice,
  getInvoicesFullDetail,
} from "../firestore/invoicesApi";
import {
  setCompanyInfoSection,
  setCustomerInfoSection,
  setProductsSection,
} from "../util/ReduxUtil";

const useStyles = makeStyles({
  grid: {
    minHeight: 400,
  },
});

const Invoices = () => {
  const classes = useStyles();
  const [invoicesData, setInvoicesData] = useState("");
  const history = useHistory();

  useEffect(() => {
    const fetchData = async () => {
      await Fire.auth().onAuthStateChanged(async (user) => {
        if (user) {
          const invoices = await getInvoices(user.uid);
          await setInvoicesData(invoices);
        } else {
          console.log("User not found");
          history.push("login");
          return;
        }
      });
    };

    fetchData();
  }, [history]);

  const displayInvoice = (id, invoice) => (
    <TableRow key={id}>
      <TableCell size="small">
        {new Date(invoice.timestamp).toLocaleString()}
      </TableCell>
      <TableCell>{invoice.recipientName}</TableCell>
      <TableCell size="small" align="right">
        {invoice.total}
      </TableCell>
      <TableCell align="right">
        <EditIcon
          style={{ cursor: "pointer" }}
          onClick={() => editInvoice(id)}
        />
      </TableCell>
      <TableCell align="right">
        <DeleteIcon
          style={{ cursor: "pointer" }}
          onClick={() => removeInvoice(id)}
        />
      </TableCell>
    </TableRow>
  );

  const dispatch = useDispatch();
  const editInvoice = async (id) => {
    const [
      companyInfo,
      recipientInfo,
      productsInfo,
    ] = await getInvoicesFullDetail(id);
    console.log(companyInfo, recipientInfo, productsInfo);

    setCompanyInfoSection(dispatch, companyInfo.companyInfo);
    setCustomerInfoSection(dispatch, recipientInfo.customerInfo);
    setProductsSection(dispatch, productsInfo.productInfo.products);
    history.push("/");
  };

  const removeInvoice = async (id) => {
    const deleted = await deleteInvoice(id);
    if (deleted) {
      const newInvoices = invoicesData.filter((i) => i.id !== id);
      setInvoicesData(newInvoices);
      toast.success("Invoice deleted.", {
        position: toast.POSITION.BOTTOM_LEFT,
      });
    } else {
      toast.error("There is an error. Please try again or contact the admin.", {
        position: toast.POSITION.BOTTOM_LEFT,
      });
    }
  };

  return (
    <Paper variant="outlined" square className="PaperCard">
      <ToastContainer />
      <Typography variant="h4" style={{ paddingBottom: "20px" }}>
        Invoices History
      </Typography>

      <Divider />
      <TableContainer component={Paper}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell size="small">Date Time</TableCell>
              <TableCell>Recipient Name</TableCell>
              <TableCell size="small" align="right">
                Total
              </TableCell>
              <TableCell align="right">Edit</TableCell>
              <TableCell align="right">Delete</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {invoicesData.length > 0 ? (
              invoicesData.map((invoice) =>
                displayInvoice(invoice.id, invoice.data)
              )
            ) : (
              <TableRow>
                <TableCell>You don't have any invoice at the moment</TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default Invoices;

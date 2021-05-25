import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Paper, Typography, Divider, Button } from "@material-ui/core";

// table components material UI
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

import TextField from "@material-ui/core/TextField";

import AddIcon from "@material-ui/icons/Add";
import EditIcon from "@material-ui/icons/Edit";
import SaveOutlinedIcon from "@material-ui/icons/SaveOutlined";
import DoneOutlineIcon from "@material-ui/icons/DoneOutline";
import DeleteIcon from "@material-ui/icons/Delete";

// api
import {
  addCustomerWithCompanyId,
  updateCustomerWithId,
  removeCustomerWithId,
} from "../../firestore/customerApi";

// action
import { setCustomers } from "../../actions/CustomerInformation";

const LoggedUserCustomer = ({ companyId }) => {
  const customers = useSelector((state) => state.customers);
  const dispatch = useDispatch();

  const [customer, setCustomer] = useState({
    name: "",
    email: "",
    address: "",
    postalCode: "",
    city: "",
    phone: "",
    customerBusinessId: "",
  });

  const [addFormToggle, setAddFormToggle] = useState(false);
  const [editFormToggle, setEditFormToggle] = useState(false);
  const [editId, setEditId] = useState("");

  const displayCustomer = (id, customer) => (
    <TableRow key={id}>
      <TableCell>{customer.name}</TableCell>
      <TableCell>{customer.email}</TableCell>
      <TableCell>
        {customer.address}, {customer.postalCode}, {customer.city}{" "}
      </TableCell>
      <TableCell>{customer.phone}</TableCell>
      <TableCell>{customer.customerBusinessId}</TableCell>
      <TableCell align="right">
        <EditIcon
          style={{ cursor: "pointer" }}
          onClick={() => displayEditForm(id, customer)}
        />
      </TableCell>
      <TableCell align="right">
        <DeleteIcon
          style={{ cursor: "pointer" }}
          onClick={() => removeCustomer(id)}
        />
      </TableCell>
    </TableRow>
  );

  const displayEditForm = (id, customer) => {
    setEditId(id);
    setCustomer(customer);
    setEditFormToggle(true);
  };

  const addCustomer = async () => {
    const newCustomer = { companyId, ...customer };
    const add = await addCustomerWithCompanyId(newCustomer);
    dispatch(setCustomers([...customers, [add.id, newCustomer]]));
    setAddFormToggle(false);
    setCustomer({
      name: "",
      email: "",
      address: "",
      postalCode: "",
      city: "",
      phone: "",
      customerBusinessId: "",
    });
  };

  const updateCustomer = async () => {
    if (editId !== "") {
      const update = await updateCustomerWithId(editId, customer);
      const filter = customers.filter((customer) => customer[0] !== editId);
      dispatch(setCustomers([...filter, [editId, customer]]));
      setEditFormToggle(false);
      setEditId("");
      setCustomer({
        name: "",
        email: "",
        address: "",
        postalCode: "",
        city: "",
        phone: "",
        customerBusinessId: "",
      });
    }
  };

  const removeCustomer = async (id) => {
    const remove = await removeCustomerWithId(id);
    const newList = customers.filter((customer) => customer[0] !== id);
    dispatch(setCustomers(newList));
  };

  return (
    <Paper variant="outlined" square className="PaperCard">
      <Typography variant="h4" style={{ paddingBottom: "60px" }}>
        <div style={{ display: "inline", float: "left" }}>Customers</div>
        <div style={{ display: "inline", float: "right" }}>
          <Button
            variant="contained"
            color="primary"
            size="large"
            onClick={() => setAddFormToggle(!addFormToggle)}
          >
            <AddIcon fontSize="large" />
          </Button>
        </div>
      </Typography>

      <Divider />
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Email Address</TableCell>
              <TableCell>Address</TableCell>
              <TableCell>Phone Number</TableCell>
              <TableCell>Business ID</TableCell>
              <TableCell align="right">Edit</TableCell>
              <TableCell align="right">Delete</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {customers.length > 0
              ? customers.map((customer) =>
                  displayCustomer(customer[0], customer[1])
                )
              : "You don't have any customers at the moment"}
          </TableBody>
        </Table>
        <TableBody
          style={{
            display: addFormToggle || editFormToggle ? "block" : "none",
          }}
        >
          <TableCell>
            <TextField
              label="Name"
              value={customer.name}
              onChange={(e) =>
                setCustomer({ ...customer, name: e.target.value })
              }
            />
          </TableCell>
          <TableCell>
            <TextField
              label="Email Address"
              value={customer.email}
              onChange={(e) =>
                setCustomer({ ...customer, email: e.target.value })
              }
            />
          </TableCell>
          <TableCell>
            <TextField
              label="Address"
              value={customer.address}
              onChange={(e) =>
                setCustomer({ ...customer, address: e.target.value })
              }
            />
          </TableCell>
          <TableCell>
            <TextField
              label="Postal Code"
              value={customer.postalCode}
              onChange={(e) =>
                setCustomer({ ...customer, postalCode: e.target.value })
              }
            />
          </TableCell>
          <TableCell>
            <TextField
              label="City"
              value={customer.city}
              onChange={(e) =>
                setCustomer({ ...customer, city: e.target.value })
              }
            />
          </TableCell>
          <TableCell>
            <TextField
              label="Phone Number"
              value={customer.phone}
              onChange={(e) =>
                setCustomer({ ...customer, phone: e.target.value })
              }
            />
          </TableCell>
          <TableCell>
            <TextField
              label="Business ID"
              value={customer.customerBusinessId}
              onChange={(e) =>
                setCustomer({ ...customer, customerBusinessId: e.target.value })
              }
            />
          </TableCell>
          <TableCell align="right">
            <SaveOutlinedIcon
              color="primary"
              fontSize="large"
              style={{
                cursor: "pointer",
                display: addFormToggle ? "block" : "none",
              }}
              onClick={addCustomer}
            />
            <DoneOutlineIcon
              color="primary"
              fontSize="large"
              style={{
                cursor: "pointer",
                display: editFormToggle ? "block" : "none",
              }}
              onClick={updateCustomer}
            />
          </TableCell>
        </TableBody>
      </TableContainer>
    </Paper>
  );
};

export default LoggedUserCustomer;

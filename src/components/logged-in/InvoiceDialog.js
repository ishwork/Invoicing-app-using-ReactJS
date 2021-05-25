import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { Paper, Typography, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import Dialog from "@material-ui/core/Dialog";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import CloseIcon from "@material-ui/icons/Close";
import Slide from "@material-ui/core/Slide";

// for radio button
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";

//for checkbox
import Checkbox from "@material-ui/core/Checkbox";

// actions
import { setCompany } from "../../actions/CompanyInformation";
import { setCustomer } from "../../actions/CustomerInformation";
import { setProducts } from "../../actions/ProductInformation";

// history
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: "relative",
    backgroundColor: "#ffa500",
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
  button: {
    fontSize: "1.1rem",
    margin: theme.spacing(2),
    backgroundColor: "#ffa500",
    "&:hover": {
      backgroundColor: "#b5651d",
    },
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const InvoiceDialog = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const companyUser = useSelector((state) => state.companyUser);

  // for customer data
  const [value, setValue] = useState("");
  const [selectedCustomer, setSelectedCustomer] = React.useState({});

  const dispatch = useDispatch();
  const customers = useSelector((state) => state.customers);

  const displayCustomer = (id, name) => (
    <FormControlLabel key={id} value={id} control={<Radio />} label={name} />
  );

  const handleRadioButton = (event) => {
    setValue(event.target.value);
    const chosenCustomer = customers.filter(
      (customer) => customer[0] === event.target.value
    );
    setSelectedCustomer(chosenCustomer[0]);
  };

  // for product data
  const products = useSelector((state) => state.products);

  const [selectedProducts, setSelectedProducts] = useState([]);

  const displayProduct = (id, name) => (
    <FormControlLabel
      control={<Checkbox onChange={handleCheckBox} value={id} />}
      label={name}
    />
  );

  const handleCheckBox = (event) => {
    const productId = event.target.value;
    const isProductSelected = selectedProducts.filter(
      (product) => product[0] === productId
    );
    if (isProductSelected.length > 0) {
      const temp = selectedProducts.filter(
        (product) => product[0] !== productId
      );
      setSelectedProducts(temp);
      console.log(selectedProducts);
    } else {
      const addProduct = products.filter(
        (product) => product[0] === productId
      )[0];
      setSelectedProducts((selectedProducts) => [
        ...selectedProducts,
        addProduct,
      ]);
      console.log(selectedProducts);
    }
  };

  const history = useHistory();

  const handleSubmit = () => {
    dispatch(setCompany(companyUser));
    dispatch(setCustomer(selectedCustomer[1]));
    const slicedProducts = selectedProducts.map((product) => product[1]);
    dispatch(setProducts(slicedProducts));
    history.push("/");
  };

  return (
    <div>
      <Button
        variant="contained"
        color="primary"
        className={classes.button}
        onClick={handleClickOpen}
      >
        Create Invoice
      </Button>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar className={classes.appBar}>
          <Toolbar>
            <Typography variant="h4" className={classes.title}>
              Create Invoice
            </Typography>
            <Button autoFocus color="inherit" onClick={handleClose}>
              <CloseIcon />
            </Button>
          </Toolbar>
        </AppBar>
        <Paper variant="outlined" square className="PaperCard">
          <FormControl component="fieldset">
            <FormLabel component="legend">Select a Customer</FormLabel>
            <RadioGroup
              aria-label="customer"
              name="customer"
              value={value}
              onChange={handleRadioButton}
            >
              {customers.map((customer) =>
                displayCustomer(customer[0], customer[1].name)
              )}
            </RadioGroup>
          </FormControl>
        </Paper>
        <Paper variant="outlined" square className="PaperCard">
          <FormControl component="fieldset">
            <FormLabel component="legend">Select Products</FormLabel>
            {products.map((product) =>
              displayProduct(product[0], product[1].ItemName)
            )}
          </FormControl>
        </Paper>
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          onClick={handleSubmit}
        >
          Send
        </Button>
      </Dialog>
    </div>
  );
};

export default InvoiceDialog;

import AddIcon from "@material-ui/icons/Add";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
import { Paper, Button } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../actions/ProductInformation.js";
import "../index.css";
import {
  calcInvoiceTotal,
  calcProductTotal,
  calcTotalVAT,
} from "../util/Calculator.js";

// for product VAT field input selection
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";

export default function ProductInformation() {
  const styles = useStyles();
  const [localProducts, setLocalProducts] = useState([
    { ItemName: "", Amount: "", Price: "", VAT: "", Discount: "", Total: "" },
  ]);
  const productInfo = useSelector((state) => state.productInformation);
  const dispatch = useDispatch();

  const handleChangeInput = (index, event) => {
    const values = [...localProducts];
    values[index][event.target.name] = event.target.value;
    setLocalProducts(values);
    dispatch(setProducts(localProducts));
  };
  useEffect(() => {
    if (productInfo.products && productInfo.products.length > 0) {
      setLocalProducts(productInfo.products);
    }
  }, [productInfo]);

  const handleAddFields = () => {
    setLocalProducts([
      ...localProducts,
      {
        ItemName: "",
        Amount: "",
        Price: "",
        VAT: "",
        Discount: "",
        Total: "",
      },
    ]);
  };

  const handleRemoveFields = (index) => {
    const values = [...localProducts];
    values.splice(index, 1);
    setLocalProducts(values);
    dispatch(setProducts(values));

    if (values.length === 0) {
      setLocalProducts([
        {
          ItemName: "",
          Amount: "",
          Price: "",
          VAT: "",
          Discount: "",
          Total: "",
        },
      ]);
    }
  };

  return (
    <Paper variant="outlined" square className="PaperCard">
      <Typography variant="h5" style={{ paddingBottom: "20px" }}>
        Add Product Details
      </Typography>
      <div className="Content">
        <div className={styles.textField}>
          <div>
            <form>
              {localProducts.map((inputField, index) => (
                <div className={styles.productItem} key={index}>
                  <TextField
                    required
                    name="ItemName"
                    label="Item Name"
                    value={inputField.ItemName}
                    onChange={(event) => handleChangeInput(index, event)}
                    className={styles.ItemNameWidth}
                  />
                  <TextField
                    required
                    name="Amount"
                    label="Amount"
                    value={inputField.Amount}
                    onChange={(event) => handleChangeInput(index, event)}
                    className={styles.oneSixthWidth}
                  />
                  <TextField
                    required
                    name="Price"
                    label="Price"
                    value={inputField.Price}
                    onChange={(event) => handleChangeInput(index, event)}
                    className={styles.oneSixthWidth}
                  />

                  <FormControl
                    className={(styles.formControl, styles.oneSixthWidth)}
                  >
                    <InputLabel htmlFor="vat">VAT (%)*</InputLabel>
                    <Select
                      name="VAT"
                      labelId="vat"
                      value={inputField.VAT}
                      onChange={(event) => handleChangeInput(index, event)}
                    >
                      <MenuItem value={0}>0</MenuItem>
                      <MenuItem value={10}>10</MenuItem>
                      <MenuItem value={14}>14</MenuItem>
                      <MenuItem value={24}>24</MenuItem>
                    </Select>
                  </FormControl>

                  <TextField
                    name="Discount"
                    label="Discount (%)"
                    value={inputField.Discount}
                    onChange={(event) => handleChangeInput(index, event)}
                    className={styles.oneSixthWidth}
                  />
                  <TextField
                    name="Total"
                    label="Total"
                    value={calcProductTotal(inputField)}
                    className={styles.oneSixthWidth}
                  />

                  <IconButton
                    aria-label="delete"
                    className={styles.btn_del}
                    onClick={() => handleRemoveFields(index)}
                  >
                    <DeleteIcon />
                  </IconButton>
                </div>
              ))}

              <div className={styles.totalSum}>
                <Button
                  className={styles.addBtn}
                  variant="contained"
                  color="primary"
                  size="large"
                  onClick={() => handleAddFields()}
                >
                  <AddIcon fontSize="large" />
                </Button>
                <div className={styles.summary}>
                  <div className={styles.total}>
                    <Typography gutterBottom>
                      Total VAT: {"EUR " + calcTotalVAT(localProducts)}
                    </Typography>
                  </div>

                  <div className={styles.total}>
                    <Typography gutterBottom>
                      Total Sum: {"EUR " + calcInvoiceTotal(localProducts)}
                    </Typography>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Paper>
  );
}

const useStyles = makeStyles((theme) => ({
  textField: {
    width: "100%",
  },
  productItem: {
    display: "flex",
    flexWrap: "wrap",
    margin: "1rem 0",
    justifyContent: "space-around",
  },
  ItemNameWidth: {
    width: "15%",
    marginRight: "1rem",
    [theme.breakpoints.down("sm")]: {
      width: "95%",
      margin: "1rem 0",
    },
  },
  oneSixthWidth: {
    width: "12%",
    marginRight: "1rem",
    [theme.breakpoints.down("sm")]: {
      width: "95%",
      margin: "1rem 0",
    },
  },
  totalSum: {
    display: "flex",
  },
  addBtn: {
    alignSelf: "flex-start",
    marginTop: "2rem",
    backgroundColor: "#ffa500",
    "&:hover": {
      backgroundColor: "#b5651d",
    },
  },
  summary: {
    flexGrow: 1,
  },
  total: {
    marginTop: "1rem",
    textAlign: "right",
  },
  btn_add: {
    padding: ".875rem",
    color: "blue",
    cursor: "pointer",
  },
  btn_del: {
    padding: ".875rem",
    top: ".7rem",
    left: 0,
    color: "red",
    cursor: "pointer",
  },
}));

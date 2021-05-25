import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Paper, Typography, Divider, Button } from "@material-ui/core";

// for product vat field input selection
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import { makeStyles } from "@material-ui/core/styles";

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

//api
import {
  addProductWithCompanyId,
  updateProductWithId,
  removeProductWithId,
} from "../../firestore/productApi";

// action
import { setProductsFromFirebase } from "../../actions/ProductInformation";

// for VAT selection in products
const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

const LoggedUserProduct = ({ companyId }) => {
  const classes = useStyles();

  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();

  const [product, setProduct] = useState({
    ItemName: "",
    Amount: "1",
    Price: "",
    VAT: "",
    Discount: "",
    Total: "",
  });

  const [addFormToggle, setAddFormToggle] = useState(false);
  const [editFormToggle, setEditFormToggle] = useState(false);
  const [editId, setEditId] = useState("");

  const displayProduct = (id, product) => (
    <TableRow key={id}>
      <TableCell>{product.ItemName}</TableCell>
      <TableCell>{product.Price}</TableCell>
      <TableCell>{product.VAT}</TableCell>
      <TableCell>{product.Discount}</TableCell>
      <TableCell align="right">
        <EditIcon
          style={{ cursor: "pointer" }}
          onClick={() => displayEditForm(id, product)}
        />
      </TableCell>
      <TableCell align="right">
        <DeleteIcon
          style={{ cursor: "pointer" }}
          onClick={() => removeProduct(id)}
        />
      </TableCell>
    </TableRow>
  );

  const displayEditForm = (id, product) => {
    setEditId(id);
    setProduct(product);
    setEditFormToggle(true);
  };

  const addProduct = async () => {
    const newProduct = { companyId, ...product };
    const add = await addProductWithCompanyId(newProduct);
    dispatch(setProductsFromFirebase([...products, [add.id, newProduct]]));
    setProduct({
      ItemName: "",
      Amount: "1",
      Price: "",
      VAT: "",
      Discount: "",
      Total: "",
    });
    setAddFormToggle(false);
  };

  const updateProduct = async () => {
    if (editId !== "") {
      const update = await updateProductWithId(editId, product);
      const filter = products.filter((product) => product[0] !== editId);
      dispatch(setProductsFromFirebase([...filter, [editId, product]]));
      setEditFormToggle(false);
      setEditId("");
      setProduct({
        ItemName: "",
        Amount: "1",
        Price: "",
        VAT: "",
        Discount: "",
        Total: "",
      });
    }
  };

  const removeProduct = async (id) => {
    const remove = await removeProductWithId(id);
    const newList = products.filter((product) => product[0] !== id);
    dispatch(setProductsFromFirebase(newList));
  };

  return (
    <>
      <Paper variant="outlined" square className="PaperCard">
        <Typography variant="h4" style={{ paddingBottom: "60px" }}>
          <div style={{ display: "inline", float: "left" }}>Products</div>
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
                <TableCell>Price</TableCell>
                <TableCell>VAT (%)</TableCell>
                <TableCell>Discount (%)</TableCell>
                <TableCell align="right">Edit</TableCell>
                <TableCell align="right">Delete</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {products.length > 0
                ? products.map((product) =>
                    displayProduct(product[0], product[1])
                  )
                : "You don't have any products at the moment"}
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
                value={product.ItemName}
                onChange={(e) =>
                  setProduct({ ...product, ItemName: e.target.value })
                }
              />
            </TableCell>
            <TableCell>
              <TextField
                label="Price"
                value={product.Price}
                onChange={(e) =>
                  setProduct({ ...product, Price: e.target.value })
                }
              />
            </TableCell>

            <TableCell>
              <FormControl className={classes.formControl}>
                <InputLabel htmlFor="vat">VAT</InputLabel>
                <Select
                  labelId="vat"
                  value={product.VAT}
                  onChange={(e) =>
                    setProduct({ ...product, VAT: e.target.value })
                  }
                  style={{ marginTop: "15px" }}
                >
                  <MenuItem value={0}>0</MenuItem>
                  <MenuItem value={10}>10</MenuItem>
                  <MenuItem value={14}>14</MenuItem>
                  <MenuItem value={24}>24</MenuItem>
                </Select>
              </FormControl>
            </TableCell>

            <TableCell>
              <TextField
                label="Discount (%)"
                value={product.Discount}
                onChange={(e) =>
                  setProduct({ ...product, Discount: e.target.value })
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
                onClick={addProduct}
              />
              <DoneOutlineIcon
                color="primary"
                fontSize="large"
                style={{
                  cursor: "pointer",
                  display: editFormToggle ? "block" : "none",
                }}
                onClick={updateProduct}
              />
            </TableCell>
          </TableBody>
        </TableContainer>
      </Paper>
    </>
  );
};

export default LoggedUserProduct;

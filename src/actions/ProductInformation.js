export const SET_PRODUCTS = "SET_PRODUCTS";

export const SET_PRODUCTS_FROM_FIREBASE = "SET_PRODUCTS_FROM_FIREBASE";

// for ProductInformation reducer
export const setProducts = (val) => ({
  type: SET_PRODUCTS,
  value: val,
});

// for Products reducer
export const setProductsFromFirebase = (val) => ({
  type: SET_PRODUCTS_FROM_FIREBASE,
  value: val,
});

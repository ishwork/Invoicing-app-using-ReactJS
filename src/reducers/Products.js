import { SET_PRODUCTS_FROM_FIREBASE } from "../actions/ProductInformation";

export const products = (state = [], action) => {
  switch (action.type) {
    case SET_PRODUCTS_FROM_FIREBASE:
      state = action.value;
      return JSON.parse(JSON.stringify(state));
    default:
      return state;
  }
};

import { SET_PRODUCTS } from "../actions/ProductInformation";

export const productInformation = (state = { products: [] }, action) => {
  switch (action.type) {
    case SET_PRODUCTS:
      state.products = action.value;
      return JSON.parse(JSON.stringify(state));
    default:
      return state;
  }
};

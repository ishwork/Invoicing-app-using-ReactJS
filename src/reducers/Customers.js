import { SET_CUSTOMERS } from "../actions/CustomerInformation";

export const customers = (state = [], action) => {
  switch (action.type) {
    case SET_CUSTOMERS:
      state = action.value;
      return JSON.parse(JSON.stringify(state));

    default:
      return state;
  }
};

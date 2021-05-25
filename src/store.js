import { createStore, combineReducers } from "redux";
import { companyInformation } from "./reducers/CompanyInformation.js";
import { customerInformation } from "./reducers/CustomerInformation.js";
import { productInformation } from "./reducers/ProductInformation.js";

import { companyUser } from "./reducers/CompanyUser";
import { customers } from "./reducers/Customers";
import { products } from "./reducers/Products";

export const store = createStore(
  combineReducers({
    companyInformation,
    customerInformation,
    productInformation,
    companyUser,
    customers,
    products,
  })
);

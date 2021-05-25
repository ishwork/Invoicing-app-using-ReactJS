import {
  setLogo,
  setBusinessId,
  setCompanyName,
  setCompanyVATNumber,
  setCompanyAddress,
  setCompanyCity,
  setCompanyPostalCode,
  setIBAN,
  setPhone,
  setRefernceNumber,
  setSwiftCode,
  setEmail,
} from "../actions/CompanyInformation";

import {
  setCustomerPhone,
  setCustomerName,
  setCustomerBusinessId,
  setCustomerAddress,
  setCustomerCity,
  setCustomerPostalCode,
  setCustomerEmail,
  setInvoiceNumber,
  setInvoiceDate,
  setInvoiceDueDate,
} from "../actions/CustomerInformation.js";
import { setProducts } from "../actions/ProductInformation.js";

/**
 * Set company info to redux store.
 * This function can be improve by having one action/reducer that process the whole company info object,
 * instead of dispatching each company info property one by one.
 *
 * @param {*} dispatchCallback since `useDispatch` can't be imported here, it will be pased by the caller
 * @param {*} data the whole company info to be set to Redux store
 */
export const setCompanyInfoSection = (dispatchCallback, data) => {
  dispatchCallback(setLogo(data.logo)); // bug: not render the image at the first time, switching pages will help
  dispatchCallback(setBusinessId(data.businessId));
  dispatchCallback(setCompanyName(data.companyName));
  dispatchCallback(setCompanyVATNumber(data.companyVATNumber));
  dispatchCallback(setCompanyAddress(data.companyAddress));
  dispatchCallback(setCompanyCity(data.companyCity));
  dispatchCallback(setCompanyPostalCode(data.companyPostalCode));
  dispatchCallback(setIBAN(data.iban));
  dispatchCallback(setPhone(data.phone));
  dispatchCallback(setRefernceNumber(data.referenceNumber));
  dispatchCallback(setSwiftCode(data.swiftCode));
  dispatchCallback(setEmail(data.email));
};

export const setCustomerInfoSection = (dispatchCallback, data) => {
  dispatchCallback(setCustomerName(data.customerName));
  dispatchCallback(setCustomerPhone(data.customerPhone));
  dispatchCallback(setCustomerBusinessId(data.customerBusinessId));
  dispatchCallback(setCustomerAddress(data.customerAddress));
  dispatchCallback(setCustomerCity(data.customerCity));
  dispatchCallback(setCustomerPostalCode(data.customerPostalCode));
  dispatchCallback(setCustomerEmail(data.customerEmail));
  dispatchCallback(setInvoiceNumber(data.invoiceNumber));
  dispatchCallback(setInvoiceDate(data.invoiceDate));
  dispatchCallback(setInvoiceDueDate(data.invoiceDueDate));
};

export const setProductsSection = (dispatchCallback, products) => {
  dispatchCallback(setProducts(products));
};

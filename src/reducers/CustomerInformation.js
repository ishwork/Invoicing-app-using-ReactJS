import {
  SET_CUSTOMER_NAME,
  SET_CUSTOMER_PHONE,
  SET_CUSTOMER_BUSINESS_ID,
  SET_CUSTOMER_ADDRESS,
  SET_CUSTOMER_CITY,
  SET_CUSTOMER_POSTAL_CODE,
  SET_CUSTOMER_EMAIL,
  SET_INVOICE_NUMBER,
  SET_INVOICE_DATE,
  SET_INVOICE_DUE_DATE,
  SET_CUSTOMER,
} from "../actions/CustomerInformation";

const INIT_STATES = {
  customerName: "",
  customerPhone: "",
  customerBusinessId: "",
  customerAddress: "",
  customerCity: "",
  customerPostalCode: "",
  customerEmail: "",
  invoiceNumber: "",
  invoiceDate: "",
  invoiceDueDate: "",
};

export const customerInformation = (state = INIT_STATES, action) => {
  switch (action.type) {
    case SET_CUSTOMER_NAME:
      state.customerName = action.value;
      return JSON.parse(JSON.stringify(state));
    case SET_CUSTOMER_PHONE:
      state.customerPhone = action.value;
      return JSON.parse(JSON.stringify(state));
    case SET_CUSTOMER_BUSINESS_ID:
      state.customerBusinessId = action.value;
      return JSON.parse(JSON.stringify(state));
    case SET_CUSTOMER_ADDRESS:
      state.customerAddress = action.value;
      return JSON.parse(JSON.stringify(state));
    case SET_CUSTOMER_CITY:
      state.customerCity = action.value;
      return JSON.parse(JSON.stringify(state));
    case SET_CUSTOMER_POSTAL_CODE:
      state.customerPostalCode = action.value;
      return JSON.parse(JSON.stringify(state));
    case SET_CUSTOMER_EMAIL:
      state.customerEmail = action.value;
      return JSON.parse(JSON.stringify(state));
    case SET_INVOICE_NUMBER:
      state.invoiceNumber = action.value;
      return JSON.parse(JSON.stringify(state));
    case SET_INVOICE_DATE:
      state.invoiceDate = action.value;
      return JSON.parse(JSON.stringify(state));
    case SET_INVOICE_DUE_DATE:
      state.invoiceDueDate = action.value;
      return JSON.parse(JSON.stringify(state));

    case SET_CUSTOMER:
      state.customerName = action.value.name;
      state.customerPhone = action.value.phone;
      state.customerBusinessId = action.value.customerBusinessId;
      state.customerAddress = action.value.address;
      state.customerCity = action.value.city;
      state.customerPostalCode = action.value.postalCode;
      state.customerEmail = action.value.email;
      return JSON.parse(JSON.stringify(state));

    default:
      return state;
  }
};

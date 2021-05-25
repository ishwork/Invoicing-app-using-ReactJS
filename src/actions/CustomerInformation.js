export const SET_CUSTOMER_NAME = "SET_CUSTOMER_NAME";
export const SET_CUSTOMER_PHONE = "SET_CUSTOMER_PHONE";
export const SET_CUSTOMER_BUSINESS_ID = "SET_CUSTOMER_BUSINESS_ID";
export const SET_CUSTOMER_ADDRESS = "SET_CUSTOMER_ADDRESS";
export const SET_CUSTOMER_CITY = "SET_CUSTOMER_CITY";
export const SET_CUSTOMER_POSTAL_CODE = "SET_CUSTOMER_POSTAL_CODE";
export const SET_CUSTOMER_EMAIL = "SET_CUSTOMER_EMAIL";
export const SET_INVOICE_NUMBER = "SET_INVOICE_NUMBER";
export const SET_INVOICE_DATE = "SET_INVOICE_DATE";
export const SET_INVOICE_DUE_DATE = "SET_INVOICE_DUE_DATE";

export const SET_CUSTOMER = "SET_CUSTOMER";
export const SET_CUSTOMERS = "SET_CUSTOMERS";

export const setCustomerName = (val) => ({
  type: SET_CUSTOMER_NAME,
  value: val,
});

export const setCustomerPhone = (val) => ({
  type: SET_CUSTOMER_PHONE,
  value: val,
});

export const setCustomerBusinessId = (val) => ({
  type: SET_CUSTOMER_BUSINESS_ID,
  value: val,
});

export const setCustomerAddress = (val) => ({
  type: SET_CUSTOMER_ADDRESS,
  value: val,
});

export const setCustomerCity = (val) => ({
  type: SET_CUSTOMER_CITY,
  value: val,
});

export const setCustomerPostalCode = (val) => ({
  type: SET_CUSTOMER_POSTAL_CODE,
  value: val,
});

export const setCustomerEmail = (val) => ({
  type: SET_CUSTOMER_EMAIL,
  value: val,
});

export const setInvoiceNumber = (val) => ({
  type: SET_INVOICE_NUMBER,
  value: val,
});

export const setInvoiceDate = (val) => ({
  type: SET_INVOICE_DATE,
  value: val,
});

export const setInvoiceDueDate = (val) => ({
  type: SET_INVOICE_DUE_DATE,
  value: val,
});

export const setCustomer = (val) => ({
  type: SET_CUSTOMER,
  value: val,
});

// Firebase get usage
export const setCustomers = (val) => ({
  type: SET_CUSTOMERS,
  value: val,
});

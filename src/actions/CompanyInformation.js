export const SET_LOGO = "SET_LOGO";
export const SET_BUSINESS_ID = "SET_BUSINESS_ID";
export const SET_EMAIL = "SET_EMAIL";
export const SET_PHONE = "SET_PHONE";
export const SET_COMPANY_NAME = "SET_COMPANY_NAME";
export const SET_COMPANY_VAT_NUMBER = "SET_COMPANY_VAT_NUMBER";
export const SET_COMPANY_ADDRESS = "SET_COMPANY_ADDRESS";
export const SET_COMPANY_CITY = "SET_COMPANY_CITY";
export const SET_COMPANY_POSTAL_CODE = "SET_COMPANY_POSTAL_CODE";
export const SET_IBAN = "SET_IBAN";
export const SET_SWIFT_CODE = "SET_SWIFT_CODE";
export const SET_REFERENCE_NUMBER = "SET_REFERENCE_NUMBER";
export const SET_COMPANY = "SET_COMPANY";
export const SET_COMPANYINFO = "SET_COMPANYINFO";

// for CompanyInformation reducer
export const setLogo = (val) => ({
  type: SET_LOGO,
  value: val,
});

export const setBusinessId = (val) => ({
  type: SET_BUSINESS_ID,
  value: val,
});

export const setEmail = (val) => ({
  type: SET_EMAIL,
  value: val,
});

export const setPhone = (val) => ({
  type: SET_PHONE,
  value: val,
});

export const setCompanyName = (val) => ({
  type: SET_COMPANY_NAME,
  value: val,
});

export const setCompanyVATNumber = (val) => ({
  type: SET_COMPANY_VAT_NUMBER,
  value: val,
});

export const setCompanyAddress = (val) => ({
  type: SET_COMPANY_ADDRESS,
  value: val,
});

export const setCompanyCity = (val) => ({
  type: SET_COMPANY_CITY,
  value: val,
});

export const setCompanyPostalCode = (val) => ({
  type: SET_COMPANY_POSTAL_CODE,
  value: val,
});

export const setIBAN = (val) => ({
  type: SET_IBAN,
  value: val,
});

export const setSwiftCode = (val) => ({
  type: SET_SWIFT_CODE,
  value: val,
});

export const setRefernceNumber = (val) => ({
  type: SET_REFERENCE_NUMBER,
  value: val,
});

export const setCompany = (val) => ({
  type: SET_COMPANY,
  value: val,
});

//for companyUser reducer
export const setCompanyInfo = (val) => ({
  type: SET_COMPANYINFO,
  value: val,
});

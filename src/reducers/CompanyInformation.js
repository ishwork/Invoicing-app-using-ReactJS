import {
  SET_LOGO,
  SET_BUSINESS_ID,
  SET_COMPANY_NAME,
  SET_COMPANY_VAT_NUMBER,
  SET_COMPANY_ADDRESS,
  SET_COMPANY_CITY,
  SET_COMPANY_POSTAL_CODE,
  SET_IBAN,
  SET_PHONE,
  SET_REFERENCE_NUMBER,
  SET_SWIFT_CODE,
  SET_EMAIL,
  SET_COMPANY,
} from "../actions/CompanyInformation";

const INIT_STATES = {
  logo: "",
  businessId: "",
  email: "",
  phone: "",
  companyName: "",
  companyVATNumber: "",
  companyAddress: "",
  companyCity: "",
  companyPostalCode: "",
  iban: "",
  swiftCode: "",
  referenceNumber: "",
};

export const companyInformation = (state = INIT_STATES, action) => {
  switch (action.type) {
    case SET_LOGO:
      state.logo = action.value;
      return JSON.parse(JSON.stringify(state));
    case SET_BUSINESS_ID:
      state.businessId = action.value;
      return JSON.parse(JSON.stringify(state));
    case SET_EMAIL:
      state.email = action.value;
      return JSON.parse(JSON.stringify(state));
    case SET_PHONE:
      state.phone = action.value;
      return JSON.parse(JSON.stringify(state));
    case SET_COMPANY_NAME:
      state.companyName = action.value;
      return JSON.parse(JSON.stringify(state));
    case SET_COMPANY_VAT_NUMBER:
      state.companyVATNumber = action.value;
      return JSON.parse(JSON.stringify(state));
    case SET_COMPANY_ADDRESS:
      state.companyAddress = action.value;
      return JSON.parse(JSON.stringify(state));
    case SET_COMPANY_CITY:
      state.companyCity = action.value;
      return JSON.parse(JSON.stringify(state));
    case SET_COMPANY_POSTAL_CODE:
      state.companyPostalCode = action.value;
      return JSON.parse(JSON.stringify(state));
    case SET_IBAN:
      state.iban = action.value;
      return JSON.parse(JSON.stringify(state));
    case SET_SWIFT_CODE:
      state.swiftCode = action.value;
      return JSON.parse(JSON.stringify(state));
    case SET_REFERENCE_NUMBER:
      state.referenceNumber = action.value;
      return JSON.parse(JSON.stringify(state));

    // setting company information
    case SET_COMPANY:
      state.logo = action.value.logo;
      state.businessId = action.value.businessId;
      state.email = action.value.email;
      state.phone = action.value.phone;
      state.companyName = action.value.name;
      state.companyVATNumber = action.value.companyVATNumber;
      state.companyAddress = action.value.address;
      state.companyCity = action.value.city;
      state.companyPostalCode = action.value.postalCode;
      state.iban = action.value.iban;
      state.swiftCode = action.value.swiftCode;
      state.referenceNumber = action.value.referenceNumber;
      return JSON.parse(JSON.stringify(state));

    default:
      return state;
  }
};

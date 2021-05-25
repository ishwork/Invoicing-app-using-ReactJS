import { SET_COMPANYINFO } from "../actions/CompanyInformation";

const INIT_STATES = {
  logo: "",
  businessId: "",
  email: "",
  phone: "",
  name: "",
  companyVATNumber: "",
  address: "",
  city: "",
  postalCode: "",
  iban: "",
  swiftCode: "",
  referenceNumber: "",
};

export const companyUser = (state = INIT_STATES, action) => {
  switch (action.type) {
    case SET_COMPANYINFO:
      if (action.value.logo) {
        state.logo = action.value.logo;
      }
      if (action.value.businessId) {
        state.businessId = action.value.businessId;
      }
      if (action.value.email) {
        state.email = action.value.email;
      }
      if (action.value.phone) {
        state.phone = action.value.phone;
      }
      if (action.value.name) {
        state.name = action.value.name;
      }
      if (action.value.companyVATNumber) {
        state.companyVATNumber = action.value.companyVATNumber;
      }
      if (action.value.address) {
        state.address = action.value.address;
      }
      if (action.value.city) {
        state.city = action.value.city;
      }
      if (action.value.postalCode) {
        state.postalCode = action.value.postalCode;
      }
      if (action.value.iban) {
        state.iban = action.value.iban;
      }
      if (action.value.swiftCode) {
        state.swiftCode = action.value.swiftCode;
      }
      if (action.value.referenceNumber) {
        state.referenceNumber = action.value.referenceNumber;
      }
      return JSON.parse(JSON.stringify(state));

    default:
      return state;
  }
};

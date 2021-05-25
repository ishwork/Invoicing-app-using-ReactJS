// Example: 1613563-9
const businessIdRegex = /[^0-9-]/g;

// https://stackoverflow.com/questions/4338267/validate-phone-number-with-javascript
const phoneRegex = /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/im;

// https://regexr.com/3e48o (regular expression for validating email)
const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;

export const isValidBusinessId = (businessID) => {
  return !businessID.match(businessIdRegex);
};

// regex for validating EU-VAT numbers (https://regex101.com/r/lhR5lJ/2)
const vatRegex = /^[A-Za-z]{2,4}(?=.{2,12}$)[-_\s0-9]*(?:[a-zA-Z][-_\s0-9]*){0,2}$/;

export const isValidVATNumber = (vat) => {
  if (vat === "") return true; //VAT number isn't required.
  return vat.match(vatRegex);
};

/**
 * Returns true if a phone number is in a correct format.
 *
 * @param {String} phoneNumber
 */
export const isValidPhoneNumber = (phoneNumber) => {
  if (phoneNumber === "") return true; // phone number isn't required.
  return phoneNumber.match(phoneRegex);
};

export const isValidEmailAddress = (emailAddress) => {
  if (emailAddress === "") return true; // phone number isn't required.
  return emailAddress.match(emailRegex);
};

export const isValidCustomerBusinessId = (busID) => {
  // customer business id is optional.
  return !busID || !busID.match(businessIdRegex);
};

export const isValidCompanyInfo = (companyInfo) => {
  return (
    isValidPhoneNumber(companyInfo.phone) &&
    isValidBusinessId(companyInfo.businessId) &&
    isValidEmailAddress(companyInfo.email) &&
    isValidVATNumber(companyInfo.companyVATNumber)
  );
};

export const isValidCustomerInfo = (customerInfo) => {
  return (
    isValidPhoneNumber(customerInfo.customerPhone) &&
    isValidEmailAddress(customerInfo.customerEmail) &&
    isValidCustomerBusinessId(customerInfo.customerBusinessId)
  );
};

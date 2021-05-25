// Calculate Subtotal for each product in a row after discount considered
export const calcProductTotal = (total) => {
  return (
    total.Amount * total.Price +
    (total.VAT / 100) * (total.Amount * total.Price) -
    (total.Discount / 100) *
      (total.Amount * total.Price +
        (total.VAT / 100) * (total.Amount * total.Price))
  ).toFixed(2);
};

//Calculate discount amount from percentage value
export const discountAmount = (discountVal) => {
  return (
    (discountVal.Discount / 100) *
    (discountVal.Amount * discountVal.Price +
      (discountVal.VAT / 100) * (discountVal.Amount * discountVal.Price))
  ).toFixed(2);
};

//Calculate total sum after discount considered
export const calcInvoiceTotal = (products) => {
  return products
    .map(
      (inputField) =>
        inputField.Amount * inputField.Price +
        (inputField.VAT / 100) * (inputField.Amount * inputField.Price) -
        (inputField.Discount / 100) *
          (inputField.Amount * inputField.Price +
            (inputField.VAT / 100) * (inputField.Amount * inputField.Price))
    )
    .reduce((accumulator, currentValue) => accumulator + currentValue, 0)
    .toFixed(2);
};

//Calculate total vat
export const calcTotalVAT = (products) => {
  return products
    .map(
      (inputField) =>
        (inputField.VAT / 100) * (inputField.Amount * inputField.Price)
    )
    .reduce((accumulator, currentValue) => accumulator + currentValue, 0)
    .toFixed(2);
};

// Calculate Subtotal for each product in a row before discount considered, this function is only used in template
export const calcTotalBeforeDiscount = (total) => {
  return (
    total.Amount * total.Price +
    (total.VAT / 100) * (total.Amount * total.Price)
  ).toFixed(2);
};

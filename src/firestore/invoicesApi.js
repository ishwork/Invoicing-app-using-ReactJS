import Fire from "./Fire";
import { getCompanyInfo } from "./companyInfoApi.js";
import { getCustomerInfo } from "./customerInfoApi.js";
import { getProductInfo } from "./productsInfoApi.js";

const invoicesApi = Fire.firestore().collection("invoices");

export const addOrUpdateInvoice = async (invoice) => {
  //todo: update when needed, instead of creating new
  if (
    !(
      invoice.userId &&
      invoice.timestamp &&
      invoice.recipientName &&
      invoice.total &&
      invoice.companyInfoId &&
      invoice.customerInfoId &&
      invoice.productsId
    )
  ) {
    throw new Error("Invoice data is incorrect and can't be saved.");
  }
  console.log(await invoicesApi.add(invoice));
  return;
};

export const getInvoices = async (userId) => {
  const invoices = await invoicesApi.where("userId", "==", userId).get();
  return invoices.docs
    .map((doc) => {
      return { id: doc.id, data: doc.data() };
    })
    .sort((a, b) => b.data.timestamp - a.data.timestamp);
};

export const deleteInvoice = async (id) => {
  try {
    await invoicesApi.doc(id).delete();
    return true;
  } catch (error) {
    return false;
  }
};

export const getInvoicesFullDetail = async (id) => {
  const invoiceDoc = await invoicesApi.doc(id).get();
  const invoiceData = invoiceDoc.data();

  const companyId = invoiceData.companyInfoId;
  const recipientId = invoiceData.customerInfoId;
  const productsId = invoiceData.productsId;

  return Promise.all([
    getCompanyInfo(companyId),
    getCustomerInfo(recipientId),
    getProductInfo(productsId),
  ]);
};

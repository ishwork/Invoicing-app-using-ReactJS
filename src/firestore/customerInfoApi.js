import Fire from "./Fire";

const customerApi = Fire.firestore().collection("customerInfo");

// todo: refactor this getter method for different collections
export const getCustomerInfo = async (id) => {
  return await (await customerApi.doc(id).get()).data();
};

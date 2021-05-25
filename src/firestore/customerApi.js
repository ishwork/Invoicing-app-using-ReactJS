import Fire from "./Fire";

const customerApi = Fire.firestore().collection("customers");

const getCustomerFromCompanyId = async (id) => {
  const customers = await customerApi.where("companyId", "==", id).get();
  return customers.docs.map((customer) => [customer.id, customer.data()]);
};

const addCustomerWithCompanyId = async (newCustomer) => {
  const add = await customerApi.add(newCustomer);
  return add;
};

const updateCustomerWithId = async (id, updatedCustomer) => {
  const update = await customerApi.doc(id).update(updatedCustomer);
  return update;
};

const removeCustomerWithId = async (id) => {
  const remove = await customerApi.doc(id).delete();
  return remove;
};

export {
  getCustomerFromCompanyId,
  addCustomerWithCompanyId,
  updateCustomerWithId,
  removeCustomerWithId,
};

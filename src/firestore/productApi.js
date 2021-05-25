import Fire from "./Fire";

const productApi = Fire.firestore().collection("products");

const getProductsFromCompanyId = async (id) => {
  const products = await productApi.where("companyId", "==", id).get();
  return products.docs.map((product) => [product.id, product.data()]);
};

const addProductWithCompanyId = async (newProduct) => {
  const add = await productApi.add(newProduct);
  return add;
};

const updateProductWithId = async (id, updatedProduct) => {
  const update = await productApi.doc(id).update(updatedProduct);
  return update;
};

const removeProductWithId = async (id) => {
  const remove = await productApi.doc(id).delete();
  return remove;
};

export {
  getProductsFromCompanyId,
  addProductWithCompanyId,
  removeProductWithId,
  updateProductWithId,
};

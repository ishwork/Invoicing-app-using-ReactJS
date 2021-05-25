import Fire from "./Fire";

const productInfoApi = Fire.firestore().collection("productInfo");

export const getProductInfo = async (id) => {
  return await (await productInfoApi.doc(id).get()).data();
};

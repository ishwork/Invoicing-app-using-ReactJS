import Fire from "./Fire";

const companyApi = Fire.firestore().collection("companyInfo");

export const getCompanyInfo = async (id) => {
  return await (await companyApi.doc(id).get()).data();
};

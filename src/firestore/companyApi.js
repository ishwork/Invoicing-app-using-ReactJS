import Fire from "./Fire";

const companyApi = Fire.firestore().collection("companyUser");

const getCompanyInfo = async (id) => {
  const data = await companyApi.doc(id).get();
  const companyId = await data.id;
  const companyInfo = await data.data();
  return [companyId, companyInfo];
};

const updateCompanyInfo = async (id, info) => {
  console.log(id);
  const updatedCompanyInfo = await companyApi.doc(id).update(info);
  return updatedCompanyInfo;
};

export { getCompanyInfo, updateCompanyInfo };

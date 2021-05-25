import React, { useState, useEffect } from "react";
import Fire from "../firestore/Fire";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

// actions
import { setCompanyInfo } from "../actions/CompanyInformation";
import { setCustomers } from "../actions/CustomerInformation";
import { setProductsFromFirebase } from "../actions/ProductInformation";

// api
import { getCompanyInfo } from "../firestore/companyApi";
import { getCustomerFromCompanyId } from "../firestore/customerApi";
import { getProductsFromCompanyId } from "../firestore/productApi";

// components
import LoggedUserCompany from "../components/logged-in/LoggedUserCompany";
import LoggedUserCustomer from "../components/logged-in/LoggedUserCustomer";
import LoggedUserProduct from "../components/logged-in/LoggedUserProduct";
import InvoiceDialog from "../components/logged-in/InvoiceDialog";

const Dashboard = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const [companyId, setCompanyId] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      await Fire.auth().onAuthStateChanged(async (user) => {
        if (user) {
          const companyRef = await getCompanyInfo(user.uid);
          setCompanyId(companyRef[0]);
          dispatch(setCompanyInfo(companyRef[1]));

          const customerRef = await getCustomerFromCompanyId(user.uid);
          dispatch(setCustomers(customerRef));

          const productRef = await getProductsFromCompanyId(user.uid);
          dispatch(setProductsFromFirebase(productRef));
        } else {
          console.log("User not found");
          history.push("login");
          return;
        }
      });
    };

    fetchData();
  }, []);

  return (
    <div>
      <LoggedUserCompany companyId={companyId} />

      <LoggedUserCustomer companyId={companyId} />

      <LoggedUserProduct companyId={companyId} />

      <InvoiceDialog companyId={companyId} />
    </div>
  );
};

export default Dashboard;

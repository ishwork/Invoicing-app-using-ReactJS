import React, { useEffect, useState } from "react";
import SignIn from "./Sign";
import SignUp from "../authentication/signup";
import Home from "../pages/Home";
import Fire from "../firestore/Fire";

export default function Tog() {
  const [user, setUser] = useState(null);
  const [toggleForm, setToggleForm] = useState(true);
  const formMode = () => {
    setToggleForm(!toggleForm);
  };

  const loadUser = async () => {
    await Fire.auth().onAuthStateChanged(async (currentUser) => {
      if (currentUser) {
        const { uid, email } = currentUser;
        const cUser = { userId: uid, email: email };
        setUser(cUser);
      }
    });
  };

  useEffect(() => {
    loadUser();
  }, []);

  return (
    <>
      {user !== null ? (
        <>
          <Home setUserState={() => setUser(null)} />
        </>
      ) : (
        <>
          {toggleForm ? (
            <SignIn
              loggedIn={(user) => setUser(user)}
              toggle={() => formMode()}
            />
          ) : (
            <SignUp toggle={() => formMode()} />
          )}
        </>
      )}
    </>
  );
}

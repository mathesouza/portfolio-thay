import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import { auth } from "../../base";
import Loader from "../../Loader";

const Logout = () => {
  const [logout, setLogout] = useState(false);
  useEffect(() => {
    auth
      .signOut()
      .then(() => {
        setLogout(true);
      })
      .catch(console.log);
  }, []);
  return logout ? <Redirect to="/" /> : <Loader />;
};
export default Logout;

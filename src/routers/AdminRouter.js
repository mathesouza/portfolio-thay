import React, { useEffect } from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import NewArt from "../features/admin/NewArt";
import AdminHeader from "../features/admin/AdminHeader";
import Logout from "../features/admin/Logout";
import Loader from "../Loader";
import { auth } from "../base";
import { LOGINSUCCESS, LOGINFAILED } from "../store/action-types";
import { NOVA_ARTE, LOGOUT } from "./routes/admin";

const Todo = () => {
  return <p>todo</p>;
};

const Admin = function({ dispatch, match, isAuthing, isLogged }) {
  useEffect(() => {
    auth.onAuthStateChanged(user => {
      if (Boolean(user)) {
        dispatch({ type: LOGINSUCCESS });
      } else {
        dispatch({ type: LOGINFAILED });
      }
    });
  }, []);
  if (isAuthing) return <Loader />;
  if (!isLogged) return <Redirect to={{ pathname: "/login" }} />;
  return (
    <>
      <AdminHeader />
      <Route path={"/"} component={Todo} />
      <Route path={`${match.url}/${NOVA_ARTE}`} component={NewArt} />
      <Route path={`${match.url}/${LOGOUT}`} component={Logout} />
    </>
  );
};

const mapStateToProps = state => ({
  isLogged: state.isLogged,
  isAuthing: state.isAuthing
});

export default connect(mapStateToProps)(Admin);

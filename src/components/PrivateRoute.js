import React from "react";
import { Outlet, Navigate } from "react-router-dom";

const PrivateRoute = (props) => {
  let isLoggedIn = props.isLoggedIn;
  return isLoggedIn ? <Outlet /> : <Navigate to={"/"} />;
};

export default PrivateRoute;

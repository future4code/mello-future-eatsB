import React from "react";
import { Route, Redirect } from "react-router-dom";

export default function PrivateRoute({ ...props }) {
  const runClientAuthCheck = () => {
    const getToken = localStorage.getItem("token");
    return getToken &&
      getToken.match(/^[A-Za-z0-9-]+.[A-Za-z0-9-]+.?[A-Za-z0-9-.-]*$/)
      ? true
      : false;
  };

  return runClientAuthCheck() ? <Route {...props} /> : <Redirect to="/login" />;
}

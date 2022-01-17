import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContex } from "../Context/AuthContext";

function CompanyPrivateRoute({ children }) {
  const { token } = useContext(AuthContex);
  if (token!=="admin") {
    return <Navigate to={"/login"} />;
  }
  return children;
}

export default CompanyPrivateRoute;

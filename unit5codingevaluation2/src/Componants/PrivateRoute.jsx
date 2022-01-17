import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContex } from "../Context/AuthContext";

function PrivateRoute({ children }) {
  const { token } = useContext(AuthContex);
  if (!token) {
    return <Navigate to={"/login"} />;
  }
  return children;
}

export default PrivateRoute;

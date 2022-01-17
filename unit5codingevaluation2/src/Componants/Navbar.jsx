import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContex } from "../Context/AuthContext";
import "./Navbar.css";
function Navbar() {
  const { handleToken, token } = useContext(AuthContex);
  const handleLogout = () => {
    handleToken("");
  };

  return (
    <div className="navbar">
      <Link style={{ textDecoration: "none" }} to={"/"}>
        <h1>Home</h1>
      </Link>

      {token === "admin" ? (
        <Link style={{ textDecoration: "none" }} to={"/admin"}>
          <h1>Admin</h1>
        </Link>
      ) : (
        <Link style={{ textDecoration: "none" }} to={"/clienthome"}>
          <h1>Your Jobs</h1>
        </Link>
      )}

      <Link style={{ textDecoration: "none" }} to={"/companyhome"}>
        <h1>Company</h1>
      </Link>
      <Link style={{ textDecoration: "none" }} to={"/login"}>
        <h1 onClick={handleLogout}>{token ? "Logout" : "Login"}</h1>
      </Link>
    </div>
  );
}

export default Navbar;

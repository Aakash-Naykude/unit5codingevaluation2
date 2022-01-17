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
        <img
          style={{ width: "60px", padding: "5px" }}
          src="data:image/png;base64,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"
          alt="home"
        />
      </Link>

      {token === "admin" ? (
        <Link style={{ textDecoration: "none" }} to={"/admin"}>
          <h1 className="head">Admin</h1>
        </Link>
      ) : (
        <Link style={{ textDecoration: "none" }} to={"/clienthome"}>
          <h1 className="head">Your Jobs</h1>
        </Link>
      )}

      <Link style={{ textDecoration: "none" }} to={"/companyhome"}>
        <h1 className="head">Company</h1>
      </Link>
      <Link style={{ textDecoration: "none" }} to={"/login"}>
        <h1 className="head" onClick={handleLogout}>
          {token ? "Logout" : "Login"}
        </h1>
      </Link>
    </div>
  );
}

export default Navbar;

import React, { useContext, useState } from "react";
import { Navigate } from "react-router-dom";
import { AuthContex } from "../Context/AuthContext";

function Login() {
  const [list, setList] = useState("");
  const { handleToken } = useContext(AuthContex);
  const handleChange = (e) => {
    let { name, value } = e.target;
    setList({
      ...list,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (list.password === "admin") {
      handleToken("admin");
    } else {
      handleToken("client");
    }
    return <Navigate to={"/client"} />;
  };
  return (
    <div>
      <h1>Welcome To Login</h1>
      <h1>Login to use App</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          onChange={(e) => handleChange(e)}
          className="loginfrom"
          type="text"
          placeholder="Enter Email"
          name="email"
        />
        <br />
        <input
          onChange={(e) => handleChange(e)}
          className="loginfrom"
          type="password"
          placeholder="Enter password"
          name="password"
        />
        <br />
        <input className="loginSubmit" type="submit" />
        <br />
      </form>
    </div>
  );
}

export default Login;

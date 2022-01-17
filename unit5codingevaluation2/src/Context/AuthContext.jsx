import { createContext, useState } from "react";

export const AuthContex = createContext();
export const AuthContextProvider = ({ children }) => {
  const [token, setToken] = useState("");
  const handleToken = (inp) => {
    setToken(inp);
  };
  const value = { token, handleToken };
  return <AuthContex.Provider value={value}>{children}</AuthContex.Provider>;
};

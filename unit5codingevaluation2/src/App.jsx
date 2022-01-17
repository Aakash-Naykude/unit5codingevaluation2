import { Route, Routes } from "react-router-dom";
import "./App.css";
import Clienthome from "./ClientComponants/Clienthome";
import Admin from "./CompanyComponants/Admin";
import Companyhome from "./CompanyComponants/Companyhome";
import CompanyPrivateRoute from "./Componants/CompanyPrivateRoute";
import Home from "./Componants/Home";
import Login from "./Componants/Login";
import Navbar from "./Componants/Navbar";
import PrivateRoute from "./Componants/PrivateRoute";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route
          path="/companyhome"
          element={
            <PrivateRoute>
              <Companyhome />
            </PrivateRoute>
          }
        ></Route>
        <Route
          path="/admin"
          element={
            <CompanyPrivateRoute>
              <Admin />
            </CompanyPrivateRoute>
          }
        ></Route>
        <Route
          path="/clienthome"
          element={
            <PrivateRoute>
              <Clienthome />
            </PrivateRoute>
          }
        ></Route>
      </Routes>
    </div>
  );
}

export default App;

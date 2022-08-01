// import logo from './logo.svg';
// import './App.css';
import { useState } from "react";
import Login from "../Screens/Login/Login";
import Dashboard from "../Screens/Dashboard/Dashboard";

import "bootstrap-css-only";
import Registro from "../Screens/Registro/Registro";
import { useSelector } from "react-redux";

function App() {
  const userLogged = useSelector((state) => state.user.user);

  return (
    <div className="App bg-light w-100 h-100 ">
      {!userLogged ? <Login /> : <Dashboard></Dashboard>}
    </div>
  );
}

export default App;

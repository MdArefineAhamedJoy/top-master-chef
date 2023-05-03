import React from "react";

import { Outlet } from "react-router-dom";
import Navbar from "../Pagess/Sheard/Navbar";
import Footer from "../Pagess/Sheard/Footer";

const LoginLayOut = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default LoginLayOut;

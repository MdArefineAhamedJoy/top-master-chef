import React from "react";

import { Outlet } from "react-router-dom";
import Navbar from "../Pagess/Sheard/Navbar";




const LoginLayOut = () => {
  return (
    <div>
     <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  );
};

export default LoginLayOut;

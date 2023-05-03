import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./AuthProvider";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation()
  if(loading){
   return <progress className="progress w-full"></progress>
  }
  if (user) {
    return children;
  }
  else{
    return <Navigate state={{from:location}} to='/login' replace></Navigate>
  }
};

export default PrivateRoute;

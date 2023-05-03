import React from "react";
import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./AuthProvider";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  if(loading){
   return <div>user is loading .............</div>
  }
  if (user) {
    return children;
  }
  else{
    return <Navigate to='/login'></Navigate>
  }
};

export default PrivateRoute;

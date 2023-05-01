import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Login from "../Pagess/Login/Login";
import Register from "../Pagess/Login/Register";
import LoginLayOut from "../Layout/LoginLayOut";
import Home from "../Pagess/Home/Home";



const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginLayOut />,
    children: [
        {
            path:'/',
            element:<Home></Home>
        },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
    ],
  },

]);

export default router;

import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Login from "../Pagess/Login/Login";
import Register from "../Pagess/Login/Register";
import LoginLayOut from "../Layout/LoginLayOut";
import Home from "../Pagess/Home/Home";
import ChefDetails from "../Pagess/ChefDetails/ChefDetails";
import Blog from "../Pagess/Blog/Blog";
import { handelDetails } from "../../Utilites/loader";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginLayOut />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("http://localhost:5000/chefData")
      },
      {
        path:'chefData/:id',
        element:<ChefDetails></ChefDetails>,
        loader: ({params}) => handelDetails(params)
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
      {
        path:'blog',
        element:<Blog></Blog>
      }
    ],
  },
]);

export default router;

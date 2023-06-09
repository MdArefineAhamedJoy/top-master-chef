import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Login from "../Pagess/Login/Login";
import Register from "../Pagess/Login/Register";
import LoginLayOut from "../Layout/LayOut";
import Home from "../Pagess/Home/Home";
import ChefDetails from "../Pagess/ChefDetails/ChefDetails";
import Blog from "../Pagess/Blog/Blog";
import { handelDetails } from "../../Utilites/loader";
import PrivateRoute from "./PrivateRoute";
import Error from "../Pagess/Error/Error";


const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginLayOut />,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("https://top-master-chef-world-server-mdarefineahamedjoy.vercel.app/chefData")
      },
      {
        path:'chefData/:id',
        element: <PrivateRoute> <ChefDetails></ChefDetails> </PrivateRoute>,
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

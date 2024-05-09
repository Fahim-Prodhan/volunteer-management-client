import { createBrowserRouter } from "react-router-dom";

import ErrorElement from "../pages/errorElement/ErrorElement";
import Root from "../layouts/root/Root";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import AddCraft from "../pages/addCraft/AddCraft";
import PrivateRoute from "./PrivateRoute";
import baseUrl from "../services/helper";
import MyCrafts from "../pages/myCrafts/MyCrafts";
import AllCrafts from "../pages/allCrafts/AllCrafts";
import ViewDetails from "../pages/viewDetails/ViewDetails";
import UpdateCraft from "../pages/updateCraft/UpdateCraft";
import FilteredSubcategoryCrafts from "../pages/filteredSubcategoryCrafts/FilteredSubcategoryCrafts";




const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement:<ErrorElement></ErrorElement>,
      children:[
        {
            path:'/',
            element:<Home></Home>,
            loader:()=>fetch(`${baseUrl}/crafts`),
        },
        {
            path:'/login',
            element:<Login></Login>
        },
        {
            path:'/register',
            element:<Register></Register>
        },
       
      ]
    },
  ]);


export default router;
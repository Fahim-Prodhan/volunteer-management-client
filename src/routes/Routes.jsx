import { createBrowserRouter } from "react-router-dom";

import ErrorElement from "../pages/errorElement/ErrorElement";
import Root from "../layouts/root/Root";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import baseUrl from "../services/helper";
import AddPost from "../pages/addPost/AddPost";
import PrivateRoute from "./PrivateRoute";
import ViewDetails from "../pages/viewDetails/ViewDetails";
import NeedVolunteer from "../pages/needVolunteer/NeedVolunteer";
import BeAVolunteer from "../pages/BeAVolunteer/BeAVolunteer";
import ManageMyPost from "../pages/manageMyPost/ManageMyPost";



const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement:<ErrorElement></ErrorElement>,
      children:[
        {
            path:'/',
            element:<Home></Home>,
            loader:()=>fetch(`${baseUrl}/posts`)        
        },
        {
            path:'/login',
            element:<Login></Login>
        },
        {
            path:'/register',
            element:<Register></Register>
        },
        {
          path:'/addPost',
          element:<PrivateRoute><AddPost></AddPost></PrivateRoute>
        },
        {
          path:'/details/:id',
          element:<PrivateRoute><ViewDetails></ViewDetails></PrivateRoute>,
          loader:({params}) => fetch(`${baseUrl}/volunteerPost/${params.id}`)
        },
        {
          path:'/needVolunteer',
          element:<NeedVolunteer></NeedVolunteer>,
          // loader:()=>fetch(`${baseUrl}/postCounts`)
        },
        {
          path:'/be-volunteer/:id',
          element:<BeAVolunteer></BeAVolunteer>,
          loader:({params}) => fetch(`${baseUrl}/volunteerPost/${params.id}`)
        },
        {
          path:'/manage-post',
          element:<PrivateRoute><ManageMyPost></ManageMyPost></PrivateRoute>
        }
       
      ]
    },
  ]);


export default router;
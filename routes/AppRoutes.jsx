import React, { useEffect } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router'
import AuthLayout from "../layout/AuthLayout.jsx";
import MainLayout from '../layout/MainLayout.jsx';
import Login from '../pages/Login.jsx';
import Register from '../pages/Register.jsx';
import Home from '../pages/Home';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { addUser,removeUser } from '../src/features/authSlice.jsx';

const AppRoutes = () => {
  let dispatch = useDispatch();


  const hydrateUser = () => {
      let loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));

      if(!loggedInUser){
        toast.error("User does not exist");
        return;
      }

      dispatch(addUser(loggedInUser));
      toast.success("Login Successfull")
  }

  useEffect(() => {
    hydrateUser();
  },[]);

  const router = createBrowserRouter([
     {
        path:"/",
        element:<AuthLayout/>,
        children:[
           {
            path:"",
            element:<Login/>
           },
           {
             path:"register",
             element:<Register/>
           }
        ]
     },
     {
       path:"/main",
       element:<MainLayout/>,
       children:[
          {
            path:"",
            element:<Home/>
          }
       ]
     } 
  ])

  return <RouterProvider router={router}/>
}

export default AppRoutes

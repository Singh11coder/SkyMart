import React, { useEffect } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router'
import AuthLayout from "../layout/AuthLayout.jsx";
import MainLayout from '../layout/MainLayout.jsx';
import Login from '../src/pages/Login.jsx';
import Register from '../src/pages/Register.jsx';
import Home from '../src/pages/Home.jsx';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { addUser,removeUser } from '../src/features/authSlice.jsx';
import Shop from '../src/pages/Shop.jsx';
import About from '../src/pages/About.jsx';

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
          },
          {
            path:"shop",
            element:<Shop/>,
          },
          {
            path:"about",
            element:<About/>
          }
       ]
     } 
  ])

  return <RouterProvider router={router}/>
}

export default AppRoutes

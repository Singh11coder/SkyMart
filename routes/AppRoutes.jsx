import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router'
import AuthLayout from "../layout/AuthLayout.jsx";
import MainLayout from '../layout/MainLayout.jsx';
import Login from '../pages/Login.jsx';
import Register from '../pages/Register.jsx';
import Home from '../pages/Home';

const AppRoutes = () => {

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

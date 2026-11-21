import React from 'react'
import { Outlet } from 'react-router'
import Navbar from "../src/components/Navbar";

const MainLayout = () => {
  return (
    <div className="h-min-screen bg-gray-900">
      <Navbar/>
      <Outlet/>
    </div>
  )
}

export default MainLayout

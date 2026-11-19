import React from 'react'
import { Outlet } from 'react-router'
import Navbar from "../src/components/Navbar";

const MainLayout = () => {
  return (
    <div className="h-screen bg-gray-900">
      <Navbar/>
      <Outlet/>
    </div>
  )
}

export default MainLayout

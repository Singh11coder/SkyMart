import React from 'react'
import { NavLink } from 'react-router'

const Navbar = () => {
  return (
    <div className="flex justify-between text-white px-4 py-4 bg-gray-600">

       <h1 className="text-3xl">SkyMart</h1>
       <div className="text-2xl flex gap-10 ">
         <NavLink className={({isActive}) => {
            return isActive ? "text-orange-500" :""
         }} to={"/main"} end>Home</NavLink>
         <NavLink className={({isActive}) => {
            return isActive ? "text-orange-500" : ""
         }} to={"/main/shop"}>Shop</NavLink>
         <NavLink className={({isActive}) => {
            return isActive ? "text-orange-500" : ""
         }} to={"/main/about"}>About</NavLink>
       </div>
       <button className="text-2xl bg-orange-600 px-4 rounded-2xl cursor-pointer">Logout</button>
    </div>
  )
}

export default Navbar

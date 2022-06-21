import * as React from "react"
import { NavLink } from "react-router-dom"
import Navbar from "../Navbar/Navbar"
import Sidebar from "../Sidebar/Sidebar"
import "./Home.css"


export default function Home({products,handleAddItemToCart,handleRemoveItemToCart}) {
  return (
    <div className="home">
      <Sidebar />
      <Navbar />
      <NavLink to="/"/> 
      <p>Home</p>
    </div>
  )
}

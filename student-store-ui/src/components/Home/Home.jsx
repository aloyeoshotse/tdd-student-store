import * as React from "react"
import { NavLink } from "react-router-dom"
import Navbar from "../Navbar/Navbar"
import ProductCard from "../ProductCard/ProductCard"
import Sidebar from "../Sidebar/Sidebar"
import "./Home.css"


export default function Home({products, handleAddItemToCart, handleRemoveItemToCart}) {
  return (
    <div className="home">
      <Sidebar />
      <Navbar />
      <NavLink to="/"/> 
      {/*render Hero component */}
      {/* <ProductGrid products={products}/> */}
    </div>
  )
}

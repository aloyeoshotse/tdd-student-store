import * as React from "react"
import { NavLink } from "react-router-dom"
import "./Home.css"


export default function Home({products,handleAddItemToCart,handleRemoveItemToCart}) {
  return (
    <div className="home">
      <NavLink to="/"/> 
      <p>Home</p>
    </div>
  )
}

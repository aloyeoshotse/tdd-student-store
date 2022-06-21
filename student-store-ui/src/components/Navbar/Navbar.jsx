import * as React from "react"
import "./Navbar.css"
import { NavLink } from "react-router-dom"

export default function Navbar() {
  return (
    <nav className="navbar">
      <NavLink to={"/"} id="home">Home</NavLink>
      <span id="about"> About </span>
      <span id="contact"> Contact Us </span>
      <span id="buy"> Buy Now </span>
    </nav>
    //render logo component
  )
}

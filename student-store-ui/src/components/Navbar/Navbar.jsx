import * as React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { Logo } from "../Logo/Logo"


export function Navbar({handleScroll, homeRef, aboutRef}) {
  return (
    <nav className="navbar">
      <Logo />
      <Link to={"/"} id="home">Home</Link>
      <span id="about"> About </span>
      <span id="contact"> Contact Us </span>
      <Link to={'/orders'} id="orders">Orders</Link>
    </nav>
  );
}

export default Navbar

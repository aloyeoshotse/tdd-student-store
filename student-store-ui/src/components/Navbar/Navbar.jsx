import * as React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { Logo } from "../Logo/Logo"


export function Navbar({handleScroll, homeRef, aboutRef}) {
  return (
    <nav className="navbar">
      <Logo />
      <Link to={"/"} id="home">Home</Link>
      <Link to={"/about"} id="about"> About </Link>
      <Link to={"*"} id="contact"> Contact Us </Link>
      <Link to={"*"} id="buy"> Buy Now </Link>
    </nav>
  );
}

export default Navbar

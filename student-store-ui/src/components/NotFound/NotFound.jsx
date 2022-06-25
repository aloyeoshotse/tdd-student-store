import * as React from "react";
import "./NotFound.css";
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";

export function NotFound({isOpen, handleOnToggle}) {
  return (
    <div className="not-found">
      <Sidebar isOpen={isOpen} products={products} shoppingCart={shoppingCart}handleOnToggle={handleOnToggle}/>
      <Navbar />
      <Link to="*" />
      <p id="text">not found</p>
    </div>
  );
}

export default NotFound


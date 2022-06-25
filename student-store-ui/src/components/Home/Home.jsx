import * as React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import { Navbar } from "../Navbar/Navbar";
import { Sidebar } from "../Sidebar/Sidebar";
import { Hero } from "../Hero/Hero"
import { ProductGrid } from "../ProductGrid/ProductGrid"
import {SubNav} from "../SubNav/SubNav"

export default function Home({ shoppingCart, isOpen, products, addItems, removeItems, handleOnToggle}) {
  return (
    <div className="home">
      <Sidebar isOpen={isOpen} handleOnToggle={handleOnToggle}/>
      <Navbar />
      <Link to="/" />
      <Hero />
      <SubNav products={products}/>
      <ProductGrid products={products} addItems={addItems} removeItems={removeItems} shoppingCart={shoppingCart}/>
    </div>
  );
}

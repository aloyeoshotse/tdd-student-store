import * as React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import { Navbar } from "../Navbar/Navbar";
import { Sidebar } from "../Sidebar/Sidebar";
import { Hero } from "../Hero/Hero"
import { ProductGrid } from "../ProductGrid/ProductGrid"

export default function Home({ products, addItems, removeItems }) {
  return (
    <div className="home">
      <Sidebar />
      <Navbar />
      <Link to="/" />
      <Hero />
      <ProductGrid products={products} addItems={addItems} removeItems={removeItems}/>
    </div>
  );
}

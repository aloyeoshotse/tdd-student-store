import * as React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import { Navbar } from "../Navbar/Navbar";
import { Sidebar } from "../Sidebar/Sidebar";
import { Hero } from "../Hero/Hero"
import { ProductGrid } from "../ProductGrid/ProductGrid"
import {About} from "../About/About";
import { useState } from "react";




export default function Home({ shoppingCart, isOpen, products, addItems, removeItems, handleOnToggle}) {

  const [filteredProducts, setFilteredProducts] = useState()


  function handleSearchInput(event) {
    
    let newItems = [];
    var userInput = event.target.value.toLowerCase();
    products.forEach(items => {
        console.log("items=",items)
        if (items.name.toLowerCase().startsWith(userInput)) {
             newItems.push(items)
         }
     })
    setFilteredProducts([...newItems])
 }

  return (
    <div className="home">
      <Sidebar isOpen={isOpen} products={products} shoppingCart={shoppingCart} handleOnToggle={handleOnToggle}/>
      <Navbar />
      <Link to="/" />
      <Hero />
      <div className="sub-nav">
        <form id="form">
          <input className="search-bar" type="text" placeholder="Search" onChange={(event) => handleSearchInput(event,products)}/>
          <button className="search-btn">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"><path fill-rule="evenodd" d="M11.5 7a4.499 4.499 0 11-8.998 0A4.499 4.499 0 0111.5 7zm-.82 4.74a6 6 0 111.06-1.06l3.04 3.04a.75.75 0 11-1.06 1.06l-3.04-3.04z"></path></svg>
          </button>
        </form>
        
      </div>
      { filteredProducts == undefined ?
        <ProductGrid products={products} addItems={addItems} removeItems={removeItems} shoppingCart={shoppingCart}/> :
        <ProductGrid products={filteredProducts} addItems={addItems} removeItems={removeItems} shoppingCart={shoppingCart}/>
      }
      <About />
    </div>
  );
}

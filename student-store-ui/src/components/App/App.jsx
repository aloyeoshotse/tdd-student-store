import * as React from "react";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import Home from "../Home/Home";
import { ProductDetail } from "../ProductDetail/ProductDetail";
import { NotFound } from "../NotFound/NotFound";
import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import ProductCard from "../ProductCard/ProductCard";

/*
flow1: App --> Home --> ProductGrid --> ProductCard 

flow2: App --> ProductDetail --> ProductView
*/

export default function App() {
  const apiURL = "https://codepath-store-api.herokuapp.com/store";
  const [products, setProducts] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [shoppingCart, setShoppingCart] = useState([]);
  const [checkoutForm, setCheckoutForm] = useState();

  useEffect(() => {
    axios.get(apiURL)
      .then((res) => {
        setProducts(res.data.products);
        if (products.length == 0) {
          setError("No products found");
        }
      })
      .catch((err) => {
        setError("No products found")
      })
      }, [])

  function handleOnToggle(isOpen) {
    //handles the open and closed status of the sidebar
   {return isOpen ? setIsOpen(false) : setIsOpen(true)}
  }


  function handleAddItemToCart(product, shoppingCart) {
    const idx = shoppingCart.findIndex(item => item.itemId == product.id);
    if (idx == -1){
      /* checks if shoppingCart contains the object with a similar id as what is passed into function 
          if it does not, it assigns the object and adds it to the array*/
      const newShoppingCartItem = { itemId: product.id, quantity: 1 };
      setShoppingCart([...shoppingCart, newShoppingCartItem]);
      console.log("new quantity=", newShoppingCartItem);
    } 
    
    else {
      /* if shoppingCart contains the object, it simply icrements the quantity by 1*/
      shoppingCart[idx].quantity += 1;
      setShoppingCart(shoppingCart);
      //console.log("quatity more than 1=", shoppingCart[idx].quantity);
    }
  }



  function handleRemoveItemFromCart(productId) {
    //this function removes items from the shopping cart
    if (
      shoppingCart.some((item) => {
        item.itemId === productId.id;
      })
    ) {
      /* checks if shoppingCart contains the object with a similar id as what is passed into function 
          if it does , it decreaces the quantity*/
      shoppingCart.find((item) => {
        item.itemId === productId.id;
      }).quantity -= 1;
      shoppingCart.filter((item) => {
        item.quantity > 0;
      });
    }
  }

  // function handleOnCheckoutFormChange(name,value) {
  //   /*this function updates the checkoutForm state variable */
  //   //const newCheckOutObject = {name: name, value: value}
  //   setCheckoutForm();
  // }

  // function handleOnSubmitCheckoutForm() {
  //   /*this function submits the user's order to the API*/
  //   const user = {name: , email: }
  //   axios.post('/store', {
  //     user {name: }})
  // }

  return (
    <div className="app">
      <BrowserRouter>
        <main>
          {
            <Routes>
              <Route path="/" element={<Home shoppingCart={shoppingCart} isOpen={isOpen} products={products} addItems={handleAddItemToCart} removeItems={handleRemoveItemFromCart} handleOnToggle={handleOnToggle}/>} />
              <Route path="/products/:productId" element={<ProductDetail isOpen={isOpen} addItems={handleAddItemToCart} removeItems={handleRemoveItemFromCart} handleOnToggle={handleOnToggle} shoppingCart={shoppingCart}/>} />
              <Route path="*" element={<NotFound isOpen={isOpen} handleOnToggle={handleOnToggle}/>} />
            </Routes>
          }
        </main>
      </BrowserRouter>
    </div>
  );
}

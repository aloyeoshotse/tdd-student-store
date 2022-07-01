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
import {About} from "../About/About"

export default function App() {
    const apiURL = "http://localhost:3001/store";
    const [products, setProducts] = useState([]);
    const [isFetching, setIsFetching] = useState(false);
    const [error, setError] = useState("");
    const [isOpen, setIsOpen] = useState(false);
    const [shoppingCart, setShoppingCart] = useState([]);
    const [checkoutForm, setCheckoutForm] = useState({name: "", email: ""});

    useEffect(() => {
      axios.get(apiURL)
        .then((res) => {
          //console.log(res);
          setProducts(res.data);
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


    function handleAddItemToCart(productId) {
      //this function adds items to the shopping cart
      let newShoppingCartItem;
      const idx = shoppingCart.find(item => item.itemId == productId);
      if (idx == null){
        /* checks if shoppingCart contains the object with a similar id as what is passed into function 
            if it does not, it assigns the object and adds it to the array*/
        newShoppingCartItem = { itemId: productId, quantity: 1 };
        setShoppingCart(shoppingCart.concat(newShoppingCartItem));
      } 
      else {
        /* if shoppingCart contains the object, it simply icrements the quantity by 1*/
        newShoppingCartItem = [...shoppingCart]
        newShoppingCartItem.forEach((items) => {
          if (items.itemId == productId){items.quantity += 1;}
        })
        setShoppingCart(newShoppingCartItem);
      }
    }


    function handleRemoveItemFromCart(productId) {
      //this function removes items from the shopping cart
      let newShoppingCartItem;
      const idx = shoppingCart.findIndex(item => item.itemId == productId);
      console.log("IDX=",idx)
      if (idx != -1){
        if (shoppingCart[idx].quantity > 0) {
          newShoppingCartItem = [...shoppingCart]
          console.log("before=",newShoppingCartItem)
          newShoppingCartItem.forEach((items) => {
            if (items.itemId == productId){items.quantity -= 1;}
          })
          console.log("after1=",newShoppingCartItem)
          setShoppingCart(newShoppingCartItem)
          console.log("after2=",newShoppingCartItem)
        }
        if (shoppingCart[idx].quantity == 0) {
          let filteredCart = shoppingCart.filter(((item,index) => {return index != idx}))
          console.log("filtered=",filteredCart)
          setShoppingCart(filteredCart);
        }
      }
    }

    function handleOnCheckoutFormChange(name,value) {
      /*this function updates the checkoutForm state variable */
        console.log(value)
      let newObj = checkoutForm;
      let user = checkoutForm.user;
      let pair = {[name] : value}
      user = {...user, ...pair} //this function might not work
      newObj = {...newObj, ...user} //this function might not work
      setCheckoutForm(newObj);
    }

    function handleOnSubmitCheckoutForm(event) {
      /*this function submits the user's order to the API*/
      event.preventDefault();
      
      let newObj = {
            "shoppingCart": shoppingCart,
            "user": checkoutForm
          }

        axios.post(apiURL, newObj)
        .then((res) => {
          console.log(res.data);
          alert("Success! Thank you for your purchase!")
        })
        .catch((err) => {
          setError(err)
          console.log(error)
          alert("Error: Please check that cart has items in it and that the name and email fields are filled out.")
        })
    }

    return (
      <div className="app">
        <BrowserRouter>
          <main>
          <Navbar />
          <Sidebar checkoutForm={checkoutForm} isOpen={isOpen} products={products} shoppingCart={shoppingCart} setShoppingCart={setShoppingCart} handleOnToggle={handleOnToggle} handleOnCheckoutFormChange={handleOnCheckoutFormChange} handleOnSubmitCheckoutForm={handleOnSubmitCheckoutForm}/>
            {
              <Routes>
                <Route path="/" element={<Home checkoutForm={checkoutForm}  setShoppingCart={setShoppingCart} shoppingCart={shoppingCart} isOpen={isOpen} products={products} setProducts={setProducts} addItems={handleAddItemToCart} removeItems={handleRemoveItemFromCart} handleOnToggle={handleOnToggle} handleOnCheckoutFormChange={handleOnCheckoutFormChange} handleOnSubmitCheckoutForm={handleOnSubmitCheckoutForm}/>} />
                <Route path="/products/:productId" element={<ProductDetail checkoutForm={checkoutForm} setShoppingCart={setShoppingCart} isOpen={isOpen} addItems={handleAddItemToCart} removeItems={handleRemoveItemFromCart} handleOnToggle={handleOnToggle} shoppingCart={shoppingCart} products={products}/>} />
                <Route path="*" element={<NotFound products={products} shoppingCart={shoppingCart} isOpen={isOpen} handleOnToggle={handleOnToggle}/>} />
              </Routes>
            }
          </main>
        </BrowserRouter>
      </div>
    );
}

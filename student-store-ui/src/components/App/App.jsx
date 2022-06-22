import * as React from "react";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import Home from "../Home/Home";
import { ProductDetail } from "../ProductDetail/ProductDetail";
import { NotFound } from "../NotFound/NotFound";
import "./App.css";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios"

export default function App() {
  const apiURL = "https://codepath-store-api.herokuapp.com/store"
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
        //console.log("products=",products);
        if (products.length == 0) {setError("No products found")}
      })
      .catch((err) => { setError("No products found")})
    },[])

  function handleOnToggle(){
    
    // //handles the open and closed status of the sidebar
    // if (isOpen === true) {sidebarStatus(false)}
    // else {sidebarStatus(true)}
    //   // <Sidebar handleOnToggle={() => {
    //   //   if (isOpen === true) {sidebarStatus(false)}
    //   //   else {sidebarStatus(true)}
    //   // }}  isOpen={isOpen}/>
  }

  return (
    <div className="app">
      <BrowserRouter>
        <main>
          {
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products/:productId/" element={<ProductDetail />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          }
        </main>
      </BrowserRouter>
    </div>
  );
}

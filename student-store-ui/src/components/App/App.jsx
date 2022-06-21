import * as React from "react"
import Navbar from "../Navbar/Navbar"
import Sidebar from "../Sidebar/Sidebar"
import Home from "../Home/Home"
import {ProductDetail} from "../ProductDetail/ProductDetail"
import {NotFound} from "../NotFound/NotFound"
import "./App.css"
import {BrowserRouter, Routes, Route, NavLink} from "react-router-dom"
import { useState, useEffect } from "react"



export default function App() {

  const [products,updateProducts] = useState([]);
  const [isFetching,funcFetching] = useState(false);
  const [error,isError] = useState("");
  const [isOpen, sidebarStatus] = useState(false);
  const [shoppingCart,addToCart] = useState([]);
  const [checkoutForm,updateCheckOut] = useState();

  useEffect(async () => {
    try{
      //use axios next time, fetch for now
    let res = await fetch("https://codepath-store-api.herokuapp.com/store");
    let data = await res.json();
    console.log(data)
    setData(data)
    }
    catch(err){
      var message = "Product not Fond"
      isError(message);
    }  
  },[products])

  return (
    <div className="app">
      <BrowserRouter>
        <main>
          {
          <Routes>
             <Route path="/" element={<Home />}/>
             <Route path="/products/:productId/" element={<ProductDetail />} />
             <Route path="*" element={<NotFound />} />
           </Routes>
          }
        </main>
      </BrowserRouter>
    </div>
  )
}

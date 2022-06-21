import * as React from "react"
import Navbar from "../Navbar/Navbar"
import Sidebar from "../Sidebar/Sidebar"
import Home from "../Home/Home"
import {ProductDetail} from "../ProductDetail/ProductDetail"
import "./App.css"
import {BrowserRouter, Routes, Route, NavLink} from "react-router-dom"
import { useState } from "react"


export default function App() {

  // const [products,updateProducts] = useState();
  // const [isFetching,funcFetching] = useState(false);
  // const [error,isError] = useState();
  // const [isOpen, sidebarStatus] = useState(false);
  // const [shoppingCart,addToCart] = useState([]);

  return (

    //<Route path='/' element={<><Header /> <Home /></>} />


    <div className="app">
      <BrowserRouter>
        {/* adding these routes removes the views from the page. if error continues, comment it out */}
        <main>
        <Navbar />
        <Sidebar />
          {
          <Routes>
             {/* <Route path="/" element={<><Home.jsx /> <Navbar /> <Sidebar /></>}/> */}
             {/* <Route path="/products/:productId/" element={<><ProductDetail /> <Navbar /> <Sidebar /></>}/> */}
             {/* <Route path="*" element={<><NotFound /> <Navbar /> <Sidebar /></>}/> */}
             <Route path="/" element={<Home />}/>
             <Route path="/products/:productId/" element={<ProductDetail />} />
             <Route path="*" element={<div>not found</div>} />
           </Routes>
          }
        </main>
      </BrowserRouter>
    </div>
  )
}

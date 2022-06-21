import * as React from "react"
import Navbar from "../Navbar/Navbar"
import Sidebar from "../Sidebar/Sidebar"
import Home from "../Home/Home"
import "./App.css"
import {BrowserRouter, Routes} from "react-router-dom"

export default function App() {
  return (
    <div className="app">
      <BrowserRouter>
        {/* adding these routes removes the views from the page. if error continues, comment it out */}
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/products/:productId" element={<ProductDetail />}/>
          <Route path="*" element={<NotFound />}/>
        </Routes>
        <main>
          {/* YOUR CODE HERE! */}
          <Navbar />
          <Sidebar />
          <Home />
        </main>
      </BrowserRouter>
    </div>
  )
}

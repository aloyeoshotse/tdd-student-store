import * as React from "react";
import "./ProductDetail.css";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
import Navbar from "../Navbar/Navbar";
import axios from "axios";


export function ProductDetail({handleAddItemToCart, handleRemoveItemToCart}) {
  const [product, setProduct] = useState();
  const param = useParams("/store/:productId")
  const {productID} = param
  useEffect(() => {
    axios.get(`/store/${productID}`)
      .then((res) => {
        console.log("product-detail=",res)
        // setProduct(res.data)
      })
  }

  )
  
  return (
    <div className="product-detail">
      <Sidebar />
      <Navbar />
      <Link to="/products/:productId/" />
      <ProductView />
    </div>
  );
}

export default ProductDetail
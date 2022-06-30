import * as React from "react";
import "./ProductDetail.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
import Navbar from "../Navbar/Navbar";
import ProductView from "../ProductView/ProductView";
import axios from "axios";


export function ProductDetail({isOpen, handleOnToggle, addItems, removeItems, shoppingCart, products}) {
  const [product, setProduct] = useState();
  const {productId} = useParams();
  console.log("id=",productId)

  useEffect(() => {
    axios.get("http://localhost:3001/store/" + productId)
      .then((res) => {
        console.log("product= ",res)
        setProduct(res.data)
      })
  },[])
  

  return (
    <div className="product-detail">
      <Navbar />
      <Sidebar isOpen={isOpen} products={products} shoppingCart={shoppingCart} handleOnToggle={handleOnToggle} />
     { !product ? null : <ProductView product={product} productId={productId} addItems={addItems} removeItems={removeItems} shoppingCart={shoppingCart}/>}
    </div>
  );
}

export default ProductDetail
import * as React from "react";
import "./ProductDetail.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
import Navbar from "../Navbar/Navbar";
import ProductView from "../ProductView/ProductView";
import axios from "axios";


export function ProductDetail({addItems, removeItems}) {
  const [product, setProduct] = useState();
  const params = useParams();
  console.log("id=",params.productId)

  useEffect(() => {
    axios.get("https://codepath-store-api.herokuapp.com/store/" + params.productId)
      .then((res) => {
        setProduct(res.data.product)
      })
  },[])
  

  return (
    <div className="product-detail">
      <Sidebar />
      <Navbar />
     { !product ? null : <ProductView product={product} productId={params.productId} addItems={addItems} removeItems={removeItems}/>}
    </div>
  );
}

export default ProductDetail
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
  let { productId } = useParams();
 // const param = useParams("/products/:productId")
  console.log("id=",productId)
  console.log(product)
  let link = `/store/${{productId}}`

  useEffect(() => {
    axios.get(`/store/${{productId}}`)
      .then((res) => {
        console.log("product-detail=",res)
        setProduct(res.data.product)
      })
  },[])


  
  return (
    <div className="product-detail">
      <Sidebar />
      <Navbar />
      <ProductView product={product} productId={productId} addItems={addItems} removeItems={removeItems}/>
    </div>
  );
}

export default ProductDetail
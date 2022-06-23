import * as React from "react";
import "./ProductDetail.css";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
import Navbar from "../Navbar/Navbar";

export function ProductDetail(props) {
  // const [product, updateProduct] = useState();
  // let {productId} = useParams();
  // useEffect(async () => {
  //     let res = await fetch()
  // }, [])
  return (
    <div className="product-detail">
      <Sidebar />
      <Navbar />
      <Link to="/products/:productId/" />
    </div>
  );
}

export default ProductDetail;

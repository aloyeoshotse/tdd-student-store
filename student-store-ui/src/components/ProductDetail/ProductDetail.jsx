import * as React from "react"
import "./ProductDetail.css"
import { useState,useEffect } from "react"
import { NavLink, useParams } from "react-router-dom";



export function ProductDetail(props) {
    // const [product, updateProduct] = useState();
    // let {productId} = useParams();
    <NavLink to="/products/:productId/"/>
    // useEffect(async () => {
    //     let res = await fetch()
    // }, [])
    return (
        <div className="product-detail">
        </div>
    )
}

export default ProductDetail
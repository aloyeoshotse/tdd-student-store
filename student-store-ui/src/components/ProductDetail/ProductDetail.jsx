import * as React from "react"
import "./ProductDetail.css"
import { useState,useEffect } from "react"
import { useParams } from "react-router-dom";


export function ProductDetail({handleAddItemToCart,handleRemoveItemToCart}) {
    const [product, updateProduct] = useState();
    let {productId} = useParams();
    // useEffect(async () => {
    //     let res = await fetch()
    // }, [])
    return (
        <div className="product-detail">
        </div>
    )
}
export default ProductDetail
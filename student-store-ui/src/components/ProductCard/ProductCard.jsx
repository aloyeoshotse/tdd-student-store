import * as React from "react"
import "./ProductCard.css"
import { Link } from "react-router-dom";
import { useEffect } from "react";

export function ProductCard({ product, productId, quantity, addItems, allowLink, removeItems, showDescription}) {
    // useEffect(() => {
    //     console.log(product)
    // }, [])
    let dollarUSFormat = Intl.NumberFormat('en-US');
    const link = `/products/${product.id}`
    console.log("key=",productId)
    return(
        <div className="product-card">
            <div className="media">
               {allowLink ? <a href={link} ><img id="img" src={product.image} /></a> : <img id="img" src={product.image} />}
            </div>
            <span className="product-name">{product.name}</span>
            <span className="product-price">${dollarUSFormat.format(product.price)}</span>
            <button className="remove" onClick={() => removeItems(productId)}>-</button>
            {quantity>0 ? <div className="product-quantity">{quantity}</div> : null}
            <button className="add" onClick={() => addItems(productId)}>+</button>

            {showDescription===true ? <div className="product-description">{product.description}</div> : null}
        </div>
    )
}

export default ProductCard


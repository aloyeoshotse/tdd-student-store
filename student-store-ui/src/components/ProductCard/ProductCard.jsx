import * as React from "react"
import "./ProductCard.css"
import { Link } from "react-router-dom";
import { useEffect } from "react";

export function ProductCard({ product, quantity, addItems, removeItems, showDescription}) {
    useEffect(() => {
        console.log(product)
    }, [])
    let dollarUSFormat = Intl.NumberFormat('en-US');
    const link = `/products/${product.id}`
    const productId = product.id;
    //console.log(showDescription)
    console.log("key=",productId)
    return(
        <div className="product-card">
            <div className="media">
                <a href={link} >
                    <img href={link} id="img" src={product.image} />
                </a>
                {/* <a={"/products/:productId"}>
                <img id="img" src={product.image} />
                </Link> */}
            </div>
            <span className="product-name">{product.name}</span>
            <button className="add" onClick={() => addItems(productId)}>+</button>
            <button className="remove" onClick={() => removeItems(productId)}>-</button>
            <div className="product-price">${dollarUSFormat.format(product.price)}</div>
            {showDescription===true ? <div className="product-description">{product.description}</div> : null}
            {quantity>0 ? <div className="product-quantity">{quantity}</div> : null}
        </div>
    )
}

export default ProductCard


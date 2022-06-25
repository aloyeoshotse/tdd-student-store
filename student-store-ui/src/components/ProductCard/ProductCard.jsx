import * as React from "react"
import "./ProductCard.css"
import { Link } from "react-router-dom";
import { useEffect } from "react";

export function ProductCard({ product, productId, shoppingCart, addItems, allowLink, removeItems, showDescription}) {
  
    let dollarUSFormat = Intl.NumberFormat('en-US');
    const link = `/products/${product.id}`
    const idx = shoppingCart.findIndex(item => item.itemId == product.id);
    console.log("prod=",product)
    //console.log("obj=",obj)
    console.log("cart=",shoppingCart)
    return (
        <div className="product-card">
            <div className="media">
                {allowLink ? <a href={link} ><img id="img" src={product.image} /></a> : <img id="img" src={product.image} />}
            </div>
            <div className="product-info">
                <span className="product-name">{product.name}</span>
                <span className="product-price">${dollarUSFormat.format(product.price)}</span>
                <button className="remove" onClick={() => removeItems(product)}>-</button>
                {idx === -1 ? <span className="product-quantity">0</span> :  <span className="product-quantity">{shoppingCart[idx].quantity}</span>}
                <button className="add" onClick={() => addItems(product, shoppingCart)}>+</button>
            </div>
            {showDescription===true ? <div className="product-description">{product.description}</div> : null}
            </div>

    )
    useEffect(() => {}, [shoppingCart[idx].quantity])
}

export default ProductCard


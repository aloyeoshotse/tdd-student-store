import * as React from "react"
import "./ProductCard.css"
import { Link } from "react-router-dom";

export default function ProductCard({product, productId, quantity, handleAddItemToCart, handleRemoveItemToCart, showDescription}) {
    let dollarUSFormat = Intl.NumberFormat('en-US');
    const link = `/products/${productId}`
    console.log(showDescription)
    return(
        <div className="product-card">
            <div className="product-name">{product.name}</div>
            <div className="product-price">${dollarUSFormat.format(product.price)}</div>
            <Link to={link} className="media"><img src={product.image} /></Link>
            <button className="add" onClick={() => handleAddItemToCart(productId)}>+</button>
            <button className="remove" onClick={() => handleRemoveItemToCart(productId)}>-</button>
            {showDescription===true ? <div className="product-description">{product.description}</div> : null}
            {quantity>0 ? <div className="product-quantity">{quantity}</div> : null}
        </div>
    )
}


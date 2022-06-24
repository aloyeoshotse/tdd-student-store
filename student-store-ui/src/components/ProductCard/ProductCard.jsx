import * as React from "react"
import "./ProductCard.css"
import { Link } from "react-router-dom";

export function ProductCard({product, productId, quantity, addItems, removeItems, showDescription}) {
    let dollarUSFormat = Intl.NumberFormat('en-US');
    const link = `/products/${productId}`
    //console.log(showDescription)
    console.log(product)
    return(
        <div className="product-card">
            <div className="media">
                <a href={link}>
                <img id="img" src={product.image} />
                </a>
            </div>
            <div className="product-name">{product.name}</div>
            <div className="product-price">${dollarUSFormat.format(product.price)}</div>
            <button className="add" onClick={() => addItems(productId)}>+</button>
            <button className="remove" onClick={() => removeItems(productId)}>-</button>
            {showDescription===true ? <div className="product-description">{product.description}</div> : null}
            {quantity>0 ? <div className="product-quantity">{quantity}</div> : null}
        </div>
    )
}

export default ProductCard


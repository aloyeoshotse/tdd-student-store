import * as React from "react"
import "./ProductCard.css"

export function ProductCard({product, productId, quantity, handleAddItemToCart, handleRemoveItemToCart, showDescription}) {
    return(
        <div className="product-card">
           <div className="product-name">{product.name}</div>
           <div className="product-price">${product.price}</div> {/*format the price correctly */}
           if ({showDescription == true}){
            <div className="product-description">{product.description}</div>
           }
        </div>
    )
}

export default ProductCard
import * as React from "react"
import ProductCard from "../ProductCard/ProductCard"
import "./ProductView.css"

export function ProductView({product, productId, quantity, addItems, removeItems, shoppingCart}) {
    //console.log("[prod]=",product)
    return (
        <div className="product-view">
            <h1 className="product-id">Product #{productId}</h1>
            <ProductCard product={product} productId={productId} quantity={quantity} addItems={addItems} removeItems={removeItems} allowLink={false} showDescription={true} shoppingCart={shoppingCart}/>
        </div>
    )
}

export default ProductView
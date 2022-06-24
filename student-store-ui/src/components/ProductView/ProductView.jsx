import * as React from "react"
import ProductCard from "../ProductCard/ProductCard"
import "./ProductView.css"

export function ProductView({product, productId, quantity, addItems, removeItems}) {
    //console.log(product)
    return (
        <div className="product-view">
            {/* <h1 className="product-id">Product # {productId}</h1>
            <ProductCard product={product} productId={productId} quantity={quantity} addItems={addItems} removeItems={removeItems} showDescription={true}/> */}
        </div>
    )
}

export default ProductView
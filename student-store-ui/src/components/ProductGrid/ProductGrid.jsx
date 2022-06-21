import * as React from "react"
import "./ProductGrid.css"

export function ProductGrid({products, handleAddItemToCart, handleRemoveItemToCart}) {
    return(
        <div className="product-grid">
            {products.map((item) => {
                return(
                    <ProductCard product={item}/>
                )
            })}
        </div>
    )
}

export default ProductGrid
import * as React from "react"
import "./ProductGrid.css"
import { ProductCard } from "../ProductCard/ProductCard"

export function ProductGrid({products, addItems, removeItems, shoppingCart}) {
    return(
        <div className="product-grid">
            <h2 className="grid-title">Products</h2>
            {products.map((item,idx) => {
                //console.log(item)
                return(
                        <ProductCard key={idx} product={item} shoppingCart={shoppingCart} addItems={addItems} removeItems={removeItems} showDescription={false} allowLink={true}/>
                    )
                })}
        </div>
    )
}

export default ProductGrid
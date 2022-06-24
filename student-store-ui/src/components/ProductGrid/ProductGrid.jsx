import * as React from "react"
import "./ProductGrid.css"
import { ProductCard } from "../ProductCard/ProductCard"

export function ProductGrid({products, addItems, removeItems}) {
    return(
        <div className="product-grid">
            {products.map((item,idx) => {
                //console.log(item)
                return(
                    <ProductCard key={idx} product={item} addItems={addItems} removeItems={removeItems} showDescription={false}/>
                )
            })}
        </div>
    )
}

export default ProductGrid
import * as React from "react"
import "./ProductGrid.css"
import { ProductCard } from "../ProductCard/ProductCard"

export function ProductGrid({products, addItems, removeItems, shoppingCart, searching}) {
    return(
        <div className="product-grid">
            <h2 className="grid-title">Products</h2>
           {searching == true ?
           <div>No products available</div> :
           products.map((item,idx) => {
            console.log(item)
                return(
                    <ProductCard key={idx} product={item} shoppingCart={shoppingCart} addItems={addItems} removeItems={removeItems} showDescription={false} allowLink={true}/>
                )
            })
           }

        </div>
    )
}

export default ProductGrid
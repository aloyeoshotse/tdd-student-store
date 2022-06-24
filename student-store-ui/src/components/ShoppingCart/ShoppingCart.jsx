import * as React from "react"
import "./ShoppingCart.css"

export function ShoppingCart({isOpen, products, shoppingCart}) {
    let dollarUSFormat = Intl.NumberFormat('en-US');
    let subtotal = 0.00;
    const tax = 0.0875
    return ( 
        <div className="shopping-cart">
           return( 
                {shoppingCart.length===0 ? 

                <div className="notification">No items added to cart yet. Start shopping now!</div> : 

                shoppingCart.map((item) => {
                    subtotal += (item.quantity * products[item.itemId - 1].price);
                    return (
                        <div className="cart-card">
                            <div className="cart-product-name">{products[item.itemId - 1].name}</div>
                            <div className="cart-product-quantity">{shoppingCart.quantity}</div>
                        </div>
                    )
                })})

            <div className="subtotal">${dollarUSFormat.format(subtotal)}</div>
            <div className="total-price">${dollarUSFormat.format(subtotal + subtotal*tax)}</div>
        </div>
    )
}

export default ShoppingCart
import * as React from "react"
import "./ShoppingCart.css"
import CheckoutForm from "../CheckoutForm/CheckoutForm";

export function ShoppingCart({products, shoppingCart, setShoppingCart, checkoutForm, 
                                handleOnCheckoutFormChange, handleOnSubmitCheckoutForm}) {
    let dollarUSFormat = Intl.NumberFormat('en-US',{style: 'currency', currency: 'USD', minimumFractionDigits: 2})
    let subtotal = 0.00;
    const tax = 0.0875

    function clearCart(event) {
        event.preventDefault();
        setShoppingCart([]);
    }

           {return( 
                shoppingCart.length === 0 ?

                <div className="shopping-cart-none">
                    <div className="notification">No items added to cart yet. Start shopping now!</div>
                </div>

                :

                <div className="shopping-cart">
                    <div className="shopping-cart-table">
                        <table className="table">
                            <tr className="cart-card-top">
                                <th className="name">Name</th>
                                <th className="quantity">Quantity</th>
                                <th className="unit-price">Unit-Price</th>
                                <th className="price">Price</th>
                            </tr>
                            {shoppingCart.map((item,idx) => {
                                const unitprice = products[item.itemId-1].price;
                                const pricetotal = item.quantity * products[item.itemId-1].price;
                                subtotal += (pricetotal);
                                return(
                                <tr className="cart-card-top">
                                    <td className="cart-product-name">{products[item.itemId - 1].name}</td>
                                    <td className="cart-product-quantity">{item.quantity}</td>
                                    <td className="cart-product-unitprice">{dollarUSFormat.format(unitprice)}</td>
                                    <td className="card-product-total">{dollarUSFormat.format(pricetotal)}</td>
                                </tr>
                                )
                            })}
                            <tr className="cart-card-bottom">
                                <tr className="cart-card-subtotal">
                                    <th className="sub">Subtotal</th>
                                    <td className="subtotal">{dollarUSFormat.format(subtotal)}</td>
                                </tr>
                                
                                <tr className="cart-card-tax">
                                    <th className="tax">Taxes and Fees</th>
                                    <td className="taxes-fees">{dollarUSFormat.format(subtotal*tax)}</td>
                                </tr>

                                <tr className="cart-card-total">
                                    <th className="total">Total</th>
                                    <td className="total-price">{dollarUSFormat.format(subtotal + subtotal*tax)}</td>
                                </tr>
                            </tr>
                        </table>
                        <button className="clear-cart" onClick={(event) => clearCart(event)}>Clear</button> 
                        <CheckoutForm shoppingCart={shoppingCart} checkoutForm={checkoutForm} 
                                    handleOnCheckoutFormChange={handleOnCheckoutFormChange} handleOnSubmitCheckoutForm={handleOnSubmitCheckoutForm}/>
                    </div>
                </div>

           )}
}

export default ShoppingCart
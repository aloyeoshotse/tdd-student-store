import * as React from "react"
import CheckoutForm from "../CheckoutForm/CheckoutForm"
import ShoppingCart from "../ShoppingCart/ShoppingCart"
import "./Sidebar.css"

//sidebar link: https://codepen.io/vyvm/pen/abqgdgK

export function Sidebar({setShoppingCart, isOpen, shoppingCart, products, checkoutForm, handleOnCheckoutFormChange, handleOnSubmitCheckoutForm, handleOnToggle}) {
  return ( 
    isOpen ?  <section className="sidebar">
                  <div className="open-sidebar">
                    <i id="toggle-button-close" onClick={() => {handleOnToggle(isOpen)}}>arrow_backward</i>
                  </div>
                  <ShoppingCart products={products} shoppingCart={shoppingCart} setShoppingCart={setShoppingCart}/>
                  <CheckoutForm shoppingCart={shoppingCart} checkoutForm={checkoutForm} 
                                  handleOnCheckoutFormChange={handleOnCheckoutFormChange} handleOnSubmitCheckoutForm={handleOnSubmitCheckoutForm}/>
                </section> 
                
                : 
                
                <section className="sidebar">
                  <div className="close-sidebar">
                    <i id="toggle-button-open" onClick={() => {handleOnToggle(isOpen)}}>arrow_forward</i>
                  </div>
                </section>
    )
  }

export default Sidebar
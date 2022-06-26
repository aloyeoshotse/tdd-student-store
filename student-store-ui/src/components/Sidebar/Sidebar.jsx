import * as React from "react"
import ShoppingCart from "../ShoppingCart/ShoppingCart"
import "./Sidebar.css"

//sidebar link: https://codepen.io/vyvm/pen/abqgdgK

export function Sidebar({isOpen, shoppingCart, products, checkoutForm, handleOnCheckoutFormChange, handleOnSubmitCheckoutForm, handleOnToggle}) {
  console.log(isOpen)
  return ( 
    isOpen ?  <section className="sidebar">
                  <div className="open-sidebar">
                    <button id="toggle-button-close" onClick={() => {handleOnToggle(isOpen)}}>close</button>
                  </div>
                  <ShoppingCart products={products} shoppingCart={shoppingCart}/>
                </section> 
                
                : 
                
                <section className="sidebar">
                  <div className="close-sidebar">
                    <button id="toggle-button-open" onClick={() => {handleOnToggle(isOpen)}}>open</button>
                  </div>
                </section>
    )
  }

export default Sidebar
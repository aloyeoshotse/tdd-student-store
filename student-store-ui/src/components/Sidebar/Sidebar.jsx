import * as React from "react"
import "./Sidebar.css"

//sidebar link: https://codepen.io/vyvm/pen/abqgdgK

export function Sidebar({isOpen, shoppingCart, products, checkoutForm, handleOnCheckoutFormChange, handleOnSubmitCheckoutForm, handleOnToggle}) {
  //use tenarary operator with isOpen to toggle sidebar
  return ( isOpen === false ? <section className="sidebar" style={{width: "50px"}}>
                                <button id="toggle-button" onClick={handleOnToggle}>open arrow</button>
                              </section> :
                              <section className="sidebar" style={{width: "50px"}}>
                                <button id="toggle-button" onClick={handleOnToggle}>open arrow</button>
                                {/* <ShoppingCart />
                                <checkoutForm /> */}
                              </section>
  )
}

export default Sidebar
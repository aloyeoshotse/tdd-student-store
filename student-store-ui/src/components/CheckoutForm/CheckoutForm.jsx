import * as React from "react"
import "./CheckoutForm.css"

export function CheckoutForm({shoppingCart, checkoutForm, handleOnCheckoutFormChange, handleOnSubmitCheckoutForm}) {
   return ( 
        <div className="checkout-form">
            <form>
            <input className="checkout-form-input" type="text" name="name" placeholder="Student Name" value={checkoutForm.name} onChange={(event) => handleOnCheckoutFormChange(event)}/>
                <input className="checkout-form-input" type="email" name="email" placeholder="student@codepath.org" value={checkoutForm.email} onChange={(event) => handleOnCheckoutFormChange(event)}/>
                <button className="checkout-button" onClick={(event) => handleOnSubmitCheckoutForm(event)}>Checkout</button>
            </form>
        </div>
   )
}

export default CheckoutForm
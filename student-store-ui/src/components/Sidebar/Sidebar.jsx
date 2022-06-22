import * as React from "react"
import "./Sidebar.css"

//sidebar link: https://codepen.io/vyvm/pen/abqgdgK

export default function Sidebar({isOpen, handleOnToggle}) {
  var buttonClassName;
  if (isOpen) {buttonClassName = "open"}
  else { buttonClassName = ""}
  return (
    <section className="sidebar">
      <button id="open">open arrow</button>
      <button id="cart">shopping cart</button>
      <button id="payment">payment info</button>
      <button id="checkout">checkout info</button>
    </section>
  )
}
import * as React from "react"
import "./Sidebar.css"

export default function Sidebar() {
  return (
    <section className="sidebar">
      <button id="open">open arrow</button>
      <button id="cart">shopping cart</button>
      <button id="payment">payment info</button>
      <button id="checkout">checkout info</button>
    </section>
  )
}
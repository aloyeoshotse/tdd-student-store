import * as React from "react"
import "./Logo.css"
import { NavLink } from "react-router-dom"

export function Logo() {
   return ( 
        <div className="logo">
            <NavLink to={"/"} />
        </div>
    )
}

export default Logo
import * as React from "react"
import "./NotFound.css"
import { NavLink } from "react-router-dom"
import Navbar from "../Navbar/Navbar"
import Sidebar from "../Sidebar/Sidebar"

export function NotFound(props) {
  return(
    <div className="not-found">
      <Sidebar />
      <Navbar />
      <NavLink to="*"/> 
      <p>not found</p>
    </div>
  )
}

export default NotFound
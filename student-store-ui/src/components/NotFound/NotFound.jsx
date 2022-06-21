import * as React from "react"
import "./NotFound.css"

export function NotFound(props) {
  return(
    <div className="not-found">
      <Sidebar />
      <Navbar />
      <NavLink to="*"/> 
    </div>
  )
}

export default NotFound
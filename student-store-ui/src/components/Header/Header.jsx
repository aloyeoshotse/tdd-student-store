import * as React from "react";
import "./Header.css"

export function Header (props) {
    return(
        <header className="header">
            <span className="home"></span>
            <span className="about"></span>
            <span className="contact"></span>
            <span className="buy-now"></span>
        </header>
    )
}

export default Header
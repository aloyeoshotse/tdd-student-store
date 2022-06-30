import * as React from "react";
import "./Logo.css";
import { Link } from "react-router-dom";

export function Logo() {
  return (
      <div className="logo">
        <Link to={"/"}>
          <img className="image" src="src/codepath-logo.png"/>
        </Link>
      </div>
  )
}

export default Logo
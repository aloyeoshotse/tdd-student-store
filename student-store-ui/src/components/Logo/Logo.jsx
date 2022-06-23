import * as React from "react";
import "./Logo.css";
import { Link } from "react-router-dom";

export default function Logo() {
  return (
    <div className="logo">
      <Link to={"/"} />
    </div>
  );
}


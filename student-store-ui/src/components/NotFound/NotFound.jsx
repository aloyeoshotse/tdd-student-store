import * as React from "react";
import "./NotFound.css";
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";

export function NotFound(props) {
  return (
    <div className="not-found">
      <Sidebar />
      <Navbar />
      <Link to="*" />
      <p>not found</p>
    </div>
  );
}

export default NotFound;

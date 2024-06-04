import React from "react";
import "../styles/Header.css";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div className="header">
      <Link to="/">
        <h1>News4Us</h1>
      </Link>
    </div>
  );
}

export default Nav;

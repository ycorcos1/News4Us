import React, { useContext } from "react";
import "../styles/Header.css";
import { Link } from "react-router-dom";
import { AppContext } from "../App";

function Nav() {
  const { setSelectedCategory } = useContext(AppContext);

  return (
    <div className="header">
      <Link
        to="/"
        onClick={() => {
          setSelectedCategory("");
        }}
      >
        <h1>News4Us</h1>
      </Link>
    </div>
  );
}

export default Nav;

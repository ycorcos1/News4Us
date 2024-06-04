import React, { useContext } from "react";
import { AppContext } from "../App";
import { Link } from "react-router-dom";
import "../styles/Nav.css";

function Nav() {
  const { getBreakingNews } = useContext(AppContext);

  return (
    <div className="nav">
      <Link to="/results/general">
        <button
          onClick={() => {
            getBreakingNews("general");
          }}
        >
          General
        </button>
      </Link>
      <Link to="/results/world">
        <button
          onClick={() => {
            getBreakingNews("world");
          }}
        >
          World
        </button>
      </Link>
      <Link to="/results/business">
        <button
          onClick={() => {
            getBreakingNews("business");
          }}
        >
          Business
        </button>
      </Link>
      <Link to="/results/technology">
        <button
          onClick={() => {
            getBreakingNews("technology");
          }}
        >
          Technology
        </button>
      </Link>
      <Link to="/results/sports">
        <button
          onClick={() => {
            getBreakingNews("sports");
          }}
        >
          Sports
        </button>
      </Link>
      <Link to="/results/science">
        <button
          onClick={() => {
            getBreakingNews("science");
          }}
        >
          Science
        </button>
      </Link>
      <Link to="/results/health">
        <button
          onClick={() => {
            getBreakingNews("health");
          }}
        >
          Health
        </button>
      </Link>
      <Link to="/results/entertainment">
        <button
          onClick={() => {
            getBreakingNews("entertainment");
          }}
        >
          Entertainment
        </button>
      </Link>
    </div>
  );
}

export default Nav;

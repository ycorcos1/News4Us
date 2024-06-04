import React, { useContext } from "react";
import { AppContext } from "../App";
import { Link } from "react-router-dom";
import "../styles/Nav.css";

function Nav() {
  const { getBreakingNews, setSelectedCategory, selectedCategory } =
    useContext(AppContext);

  const getSelectedCategory = (category) => {
    if (selectedCategory === category) {
      return "selectedcat";
    } else {
      return "deselectedcat";
    }
  };

  return (
    <div className="nav">
      <Link
        to="/results/general"
        onClick={() => {
          getBreakingNews("general");
        }}
      >
        <button
          className={getSelectedCategory("general")}
          onClick={() => {
            setSelectedCategory("general");
          }}
        >
          General
        </button>
      </Link>
      <Link
        to="/results/world"
        onClick={() => {
          getBreakingNews("world");
        }}
      >
        <button
          className={getSelectedCategory("world")}
          onClick={() => {
            setSelectedCategory("world");
          }}
        >
          World
        </button>
      </Link>
      <Link
        to="/results/business"
        onClick={() => {
          getBreakingNews("business");
        }}
      >
        <button
          className={getSelectedCategory("business")}
          onClick={() => {
            setSelectedCategory("business");
          }}
        >
          Business
        </button>
      </Link>
      <Link
        to="/results/technology"
        onClick={() => {
          getBreakingNews("technology");
        }}
      >
        <button
          className={getSelectedCategory("technology")}
          onClick={() => {
            setSelectedCategory("technology");
          }}
        >
          Technology
        </button>
      </Link>
      <Link
        to="/results/sports"
        onClick={() => {
          getBreakingNews("sports");
        }}
      >
        <button
          className={getSelectedCategory("sports")}
          onClick={() => {
            setSelectedCategory("sports");
          }}
        >
          Sports
        </button>
      </Link>
      <Link
        to="/results/science"
        onClick={() => {
          getBreakingNews("science");
        }}
      >
        <button
          className={getSelectedCategory("science")}
          onClick={() => {
            setSelectedCategory("science");
          }}
        >
          Science
        </button>
      </Link>
      <Link
        to="/results/health"
        onClick={() => {
          getBreakingNews("health");
        }}
      >
        <button
          className={getSelectedCategory("health")}
          onClick={() => {
            setSelectedCategory("health");
          }}
        >
          Health
        </button>
      </Link>
      <Link
        to="/results/entertainment"
        onClick={() => {
          getBreakingNews("entertainment");
        }}
      >
        <button
          className={getSelectedCategory("entertainment")}
          onClick={() => {
            setSelectedCategory("entertainment");
          }}
        >
          Entertainment
        </button>
      </Link>
    </div>
  );
}

export default Nav;

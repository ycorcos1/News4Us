import React from "react";
import { useContext } from "react";
import SearchIcon from "../searchicon.svg";
import { Link } from "react-router-dom";
import { AppContext } from "../App";
import "../styles/Home.css";

function Home() {
  const { setSearchKeyword, getBreakingNews, searchKeywordArticles } =
    useContext(AppContext);

  return (
    <>
      <div className="home">
        <nav>
          <h1>News 4 Us</h1>
        </nav>
        <div className="search">
          <input
            placeholder="Search for articles using keywords..."
            onChange={(e) => setSearchKeyword(e.target.value)}
          />
          <Link to="/keywordarticles">
            <img
              src={SearchIcon}
              alt="search"
              onClick={searchKeywordArticles}
            />
          </Link>
        </div>
        <div className="breaking">
          <Link to="/breakingnews">
            <button onClick={getBreakingNews}>Breaking News!</button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Home;

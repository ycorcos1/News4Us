import React, { useContext } from "react";
import { AppContext } from "../App";
import SearchIcon from "../searchicon.svg";
import { Link } from "react-router-dom";
import "../styles/SearchBar.css";

function SearchBar() {
  const { searchKeyword, setSearchKeyword, searchKeywordArticles } =
    useContext(AppContext);

  return (
    <>
      <div className="search">
        <input
          placeholder="Search for articles using keywords..."
          onChange={(e) => setSearchKeyword(e.target.value)}
        />
        <Link to={`/results/${searchKeyword}`}>
          <img
            src={SearchIcon}
            alt="search"
            onClick={() => {
              searchKeywordArticles();
            }}
          />
        </Link>
      </div>
    </>
  );
}

export default SearchBar;

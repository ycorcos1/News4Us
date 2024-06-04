import React from "react";
import Article from "../components/Article";
import { useContext } from "react";
import { AppContext } from "../App";
import "../styles/Results.css";
import SearchBar from "../components/SearchBar";
import Header from "../components/Header";
import Nav from "../components/Nav";

function Results() {
  const { articles } = useContext(AppContext);

  return (
    <>
      <div className="results">
        <Header />
        <Nav />
        <SearchBar />
        {articles === undefined || articles.length === 0 ? (
          <p>Loading...</p>
        ) : (
          <>
            {" "}
            <div className="articlesfound">
              <p>Articles Found:</p>
            </div>
            <div className="container">
              {articles.map((article, i) => (
                <Article key={i} article={article} />
              ))}
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default Results;

import React, { useContext } from "react";
import "../styles/BreakingNews.css";
import { ArrowBackIos } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { AppContext } from "../App";
import Article from "../components/Article";

function BreakingNews() {
  const { articles } = useContext(AppContext);

  return (
    <>
      <div className="breakingnews">
        <div className="title">
          <nav>
            <h1>News 4 Us</h1>
          </nav>
        </div>
        <div className="backhome">
          <Link to="/">
            <button>
              <ArrowBackIos />
            </button>
          </Link>
        </div>
        <div className="articlesfound">
          <p>Articles Found:</p>
        </div>
        <div className="container">
          {articles.map((article) => (
            <Article id={article.id} article={article} />
          ))}
        </div>
      </div>
    </>
  );
}

export default BreakingNews;

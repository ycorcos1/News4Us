import React from "react";
import Article from "../components/Article";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { ArrowBackIos } from "@mui/icons-material";
import { AppContext } from "../App";
import "../styles/Results.css";

function Results() {
  const { articles } = useContext(AppContext);

  return (
    <>
      <div className="results">
        <div className="title">
          <nav>
            <h1>News 4 Us</h1>
          </nav>
        </div>
        <div className="backhome">
          <Link to="/">
            <button>
              <ArrowBackIos />
              New Search
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

  // return (
  //   <div className="breakingnews">
  //     <div className="title">
  //       <nav>
  //         <h1>News 4 Us</h1>
  //       </nav>
  //     </div>
  //     <div className="backhome">
  //       <Link to="/">
  //         <button>
  //           <ArrowBackIos />
  //         </button>
  //       </Link>
  //     </div>
  // <div className="articlesfound">
  //   <p>Articles Found:</p>
  // </div>
  //     <div className="container">
  //       {articles.map((article) => (
  //         <Article article={article} />
  //       ))}
  //     </div>
  //   </div>
  // );
}

export default Results;

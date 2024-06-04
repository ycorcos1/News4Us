import React from "react";
import "../styles/Article.css";

const openArticle = (url) => {
  window.open(url, "_blank", "noreferrer");
};

function Article({ article }) {
  return (
    <>
      <div
        className="article"
        onClick={() => openArticle(article.url)}
        key={article.id}
      >
        <div>
          <p>{article.description}</p>
          <br></br>
          <p>Source: {article.source.name}</p>
          <p>Published on: {article.publishedAt.substring(0, 10)}</p>
          {/* <p>Author: {article.author}</p> */}
        </div>
        <div>
          <img
            src={
              article.image !== "N/A"
                ? article.image
                : "https://via.placeholder.com/400"
            }
            alt={article.title}
          />
        </div>
        <div>
          <span>Article</span>
          <h3>{article.title}</h3>
        </div>
      </div>
    </>
  );
}

export default Article;

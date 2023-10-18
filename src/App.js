import { createContext, useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Results from "./pages/Results";
import BreakingNews from "./pages/BreakingNews";

export const AppContext = createContext();

const BREAKING_URL = `https://newsapi.org/v2/top-headlines?apiKey=&country=us`;
const API_URL =
  "https://newsapi.org/v2/everything?apiKey=";

function App() {
  const [searchKeyword, setSearchKeyword] = useState("");
  const [articles, setArticles] = useState([]);

  const getBreakingNews = async () => {
    const response = await fetch(`${BREAKING_URL}`);
    const data = await response.json();
    console.log("REQUEST MADE");
    setArticles(data.articles);
  };

  const searchKeywordArticles = async () => {
    const response = await fetch(
      `${API_URL}&q=${searchKeyword}&sortBy=popularity`
    );
    const data = await response.json();
    setArticles(data.articles);
    console.log(articles);
  };

  return (
    <AppContext.Provider
      value={{
        searchKeyword,
        setSearchKeyword,
        articles,
        setArticles,
        getBreakingNews,
        searchKeywordArticles,
      }}
    >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/keywordarticles" element={<Results />} />
        <Route path="/breakingnews" element={<BreakingNews />} />
      </Routes>
    </AppContext.Provider>
  );
}

export default App;

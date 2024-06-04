import { createContext, useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Results from "./pages/Results";

export const AppContext = createContext();

function App() {
  const [searchKeyword, setSearchKeyword] = useState("");
  const [articles, setArticles] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");

  const getBreakingNews = async (category) => {
    const response = await fetch(
      `https://gnews.io/api/v4/top-headlines?category=${category}&lang=en&country=us&max=10&apikey=${process.env.REACT_APP_API_KEY}`
    );
    const data = await response.json();
    setArticles(data.articles);
    setSelectedCategory(category);
    console.log(selectedCategory);
  };

  const searchKeywordArticles = async () => {
    const response = await fetch(
      `https://gnews.io/api/v4/search?q=${searchKeyword}&lang=en&country=us&max=10&apikey=${process.env.REACT_APP_API_KEY}`
    );
    const data = await response.json();
    setArticles(data.articles);
  };

  return (
    <>
      <AppContext.Provider
        value={{
          searchKeyword,
          setSearchKeyword,
          articles,
          setArticles,
          getBreakingNews,
          searchKeywordArticles,
          selectedCategory,
          setSelectedCategory,
        }}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/results" element={<Results />} />
          <Route path="/results/:id" element={<Results />} />
        </Routes>
      </AppContext.Provider>
    </>
  );
}

export default App;

import React from "react";
import "../styles/Home.css";
import SearchBar from "../components/SearchBar";
import Header from "../components/Header";
import Nav from "../components/Nav";

function Home() {
  return (
    <>
      <div className="home">
        <Header />
        <Nav />
        <SearchBar />
      </div>
    </>
  );
}

export default Home;

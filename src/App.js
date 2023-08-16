import { useEffect } from "react";
import "./App.css";
import SearchI from "./search.svg";
import MovieCard from "./MovieCard";
import { useState } from "react";
//a5e707a0

const API_URL = "http://www.omdbapi.com/?i=tt3896198&apikey=a5e707a0";

function App() {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("");

  const searchMov = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
  };
  useEffect(() => {
    searchMov("");
  }, []);
  // const wage = document.getElementById("root");

  // wage.addEventListener("keydown", (e) => {
  //   if (e.key === "Enter") {
  //     searchMov(query);
  //   }
  // });

  return (
    <div className="app">
      <h1 className="animtdc hover">Pranay Ki Picturey</h1>
      <div className="search">
        <input
          placeholder="Konsi movie chaiye ?"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />

        <img
          src={SearchI}
          className="abcde"
          alt="search button"
          onClick={() => searchMov(query)}
        />
      </div>
      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard sampleMov={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">No Movies Found</div>
      )}
    </div>
  );
}

export default App;

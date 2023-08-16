import React, { useEffect, useState, useCallback } from "react";
import "./App.css";
import SearchI from "./search.svg";
import MovieCard from "./MovieCard";
import { searchMov } from "./searchMov"; // Import the searchMov function

const API_KEY = "a5e707a0";

function App() {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("");

  const handleKeyPress = useCallback(
    (e) => {
      if (e.key === "Enter") {
        searchMov(API_KEY, query).then((searchResults) => {
          setMovies(searchResults);
        });
      }
    },
    [query]
  );

  useEffect(() => {
    searchMov(API_KEY, "").then((searchResults) => {
      setMovies(searchResults);
    });

    document.addEventListener("keydown", handleKeyPress);

    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [handleKeyPress]);

  return (
    <div className="app">
      <h1 className="animtdc hover">PranayKiPicturey</h1>
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
          onClick={() => {
            searchMov(API_KEY, query).then((searchResults) => {
              setMovies(searchResults);
            });
          }}
        />
      </div>
      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard key={movie.imdbID} sampleMov={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">No Movies Found</div>
      )}
    </div>
  );
}

export default App;

import React, { useState, useEffect } from "react";
import "./Home.css"; // Add relevant styling

const TMDB_API_URL = "https://api.themoviedb.org/3/movie/now_playing";
const TMDB_API_TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiN2JiNzI0NzVhNTQwOTJmZGRmMTQwMjY5YWIwZmE2YyIsIm5iZiI6MTczNzUwMDQ5Ni4yOTc5OTk5LCJzdWIiOiI2NzkwMjc1MGE5N2E0MGYyYWU2YjQ5MWUiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.NhDZvVTzqT297BVAH1G4-zBGfpA2V5qv469yqldnI2s"; // Replace with your API token

const Home = () => {
  const [movies, setMovies] = useState([]); // Store movies fetched from TMDB

  // Fetch recent movies from TMDB
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch(TMDB_API_URL, {
          headers: {
            Authorization: `Bearer ${TMDB_API_TOKEN}`,
          },
        });
        const data = await response.json();
        setMovies(data.results || []); // Set the movie data
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    fetchMovies();
  }, []);

  return (
    <div className="home-container">
      <h1>Welcome to the Home Page</h1>
      
      {/* Movies Section */}
      <section className="movies-section">
        <h2>Recent Movies</h2>
        <div className="movies-grid">
          {movies.map((movie) => (
            <div key={movie.id} className="movie-card">
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                className="movie-poster"
              />
              <h3>{movie.title}</h3>
              <p>Rating: {movie.vote_average}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
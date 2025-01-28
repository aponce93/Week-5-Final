import React, { useState, useEffect } from "react";
import "./StreamList.css"; // Make sure this file exists
import { FaTrashAlt } from "react-icons/fa"; // Import Font Awesome icon for delete

const TMDB_API_URL = "https://api.themoviedb.org/3/movie/now_playing";
const TMDB_API_TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiN2JiNzI0NzVhNTQwOTJmZGRmMTQwMjY5YWIwZmE2YyIsIm5iZiI6MTczNzUwMDQ5Ni4yOTc5OTk5LCJzdWIiOiI2NzkwMjc1MGE5N2E0MGYyYWU2YjQ5MWUiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.NhDZvVTzqT297BVAH1G4-zBGfpA2V5qv469yqldnI2s"; // Replace with your actual TMDB API token

function StreamList() {
  const [input, setInput] = useState(""); // For user input
  const [events, setEvents] = useState([]); // For user events
  const [movies, setMovies] = useState([]); // For recent movies

  // Load events from localStorage when the component mounts
  useEffect(() => {
    const storedEvents = JSON.parse(localStorage.getItem("events")) || [];
    setEvents(storedEvents);
  }, []);

  // Save events to localStorage whenever the events array changes
  useEffect(() => {
    localStorage.setItem("events", JSON.stringify(events));
  }, [events]);

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
        setMovies(data.results || []); // Set the movies in state
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    fetchMovies();
  }, []);

  // Handle adding a new event
  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      setEvents([...events, input.trim()]); // Add the event
      setInput(""); // Clear the input field
    }
  };

  // Handle deleting an event
  const handleDelete = (index) => {
    setEvents(events.filter((_, i) => i !== index));
  };

  return (
    <div className="streamlist-container">
      <h1>StreamList - Home</h1>

      {/* Events Section */}
      <section className="events-section">
        <h2>Your Events</h2>
        <form onSubmit={handleSubmit} className="event-form">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Add a new event..."
            className="event-input"
          />
          <button type="submit" className="submit-btn">Add Event</button>
        </form>
        <ul className="event-list">
          {events.map((event, index) => (
            <li key={index} className="event-item">
              <span>{event}</span>
              <FaTrashAlt
                className="delete-icon"
                onClick={() => handleDelete(index)}
              />
            </li>
          ))}
        </ul>
      </section>

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
}

export default StreamList;
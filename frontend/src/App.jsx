import React, { useState } from "react";
import axios from "axios";

const App = () => {
  const [query, setQuery] = useState("");
  const [videos, setVideos] = useState([]);
  const [error, setError] = useState("");

  const fetchVideos = async () => {
    const API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY;
    const BASE_URL = "https://www.googleapis.com/youtube/v3/search";
    const URL = `${BASE_URL}?part=snippet&type=video&q=${query}&maxResults=10&key=${API_KEY}`;

    try {
      setError(""); // Clear any previous error
      const response = await axios.get(URL);
      const items = response.data.items;

      if (items.length === 0) {
        setError("Videos not found.");
      } else {
        setVideos(items);
      }
    } catch (err) {
      setError("An error occurred while fetching videos.");
      console.error(err);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim() === "") {
      setError("Please enter a search term.");
      setVideos([]);
      return;
    }
    fetchVideos();
  };

  return (
    <div style={{ fontFamily: "Arial, sans-serif", textAlign: "center" }}>
      <header style={{ padding: "20px", backgroundColor: "#f8f9fa" }}>
        <form onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="Search YouTube"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            style={{
              padding: "10px",
              width: "300px",
              borderRadius: "20px",
              border: "1px solid #ccc",
              marginRight: "10px",
            }}
          />
          <button
            type="submit"
            style={{
              padding: "10px 20px",
              borderRadius: "20px",
              border: "none",
              backgroundColor: "#007bff",
              color: "#fff",
              cursor: "pointer",
            }}
          >
            Search
          </button>
        </form>
      </header>

      <main style={{ marginTop: "20px" }}>
        {error && <p style={{ color: "red" }}>{error}</p>}

        {videos.length > 0 && (
          <div style={{ display: "grid", gap: "20px", padding: "20px" }}>
            {videos.map((video) => (
              <div key={video.id.videoId} style={{ textAlign: "left" }}>
                <h3>{video.snippet.title}</h3>
                <img
                  src={video.snippet.thumbnails.medium.url}
                  alt={video.snippet.title}
                  style={{ borderRadius: "10px", maxWidth: "100%" }}
                />
                <p>{video.snippet.description}</p>
                <a
                  href={`https://www.youtube.com/watch?v=${video.id.videoId}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "#007bff", textDecoration: "none" }}
                >
                  Watch on YouTube
                </a>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
};

export default App;

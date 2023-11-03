import React, { useState } from "react";
import {
  fetchRandomJoke,
  fetchJokeFromCategory,
  fetchJokeFromSearch,
} from "./ChuckNorrisJokes";
import "./App.css";

function App() {
  const [joke, setJoke] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleRandomJoke = async () => {
    const randomJoke = await fetchRandomJoke();
    setJoke(randomJoke);
  };

  const handleCategoryJoke = async () => {
    if (selectedCategory) {
      const categoryJoke = await fetchJokeFromCategory(selectedCategory);
      setJoke(categoryJoke);
    }
  };

  const handleSearchJoke = async () => {
    if (searchTerm) {
      const searchJoke = await fetchJokeFromSearch(searchTerm);
      setJoke(searchJoke);
    }
  };

  return (
    <div className="App">
      <h1>Chuck Norris Jokes</h1>

      <button onClick={handleRandomJoke}>Get Random Joke</button>

      <select onChange={(e) => setSelectedCategory(e.target.value)}>
        <option value="">Select Category</option>
        <option value="animal">Animal</option>
        <option value="dev">Dev</option>
        <option value="science">Science</option>
      </select>
      <button onClick={handleCategoryJoke}>Get Joke by Category</button>

      <input
        type="text"
        placeholder="Enter search term"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearchJoke}>Search Joke</button>

      <p>{joke}</p>
    </div>
  );
}

export default App;

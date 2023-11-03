const BASE_URL = "https://api.chucknorris.io/jokes";

// Function to fetch a Chuck Norris joke from a specific category
export const fetchJokeFromCategory = async (category) => {
  try {
    const response = await fetch(`${BASE_URL}/random?category=${category}`);
    if (!response.ok) {
      throw new Error("Failed to fetch joke");
    }
    const data = await response.json();
    return data.value;
  } catch (error) {
    console.error(error);
    return "Failed to fetch Chuck Norris joke";
  }
};

// Function to fetch a random Chuck Norris joke
export const fetchRandomJoke = async () => {
  try {
    const response = await fetch(`${BASE_URL}/random`);
    if (!response.ok) {
      throw new Error("Failed to fetch joke");
    }
    const data = await response.json();
    return data.value;
  } catch (error) {
    console.error(error);
    return "Failed to fetch Chuck Norris joke";
  }
};

// Function to fetch a Chuck Norris joke based on search query
export const fetchJokeFromSearch = async (query) => {
  try {
    const response = await fetch(`${BASE_URL}/search?query=${query}`);
    if (!response.ok) {
      throw new Error("Failed to fetch joke");
    }
    const data = await response.json();
    if (data && data.result.length > 0) {
      return data.result[0].value;
    } else {
      throw new Error("Joke not found");
    }
  } catch (error) {
    console.error(error);
    return "Failed to fetch Chuck Norris joke";
  }
};

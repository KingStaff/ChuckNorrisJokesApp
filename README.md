# Chuck Norris Jokes App

This simple web application allows users to fetch Chuck Norris jokes from various categories or by entering a search term. The app is built using React and utilizes the Chuck Norris Jokes API.

## Features

- **Random Joke:** Fetch a random Chuck Norris joke.
- **Joke by Category:** Select a specific category (e.g., Animal, Dev, Science) to get a joke.
- **Search Joke:** Enter a search term to find a Chuck Norris joke related to the term.

## How to Use

### Getting Started

1. Clone this repository.
2. Install dependencies using `npm install`.
3. Run the app locally using `npm start`.

### Usage

- Click on the "Get Random Joke" button to fetch a random Chuck Norris joke.
- Select a category from the dropdown and click "Get Joke by Category" to fetch a joke from the selected category.
- Enter a search term in the input field and click "Search Joke" to find a Chuck Norris joke related to the term.

## Code Structure

- **App.js:** Contains the main React application and handles joke retrieval based on user actions.
- **ChuckNorrisJokes.js:** Defines functions to fetch Chuck Norris jokes from the API.
- **App.css:** Contains styles for the Chuck Norris Jokes app.

## API Functions

The ChuckNorrisJokes.js file contains the following functions:

- `fetchRandomJoke`: Fetches a random Chuck Norris joke.
- `fetchJokeFromCategory`: Fetches a Chuck Norris joke from a specific category.
- `fetchJokeFromSearch`: Fetches a Chuck Norris joke based on a search query.

## Styles

The styles defined in App.css provide a 3D-like UI for the Chuck Norris Jokes app.

### Stylesheet Explanation

- **3D-Like UI:** The app interface is designed with a 3D-like appearance for a visually appealing layout.

## File Structure

```markdown
- /src
  - App.js
  - ChuckNorrisJokes.js
  - App.css

## Requirements

- Node.js
- React
```

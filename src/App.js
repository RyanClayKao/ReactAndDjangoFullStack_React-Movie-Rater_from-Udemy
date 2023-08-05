import React, { useState, useEffect } from 'react';
import './App.css';
import MovieList from './components/movie-list';
import MovieDetials from './components/movie-details';

function App() {
  const [movies, setMovies] = useState([])
  const [selectedMovie, setSelectedMovie] = useState(null);

  // let tokenFromDjango = 'e515015c76aca083e644f86cb6a80a4fb687b79a';
  let tokenFromDjango = '1408223a9e6c16ca818746457a6905a20532e0c6';

  

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/movies/',{
      method: "GET",
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Token ' + tokenFromDjango
      }
    }).then(res => res.json())
      .then(data => {
        setMovies(data);
      })
      .catch(err => {
        console.log(err);
      });
  }, [])

  const movieClicked = movie => {
    setSelectedMovie(movie);
  }

  const reloadSelectedMovie = (movie) => {
    setSelectedMovie(movie);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Movie Rater</h1>
      </header>
      <div className="layout">
        <MovieList movies={movies} movieClicked={movieClicked}/>
        <MovieDetials movie={selectedMovie} reloadSelectedMovie={reloadSelectedMovie}/>
      </div>
    </div>
  );
}

export default App;

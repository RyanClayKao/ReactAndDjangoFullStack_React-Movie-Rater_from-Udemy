import React, { useState, useEffect } from 'react';
import './App.css';
import MovieList from './components/movie-list';
import MovieDetials from './components/movie-details';
import MovieForm from './components/movie-form';

function App() {
  const [movies, setMovies] = useState([])
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [editedMovie, setEditedMovie] = useState(null);

  let tokenFromDjango = 'e515015c76aca083e644f86cb6a80a4fb687b79a';
  // let tokenFromDjango = '1408223a9e6c16ca818746457a6905a20532e0c6';

  

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

  const reloadSelectedMovie = (movie) => {
    setSelectedMovie(movie);
    setEditedMovie(null);
  }

  const editClicked = movie => {
    setEditedMovie(movie);
    setSelectedMovie(null);
  }

  const refreshMovies = movie => {
    const newMovies = movies.map(item => {
      if (item.id === movie.id){
        return movie
      }
      return item;
    })
    setMovies(newMovies);
  }

  const newMovie = () => {
    setEditedMovie({title: '', description: ''});
    setSelectedMovie(null);
  }

  const addMovieToList = movie => {
    const newMovies = [...movies, movie];
    setMovies(newMovies);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Movie Rater</h1>
      </header>
      <div className="layout">
        <div>
          <MovieList movies={movies} movieClicked={reloadSelectedMovie} editClicked={editClicked}/>
          <button onClick={newMovie}>New Movie</button>
        </div>
        <MovieDetials movie={selectedMovie} reloadSelectedMovie={reloadSelectedMovie}/>
        { editedMovie ? <MovieForm movie={editedMovie} refreshMovies={refreshMovies} addMovieToList={addMovieToList}/> : null }
      </div>
    </div>
  );
}

export default App;

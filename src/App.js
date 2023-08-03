import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [movies, setMovies] = useState([])

  let tokenFromDjango = 'e515015c76aca083e644f86cb6a80a4fb687b79a';

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

  return (
    <div className="App">
      <header className="App-header">
        <h1>Movie Rater</h1>
      </header>
      <div className="layout">
        <div>
          { movies.map(movie => {
            return <h2 key={movie.id}>{movie.title}</h2>
          })}
        </div>
        <div>Movie details</div>
      </div>
    </div>
  );
}

export default App;

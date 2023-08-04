import React from 'react';

function MovieList(props) {
    const movieClicked = movie => event => {
        props.movieClicked(movie);
    }

    return (
        <div>
            {/* 透過這種條件式的方式，先確認 props.movies有值才跑 map函式，避免沒有值或是父組件沒有給這個屬性資料 */}
            {props.movies && props.movies.map(movie => {
                return (
                    <div key={movie.id}>
                        <h2 onClick={movieClicked(movie)}>{movie.title}</h2>
                    </div>
                )
            })}
        </div>
    )
}

export default MovieList;
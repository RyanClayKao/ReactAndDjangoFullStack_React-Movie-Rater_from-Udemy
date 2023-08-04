import React from 'react';

function MovieList(props) {
    return (
        <div>
            {/* 透過這種條件式的方式，先確認 props.movies有值才跑 map函式，避免沒有值或是父組件沒有給這個屬性資料 */}
            {props.movies && props.movies.map(movie => {
                return <h2 key={movie.id}>{movie.title}</h2>
            })}
        </div>
    )
}

export default MovieList;
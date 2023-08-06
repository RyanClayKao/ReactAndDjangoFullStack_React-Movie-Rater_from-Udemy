import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

function MovieList(props) {
    const movieClicked = movie => event => {
        props.movieClicked(movie);
    }

    const editClicked = (movie) => {
        props.editClicked(movie);
    }

    return (
        <div>
            {/* 透過這種條件式的方式，先確認 props.movies有值才跑 map函式，避免沒有值或是父組件沒有給這個屬性資料 */}
            {props.movies && props.movies.map(movie => {
                return (
                    <div key={movie.id} className='movie-item'>
                        <h2 onClick={movieClicked(movie)}>{movie.title}</h2>
                        <FontAwesomeIcon icon={faEdit} onClick={() => editClicked(movie)}/>
                        <FontAwesomeIcon icon={faTrash} />
                    </div>
                )
            })}
        </div>
    )
}

export default MovieList;
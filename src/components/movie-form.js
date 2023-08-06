import React from 'react'

function MovieForm(props) {
    let movie = props.movie;

    return (
        <React.Fragment>
            {movie ? (
                    <h1>{movie.title} edit</h1>
                ) : null }
            
        </React.Fragment>
    )
}

export default MovieForm;
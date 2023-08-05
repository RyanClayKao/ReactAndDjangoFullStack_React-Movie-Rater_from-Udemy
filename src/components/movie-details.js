import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-regular-svg-icons';

function MovieDetails(props) {
    return (
        <div>
            {props.movie ? (
                <div>
                    <h1>{props.movie && props.movie.title}</h1>
                    <p>{props.movie && props.movie.description}</p>
                    <FontAwesomeIcon icon={faStar} />
                </div>
            ) : null}
        </div>
    )
}

export default MovieDetails;
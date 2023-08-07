import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
// import { faStar } from '@fortawesome/free-regular-svg-icons';

function MovieDetails(props) {
    const movie = props.movie;

    const [highlight, setHighlight] = useState(-1);

    const highlightRate = highIndex => event => {
        setHighlight(highIndex);
    }

    const tokenFromDjango = 'e515015c76aca083e644f86cb6a80a4fb687b79a';
    // const tokenFromDjango = '1408223a9e6c16ca818746457a6905a20532e0c6';
    const rateClicked = rateNumber => event => {
        fetch(`http://127.0.0.1:8000/api/movies/${movie.id}/rate_movie/`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Token ' + tokenFromDjango
            },
            body: JSON.stringify({'stars': rateNumber + 1})
        }).then(() => getMovieDetail())
            .catch(err => {
                console.log(err);
            });
    }

    const getMovieDetail = movieId => {
        fetch(`http://127.0.0.1:8000/api/movies/${movie.id}/`, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Token ' + tokenFromDjango
            },
        }).then(res => res.json())
            .then(data => {
                console.log(data);
                props.reloadSelectedMovie(data);
            })
            .catch(err => {
                console.log(err);
            });
    }

    return (
        <React.Fragment>
            {movie ? (
                <div>
                    <h1>{movie && movie.title}</h1>
                    <p>{movie && movie.description}</p>
                    <FontAwesomeIcon icon={faStar} className={movie.avg_rating > 0 ? 'orange' : ''} />
                    <FontAwesomeIcon icon={faStar} className={movie.avg_rating > 1 ? 'orange' : ''} />
                    <FontAwesomeIcon icon={faStar} className={movie.avg_rating > 2 ? 'orange' : ''} />
                    <FontAwesomeIcon icon={faStar} className={movie.avg_rating > 3 ? 'orange' : ''} />
                    <FontAwesomeIcon icon={faStar} className={movie.avg_rating > 4 ? 'orange' : ''} />
                    ({movie.count_of_ratings})

                    <div className="rate-container">
                        <h2>Rate it</h2>
                        {[...Array(5)].map((element, index) => {
                            return (
                                <FontAwesomeIcon icon={faStar} className={highlight > index - 1 ? 'purple' : ''}
                                    key={index}
                                    onMouseEnter={highlightRate(index)}
                                    onMouseLeave={highlightRate(-1)}
                                    onClick={rateClicked(index)}
                                />
                            )
                        })}
                    </div>
                </div>
            ) : null}
        </React.Fragment>
    )
}

export default MovieDetails;
import React, { useState } from 'react'
import API from '../api-service';

function MovieForm(props) {
    let movie = props.movie;

    const [title, setTitle] = useState(movie.title);
    const [description, setDescription] = useState(movie.description);

    const updateClicked = () => {
        console.log("update here");
        API.updateMovie(props.movie.id, { title, description })
            .then(data => props.refreshMovies(data))
            .catch(err => console.log(err));
    }

    return (
        <React.Fragment>
            {movie ? (
                // <h1>{movie.title} edit</h1>

                <div>
                    <label htmlFor="title">Title</label><br />
                    <input id="title" type="text" placeholder="title" value={title}
                        onChange={event => setTitle(event.target.value)} /><br />
                    <label htmlFor="description">Description</label><br />
                    <textarea id="description" placeholder="description" value={description}
                        onChange={event => setDescription(event.target.value)} ></textarea><br/>
                    <button onClick={updateClicked}>Update</button>
                </div>
            ) : null}

        </React.Fragment>
    )
}

export default MovieForm;
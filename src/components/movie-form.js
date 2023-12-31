import React, { useState, useEffect } from 'react'
import API from '../api-service';
import { useCookies } from 'react-cookie';

function MovieForm(props) {
    let movie = props.movie;

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [token] = useCookies(['mr-token']);

    const updateClicked = () => {
        console.log("update here");
        API.updateMovie(props.movie.id, { title, description }, token['mr-token'])
            .then(data => props.refreshMovies(data))
            .catch(err => console.log(err));
    }

    const createClicked = () => {
        console.log("update here");
        API.createMovie({ title, description }, token['mr-token'])
            .then(data => props.addMovieToList(data))
            .catch(err => console.log(err));
    }

    const isDisabled = title.length === 0  || description.length === 0;

    useEffect(() => {
        setTitle(props.movie.title);
        setDescription(props.movie.description);
    }, [props.movie])

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
                    { props.movie.id ? 
                        <button onClick={updateClicked} disabled={isDisabled}>Update</button> :
                        <button onClick={createClicked} disabled={isDisabled}>Create</button>
                    }
                </div>
            ) : null}

        </React.Fragment>
    )
}

export default MovieForm;
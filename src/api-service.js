const TOKEN = "e515015c76aca083e644f86cb6a80a4fb687b79a";

export default class API {
    static updateMovie(movie_id, body){
        return fetch(`http://127.0.0.1:8000/api/movies/${movie_id}/`, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Token ' + TOKEN
            },
            body: JSON.stringify(body)
        })
        .then(res => res.json());
    }

    static createMovie(body){
        return fetch(`http://127.0.0.1:8000/api/movies/`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Token ' + TOKEN
            },
            body: JSON.stringify(body)
        })
        .then(res => res.json());
    }

    static deleteMovie(movie_id){
        return fetch(`http://127.0.0.1:8000/api/movies/${movie_id}`, {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Token ' + TOKEN
            },
        });
    }
}
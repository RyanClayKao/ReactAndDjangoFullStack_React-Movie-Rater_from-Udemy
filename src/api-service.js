// const TOKEN = "e515015c76aca083e644f86cb6a80a4fb687b79a";

export default class API {
    static loginUser(body) {
        return fetch(`http://127.0.0.1:8000/auth/`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body)
        })
            .then(res => res.json());
    }

    static registerUser(body) {
        return fetch(`http://127.0.0.1:8000/api/users/`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body)
        })
            .then(res => res.json());
    }

    static getMovies(token) {
        return fetch('http://127.0.0.1:8000/api/movies/', {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${token}`
            }
        }).then(res => res.json());
    }

    static updateMovie(movie_id, body, token) {
        return fetch(`http://127.0.0.1:8000/api/movies/${movie_id}/`, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Token ' + token
            },
            body: JSON.stringify(body)
        })
            .then(res => res.json());
    }

    static createMovie(body, token) {
        return fetch(`http://127.0.0.1:8000/api/movies/`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Token ' + token
            },
            body: JSON.stringify(body)
        })
            .then(res => res.json());
    }

    static deleteMovie(movie_id, token) {
        return fetch(`http://127.0.0.1:8000/api/movies/${movie_id}`, {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Token ' + token
            },
        });
    }
}
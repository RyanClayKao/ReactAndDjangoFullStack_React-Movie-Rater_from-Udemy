// import React, { useState, useContext, useEffect } from 'react';
import React, { useState, useEffect } from 'react';
import API from '../api-service';
// import { TokenContext } from '../index';
import { useCookies } from 'react-cookie';

function Auth() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isLoginView, setIsLoginView] = useState(true);

    // const {token, setToken} = useContext(TokenContext);
    const [token, setToken] = useCookies(['mr-token']); // 這裡的 mr指的是 movie-rater 的縮寫，可以自訂自己的

    const loginClicked = () => {
        API.loginUser({ username, password })
            // .then(data => { setToken(data.token) })
            .then(data => { setToken('mr-token', data.token) })
            .catch(err => {
                console.log(err);
                alert("登入時系統發生錯誤");
            });
    }

    const registerClicked = () => {
        API.registerUser({ username, password })
            // .then(data => { setToken(data.token) })
            .then(() => loginClicked()) // 做到註冊成功後，就進行登入；於登入成功後，又會依據 useEffect的設定，做到跳轉進入登入後可見的畫面
            .catch(err => {
                console.log(err);
                alert("註冊時系統發生錯誤");
            });
    }

    const isDisabled = username.length === 0  || password.length === 0;

    useEffect(() => {
        console.log(token);
        // if (token) { window.location.href = "/movies" }
        // 當使用 react-cookie 的 useCookies的方式時，預設會是 object，所以當判斷式是「if (token)」結果都會是 true，都會進行導頁
        // 因此要多判斷 object中的 mr-token，有值才導頁
        if (token['mr-token']) { window.location.href = "/movies" }
    }, [token]);

    return (
        <div className="App">
            <header className="App-header">
                {isLoginView ? <h1>Login</h1> : <h1>Register</h1>}
            </header>
            <div className="login-container">
                <label htmlFor="username">Username</label><br />
                <input id="username" type="text" placeholder="username" value={username}
                    onChange={event => setUsername(event.target.value)}
                /><br />
                <label htmlFor="password">Password</label><br />
                <input id="password" type="password" placeholder="password" value={password}
                    onChange={event => setPassword(event.target.value)}
                /><br />
                {isLoginView ?
                    <button onClick={loginClicked} disabled={isDisabled}>Login</button> :
                    <button onClick={registerClicked} disabled={isDisabled}>Register</button>
                }
                {isLoginView ?
                    <p onClick={() => setIsLoginView(false)}>You don't have account? Register here!</p> :
                    <p onClick={() => setIsLoginView(true)}>You already have account? Login here!</p>
                }
            </div>
        </div>
    )
}

export default Auth;
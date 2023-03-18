import { useState } from "react";
import { json, Link, useNavigate } from 'react-router-dom'

const Login = () => {
    const navigate = useNavigate()
    let usInfo = {
        userName: "",
        password: ""
    }
    const [userInfo, setuserInfo] = useState(usInfo);
    const usernameHandler = (e) => {
        setuserInfo(prevState => ({ ...prevState, userName: e.target.value }));
    }
    const passwordHandler = (e) => {
        setuserInfo(prevState => ({ ...prevState, password: e.target.value }));
    }
    const submitHandler = (e) => {
        e.preventDefault();
        loginRequest()
    }
    // in loginRequest I use a pure HttpRequest in javascript
    const loginRequest = () => {
        try {
            let xhr = new XMLHttpRequest();
            let ur = 'https://backend.ugaritsoft.com/sub/functions1.php';
            xhr.open('GET', ur, false);
            xhr.setRequestHeader("Content-Type", "text/plain;charset=UTF-8");
            xhr.send(userInfo)
            xhr.onload = () => {
                alert(xhr.status)
                if (xhr.status != 200) {
                    alert(`Error ${xhr.status} : ${xhr.responseText}`);
                } else {
                    alert(xhr.responseText);
                }
            }
            xhr.onerror = (e) => {
                alert(e.target.status);
            }
        } catch (error) {
            alert(error)

        }
    }

    return (
        <>
            <form className="login-form" onSubmit={submitHandler}>
                <h2>Log in</h2>
                <label for="username">User Name*: </label>
                <input type="text" id="username" value={userInfo.userName}
                    onChange={usernameHandler} minLength="3" maxLength="25" required ></input>
                <label for="password">Password*: </label>
                <input type="password" id="passord" value={userInfo.password}
                    onChange={passwordHandler} minLength="3" maxLength="25" required ></input>
                <button>Login</button>
                <Link to="/register">Register</Link>
                <Link to="/reset">Reset</Link>
            </form>
        </>
    )
}
export default Login;
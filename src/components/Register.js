import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
const Register = () => {
    const navigate = useNavigate();
    const [userInfo, setUserInfo] = useState({
        firstName: "",
        lastName: "",
        userName: "",
        password: "",
        confirmPassword: "",
        email: ""
    })
    const changeInputHandle = (e) => {
        //console.log(e.target.name);
        //console.log(e.target.value);
        const str = e.target.name;
        const newstate = userInfo
        newstate[e.target.name] = e.target.value;
        //console.log(newstate)
        setUserInfo(prevState => ({ ...prevState, newstate }));
    }
    const submitHandler = (e) => {
        e.preventDefault();
        registerRequest();
    }

    // in registerRequest I use a async/await fetch promise
    const registerRequest = async () => {
        const res = await fetch('https://backend.ugaritsoft.com/sub/functions.php', {
            Method: 'POST',
            Body: JSON.stringify(userInfo)
        })
        if (!res.ok) {
            const message = `An error has occore: ${res.status}`;
            throw new Error(message);
        }
        const resObj = await res.json()
        return resObj;
    }

    return (
        <form onSubmit={submitHandler}>
            <h2>Register</h2>
            <div>
                <input type="text" name="firstName" placeholder="First Name"
                    onChange={changeInputHandle} value={userInfo.firstName} minLength="3" maxLength="50" required></input>
            </div>
            <div>
                <input type="text" name="lastName" placeholder="Last Name"
                    onChange={changeInputHandle} minLength="3" maxLength="50" required></input>
            </div>
            <div>
                <input type="text" name="userName" placeholder="User Name"
                    onChange={changeInputHandle} minLength="3" maxLength="50" required></input>
            </div>
            <div>
                <input type="password" name="password" placeholder="Password"
                    onChange={changeInputHandle} minLength="3" maxLength="50" required></input>
            </div>
            <div>
                <input type="password" name="confirmPassword" placeholder="Password Confirm"
                    onChange={changeInputHandle} minLength="3" maxLength="50" required></input>
            </div>
            <div>
                <input type="email" name="email" placeholder="E-Mail"
                    onChange={changeInputHandle} required></input>
            </div>
            <div>
                <button>Register</button>
            </div>
            <div>
                <Link to="/login">Login</Link>
                <Link to="/">Home</Link>
            </div>
        </form>
    )
}
export default Register;
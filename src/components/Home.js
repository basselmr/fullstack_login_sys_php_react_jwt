import { Link } from 'react-router-dom'
const Home = () => {
    return (
        <div>
            <h1>Honar Systems Login System (PHP + MySQL + React + JWT)</h1>
            <div className="panel">
                <Link to="/register">Register</Link>
                {localStorage.getItem('token') ? (
                    <>
                        <Link to="/profile">Profile</Link>
                        <Link to="/logout">Log Out</Link>
                    </>
                ) : (
                    <Link to="/login">Login</Link>
                )}
            </div>
        </div>
    )
}
export default Home;
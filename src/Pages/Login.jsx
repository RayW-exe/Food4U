import React from "react";
import { Link } from "react-router";

function Login ({username, password, setPassword, setUsername, onLogin}) {
    function handleSubmit (e) {
        e.preventDefault();
        onLogin();
    }
    
   const handleChange1 = (e) => {
      setUsername(e.target.value)
   }

   const handleChange2 = (e) => {
      setPassword(e.target.value)
   }



    return(
        <>
        <div>
            <div>
                <h1>Login to</h1>
            </div>
            <div>
                <h1>Food4U</h1>
            </div>
            <form onSubmit={ handleSubmit }>
                <h2>Login</h2>
                <label htmlFor="username">Username:</label><br />
                <input 
                type="text"
                placeholder="Type your username..."
                value={username}
                onChange={handleChange1}
                required
                 /> <br />
                <label htmlFor="password">Password:</label><br />
                <input 
                type="password"
                placeholder="Type your password..."
                value={password}
                onChange={handleChange2}
                required
                 /> <br />
                <button type="submit">Login</button>
            </form>
            <div>
                <h2>Are you new to Food4U?</h2>
                <Link to="/Register">Create an account</Link>   
            </div>
        </div>
        </>
    )
}

export default Login;
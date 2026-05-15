import React from "react";

function Register ({username, password, setPassword, setUsername, onRegister}) {
    function handleSubmit (e) {
        e.preventDefault();
        onRegister();
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
                <h1>Welcome to</h1>
            </div>
            <div>
                <h1>Food4U</h1>
            </div>
            <form onSubmit={ handleSubmit }>
                <h1>Register an account</h1>
                <label htmlFor="name">Username:</label><br />
                <input 
                type="text"
                placeholder="Type your name..."
                value={username}
                onChange={handleChange1}
                required
                 /> <br />
                <label htmlFor="password">Password:</label><br />
                <input 
                type="text"
                placeholder="Type your password..."
                value={password}
                onChange={handleChange2}
                required
                 /> <br />
                <button type="submit">Register</button>
            </form>
        </div>        
        </>
    )
}

export default Register;
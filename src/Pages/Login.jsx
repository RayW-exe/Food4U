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
        <div className="min-h-screen bg-linear-to-b from-yellow-300 via-yellow-500 to-orange-600 flex items-center justify-center">
            <div className="bg-white/50 backdrop-blur-md border-white/60 rounded-4xl shadow-2xl/35 p-8 md:p-14 w-full max-w-5xl">
                <h1 className="text-3xl text-center">
                    WELCOME TO
                </h1>
                <h1 className="text-6xl text-center font-food font-extrabold mb-4">
                    Food4U
                </h1>
                <form onSubmit={ handleSubmit } className="rounded-xl flex items-center justify-center max-h-150 m-7">
                    <div>
                        <h2 className="underline text-5xl font-semibold">
                            LOG-IN
                        </h2>
                        <label htmlFor="username" className="text-3xl">Username:</label>
                        <input 
                        type="text"
                        placeholder="Type your username..."
                        value={username}
                        onChange={handleChange1}
                        required
                        className="border border-slate-300 rounded-md px-3 py-2 focus:bg-white w-full focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 m-2 "
                        /> 
                        <label htmlFor="password" className="text-3xl">Password:</label>
                        <input 
                        type="password"
                        placeholder="Type your password..."
                        value={password}
                        onChange={handleChange2}
                        required
                        className="border border-slate-300 rounded-md px-3 py-2 focus:bg-white w-full focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 m-2 "
                        /> 
                        <button type="submit"
                        className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 focus:bg-white/25 px-4 rounded m-2">
                        Login
                        </button>
                    </div>
                </form>
                <div className="flex flex-col items-center justify-center py-">
                    <h2>Are you new to Food4U?</h2>
                    <Link to="/Register" className="underline decoration-transparent transition duration-300 hover:decoration-inherit text-red-500">Create an account</Link>   
                </div>
            </div>
        </div>
        </>
    )
}

export default Login;
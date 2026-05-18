import { Link } from "react-router";

function Register ({username, password, setPassword, setUsername, onRegister, email, setEmail, dateOfBirth, setDateOfBirth}) {
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

   const handleChange3 = (e) => {
      setEmail(e.target.value)
   }

   const handleChange4 = (e) => {
      setDateOfBirth(e.target.value)
   }

    return(
        <>
        <div className="min-h-screen bg-linear-to-b from-yellow-300 via-yellow-500 to-orange-600 flex items-center justify-center px-4 py-8">
            <div className="bg-white/50 backdrop-blur-md border-white/60 rounded-4xl shadow-2xl/35 p-6 sm:p-10 w-full max-w-3xl">
                <h1 className="text-3xl sm:text-4xl text-center">Welcome to</h1>
                <h1 className="text-5xl sm:text-6xl text-center font-food font-extrabold mb-8">Food4U</h1>
                <form onSubmit={ handleSubmit } className="rounded-xl flex items-center justify-center m-0">
                    <div className="space-y-4">
                        <h1 className="underline text-3xl sm:text-4xl font-semibold text-center">Register an account</h1>
                        <label htmlFor="name" className="text-xl sm:text-2xl">Username:</label>
                        <input 
                        type="text"
                        placeholder="Type your name..."
                        value={username}
                        onChange={handleChange1}
                        required
                        className="border border-slate-300 focus:bg-white rounded-md px-3 py-2 w-full focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 m-0"
                        /> 
                        <label htmlFor="password" className="text-xl sm:text-2xl">Password:</label>
                        <input 
                        type="text"
                        placeholder="Type your password..."
                        value={password}
                        onChange={handleChange2}
                        required
                        className="border border-slate-300 focus:bg-white rounded-md px-3 py-2 w-full focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 m-0"
                        /> 
                        <label htmlFor="email" className="text-xl sm:text-2xl">Email:</label>
                        <input 
                        type="text"
                        placeholder="Type your email..."
                        value={email}
                        onChange={handleChange3}
                        required
                        className="border border-slate-300 focus:bg-white rounded-md px-3 py-2 w-full focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 m-0"
                        /> 
                        <label htmlFor="dateOfBirth" className="text-xl sm:text-2xl">Date of Birth:</label>
                        <input 
                        type="text"
                        placeholder="Type your date of birth e.g yyyy-mm-dd..."
                        value={dateOfBirth}
                        onChange={handleChange4}
                        required
                        className="border border-slate-300 focus:bg-white rounded-md px-3 py-2 w-full focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 m-0"
                        /> 
                        <button type="submit" className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-3 px-6 rounded w-full sm:w-auto">
                        Register
                        </button>
                    </div>
                </form>
                <div className="flex flex-col items-center justify-center py-">
                    <h2>Already a member?</h2>
                    <Link to="/" className="underline decoration-transparent transition duration-300 hover:decoration-inherit text-red-500">Login</Link>   
                </div>
            </div>
        </div>        
        </>
    )
}

export default Register;
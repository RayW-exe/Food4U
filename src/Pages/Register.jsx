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
        <div className="min-h-screen bg-linear-to-b from-yellow-300 via-yellow-500 to-orange-600 flex items-center justify-center">
            <div className="bg-white/50 backdrop-blur-md border-white/60 rounded-4xl shadow-2xl/35 p-8 md:p-14 w-full max-w-5xl">
                <h1 className="text-3xl text-center">Welcome to</h1>
                <h1 className="text-6xl text-center font-food font-extrabold mb-8">Food4U</h1>
                <form onSubmit={ handleSubmit } className="rounded-xl flex items-center justify-center max-h-150 m-7">
                    <div>
                        <h1 className="underline text-5xl font-semibold">Register an account</h1>
                        <label htmlFor="name" className="text-3xl">Username:</label>
                        <input 
                        type="text"
                        placeholder="Type your name..."
                        value={username}
                        onChange={handleChange1}
                        required
                        className="border border-slate-300 rounded-md px-3 py-2 w-full focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 m-2 focus:bg-white"
                        /> 
                        <label htmlFor="password" className="text-3xl">Password:</label>
                        <input 
                        type="text"
                        placeholder="Type your password..."
                        value={password}
                        onChange={handleChange2}
                        required
                        className="border border-slate-300 rounded-md px-3 py-2 w-full focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 m-2 focus:bg-white"
                        /> 
                        <label htmlFor="email" className="text-3xl">Email:</label>
                        <input 
                        type="text"
                        placeholder="Type your email..."
                        value={email}
                        onChange={handleChange3}
                        required
                        className="border border-slate-300 rounded-md px-3 py-2 w-full focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 m-2 focus:bg-white"
                        /> 
                        <label htmlFor="dateOfBirth" className="text-3xl">Date of Birth:</label>
                        <input 
                        type="text"
                        placeholder="Type your date of birth e.g yyyy-mm-dd..."
                        value={dateOfBirth}
                        onChange={handleChange4}
                        required
                        className="border border-slate-300 rounded-md px-3 py-2 w-full focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 m-2 focus:bg-white"
                        /> 
                        <button type="submit" className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded m-2">Register</button>
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
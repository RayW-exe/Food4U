
function Contactus () {
    return(
        <>
         <div className="min-h-screen bg-linear-to-b from-yellow-300 via-yellow-500 to-orange-600 flex items-center justify-center">
            <div className="bg-white/50 backdrop-blur-md border-white/60 rounded-4xl shadow-2xl/35 p-8 md:p-14 w-full max-w-5xl">
                    <h1 className="text-3xl text-center mb-4">Want to contact us,make a suggestion or want to contribute to the recipes?</h1>
                <form className="rounded-xl flex items-center justify-center max-h-100 m-7 p-5">
                    <div>
                        <h2 className="underline text-5xl font-semibold">
                            CONTACt US:
                        </h2>
                        <label htmlFor="Name" className="text-3xl">Enter Your name:</label>
                        <input 
                        type="text"
                        placeholder="input your name..."
                        className="border border-slate-300 rounded-md px-3 py-2 focus:bg-white w-full focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 m-2 "
                        /> 
                        <label htmlFor="Email" className="text-3xl">Enter your email:</label>
                        <input 
                        type="email"
                        placeholder="Input your email...."
                        className="border border-slate-300 rounded-md px-3 py-2 focus:bg-white w-full focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 m-2 "
                        /> 
                        <label htmlFor="Reason" className="text-3xl m-2">Enter your reason to contact us:</label> 
                        <textarea name="reason" id="rs" cols="100" rows="5" placeholder="Enter text here..."></textarea>
                    </div>
                </form>
            </div>
         </div>
        </>
    )
}

export default Contactus;
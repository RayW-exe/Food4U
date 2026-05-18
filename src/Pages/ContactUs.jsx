
function Contactus () {
    return(
        <>
         <div className="min-h-screen bg-linear-to-b from-yellow-300 via-yellow-500 to-orange-600 flex items-center justify-center px-4 py-8">
            <div className="bg-white/50 backdrop-blur-md border-white/60 rounded-4xl shadow-2xl/35 p-6 sm:p-10 w-full max-w-3xl">
                    <h1 className="text-2xl sm:text-3xl text-center mb-4">Want to contact us, make a suggestion, or want to contribute to the recipes?</h1>
                <form className="rounded-xl flex flex-col items-stretch justify-center gap-4 m-0">
                    <div className="space-y-4">
                        <h2 className="underline text-3xl sm:text-4xl font-semibold text-center">
                            CONTACT US:
                        </h2>
                        <div className="space-y-2">
                          <label htmlFor="Name" className="text-xl sm:text-2xl">Enter your name:</label>
                          <input 
                          type="text"
                          placeholder="Input your name..."
                          className="border border-slate-300 rounded-md px-3 py-2 focus:bg-white w-full focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                          />
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="Email" className="text-xl sm:text-2xl">Enter your email:</label>
                          <input 
                          type="email"
                          placeholder="Input your email..."
                          className="border border-slate-300 rounded-md px-3 py-2 focus:bg-white w-full focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                          />
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="Reason" className="text-xl sm:text-2xl">Enter your reason to contact us:</label> 
                          <textarea name="reason" id="rs" cols="100" rows="5" placeholder="Enter text here..." className="border border-slate-300 rounded-md px-3 py-2 focus:bg-white w-full focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"></textarea>
                        </div>
                    </div>
                </form>
            </div>
         </div>
        </>
    )
}

export default Contactus;
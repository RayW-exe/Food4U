
function Dashboard ({userName, email, dateOfBirth, onLogout}) {
    return(
        <>
         <div className="min-h-screen bg-linear-to-b from-yellow-300 via-yellow-500 to-orange-600 grid grid-cols-2">
            <div className="bg-black/40 d border-white/60 rounded-4xl shadow-2xl/35 p-4  m-3">
                <div className="m-2">
                    <h1 className="text-white text-5xl md:text-5xl text-center m-1">WELCOME TO</h1>
                    <h1 className="text-white text-5xl md:text-5xl text-center font-food m-4">Food4U!!</h1>
                    <h2 className="text-white underline text-3xl text-center">About us</h2>
                </div>
                <div className="bg-white/30 p-5 rounded-4xl">
                    <p className="text-white m-3 text-2xl">We provide recipes for you based on what you may be feeling to make. It is a way you can also discover new recipes diffrent types of foods.</p>
                    <p className="text-white m-3 text-2xl">We hope this website will be helpful to you for planning and making meals.</p>
                    <h3 className="text-red-500 text-center m-3 font-semibold text-2xl">Please use the top navigation to move to the desired part of the website</h3>
                </div>
            </div>
            <div className="bg-black/40  border-white/60 rounded-4xl shadow-2xl/35 p-4 m-3">
                <div className="bg-white/30 p-6 rounded-4xl">
                    <h1 className="text-white text-5xl text-center m-1 underline">User Information</h1>
                    <p className="text-white m-3 text-2xl">Username: {userName}</p>
                    <p className="text-white m-3 text-2xl">Email: {email}</p>
                    <p className="text-white m-3 text-2xl">Date of Birth: {dateOfBirth}</p>
                    <button className="bg-red-500 hover:bg-red-700 text-white font-bold p-5 rounded-2xl m-3" onClick={onLogout}>
                        Logout
                    </button>
                </div>
            </div>
         </div>
        </>
    )
}

export default Dashboard;
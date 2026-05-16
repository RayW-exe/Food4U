
function Dashboard () {
    return(
        <>
         <div className="min-h-screen bg-linear-to-b from-yellow-300 via-yellow-500 to-orange-600 flex items-center justify-center">
            <div className="bg-black/40 backdrop-blur-md border-white/60 rounded-4xl shadow-2xl/35 py-24 px-8 md:py-32 md:px-14 w-full max-w-5xl ">
                <div className="m-4">
                    <h1 className="text-white text-5xl text-center m-1">WELCOME TO</h1>
                    <h1 className="text-white text-5xl text-center font-food m-4">Food4U!!</h1>
                    <h2 className="text-white underline text-3xl text-center">About us</h2>
                </div>
                <div className="bg-white/30 p-5 rounded-4xl">
                    <p className="text-white m-3 text-2xl">We provide recipes for you based on what you may be feeling to make. It is a way you can also discover new recipes diffrent types of foods.</p>
                    <p className="text-white m-3 text-2xl">We hope this website will be helpful to you for planning and making meals.</p>
                    <h3 className="text-red-500 text-center m-3 font-semibold text-2xl">Please use the top navigation to move to the desired part of the website</h3>
                </div>
            </div>
         </div>
        </>
    )
}

export default Dashboard;
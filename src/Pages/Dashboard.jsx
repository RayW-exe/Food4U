
function Dashboard ({currentUser}) {
    return(
        <>
         <div>
            <div>
                <h1>Welcome to Food4U, {currentUser}</h1>
                <h2>About us</h2>
            </div>
            <div>
                <p>We provide recipes for you based on what you may be feeling to make. It is a way you can also discover new recipes diffrent types of foods.</p>
                <p>We hope this website will be helpful to you for planning and making meals.</p>
                <h3>Please use the top navigation to move to the desired part of the website</h3>
            </div>
         </div>
        </>
    )
}

export default Dashboard;
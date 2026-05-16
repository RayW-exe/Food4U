
function Contactus () {
    return(
        <>
         <div>
            <div>
                <h1>Want to contact us,make a suggestion or want to contribute to the recipes?</h1>
            </div>
            <div>
                <form action="">
                    <label htmlFor="Name">Enter Your name:</label>
                    <input 
                    type="text"
                    placeholder="input your name..."
                    /> <br />
                    <label htmlFor="Email">Enter your email:</label>
                    <input 
                    type="email"
                    placeholder="Input your email...."
                    /> <br />
                    <label htmlFor="Reason">Enter your reason to contact us:</label> <br />
                    <textarea name="reason" id="rs" cols="30" rows="10" placeholder="Enter text here..."></textarea>
                </form>
            </div>
         </div>
        </>
    )
}

export default Contactus;
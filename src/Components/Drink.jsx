
function Drink ({drinksItem}) {
    return(
        <>
         <div>
            <div>
                <h4>{drinksItem.name}</h4>
                <img src={drinksItem.image} alt={drinksItem.name} />
                <h5>Ingredients:</h5>
                <p>{drinksItem.ingredients}</p>
                <h5>Find the procedure here:</h5>
                <div>
                    <iframe 
                    src={drinksItem.video}
                    width="850"
                    height="480"
                    frameborder="0" 
                    allowFullScreen
                    />
                </div>
            </div>
          </div>
        </>
    )
}

export default Drink;
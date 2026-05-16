
function Drink ({drinksItem}) {
    return(
        <>
         <div>
            <div>
                <h4>{drinksItem.name}</h4>
                <img src={drinksItem.image} alt={drinksItem.name} />
                <h5>Ingredients:</h5>
                <p>{drinksItem.ingredients}</p>
            </div>
          </div>
        </>
    )
}

export default Drink;
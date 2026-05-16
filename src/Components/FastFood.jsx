
function FastFood ({fastFoodItem}) {
    return(
        <>
          <div>
            <div>
                <h4>{fastFoodItem.name}</h4>
                <img src={fastFoodItem.image} alt={fastFoodItem.name} />
                <h5>Ingredients:</h5>
                <p>{fastFoodItem.ingredients}</p>
            </div>
          </div>
        </>
    )
}

export default FastFood;
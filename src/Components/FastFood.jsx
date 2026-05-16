
function FastFood ({fastFoodItem}) {
    return(
        <>
          <div>
            <div>
                <h4>{fastFoodItem.name}</h4>
                <img src={fastFoodItem.image} alt={fastFoodItem.name} />
                <h5>Ingredients:</h5>
                <p>{fastFoodItem.ingredients}</p>
                <h5>Find the procedure here:</h5>
                <div>
                    <iframe 
                    src={fastFoodItem.video}
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

export default FastFood;
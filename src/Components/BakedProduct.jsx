
function BakedProduct ({bakedItem}) {
    return(
        <>
         <div>
            <div>
                <h4>{bakedItem.name}</h4>
                <img src={bakedItem.image} alt={bakedItem.name} />
                <h5>Ingredients:</h5>
                <p>{bakedItem.ingredients}</p>
            </div>
          </div>
        </>
    )
}

export default BakedProduct;
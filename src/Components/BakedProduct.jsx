
function BakedProduct ({bakedItem}) {
    return(
        <>
         <div>
            <div>
                <h4>{bakedItem.name}</h4>
                <img src={bakedItem.image} alt={bakedItem.name} />
                <h5>Ingredients:</h5>
                <p>{bakedItem.ingredients}</p>
                <h5>Find the procedure here:</h5>
                <div>
                    <iframe 
                    src={bakedItem.video}
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

export default BakedProduct;
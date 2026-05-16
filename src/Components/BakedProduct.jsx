
function BakedProduct ({bakedItem}) {
    return(
        <>
         <div>
            <div className="bg-white/30 p-5 rounded-4xl m-4">
                <h4 className="text-black font-semibold underline text-3xl m-2">{bakedItem.name}</h4>
                <img src={bakedItem.image} alt={bakedItem.name} className="p-2 rounded-3xl w-2xs m-2"/>
                <h5 className="font-semibold text-2xl">Ingredients:</h5>
                <p className="text-2xl text-center">{bakedItem.ingredients}</p>
                <h5 className="text-black font-semibold underline text-3xl m-2">Find the procedure here:</h5>
                <div>
                    <iframe 
                    src={bakedItem.video}
                    width="500"
                    height="350"
                    frameborder="0" 
                    allowFullScreen
                    className="p-2 rounded-4xl"
                    />
                </div>
            </div>
          </div>
        </>
    )
}

export default BakedProduct;
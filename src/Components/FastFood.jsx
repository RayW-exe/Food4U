
function FastFood ({fastFoodItem}) {
    return(
        <>
          <div>
            <div className="bg-white/30 p-5 rounded-4xl m-4">
                <h4 className="text-black font-semibold underline text-3xl m-2">{fastFoodItem.name}</h4>
                <img src={fastFoodItem.image} alt={fastFoodItem.name} className="p-2 rounded-3xl w-full max-w-full h-auto m-2"/>
                <h5 className="font-semibold text-2xl">Ingredients:</h5>
                <p className="text-2xl text-center">{fastFoodItem.ingredients}</p>
                <h5 className="text-black font-semibold underline text-3xl m-2">Find the procedure here:</h5>
                <div className="w-full">
                    <iframe 
                    src={fastFoodItem.video}
                    frameBorder="0" 
                    allowFullScreen
                    className="p-2 rounded-4xl w-full aspect-video"
                    />
                </div>
            </div>
          </div>
        </>
    )
}

export default FastFood;
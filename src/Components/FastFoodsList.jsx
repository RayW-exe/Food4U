import FastFood from "./FastFood";

function FastFoodsList ({fastFoodItems}) {
    return(
        <>
          <div>
            {fastFoodItems.map((fastFoodItem) => (
                <FastFood key={fastFoodItem.id}
                fastFoodItem={fastFoodItem}/>
            ))}
          </div>
        </>
    )
}

export default FastFoodsList;
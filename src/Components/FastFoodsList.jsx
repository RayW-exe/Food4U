import FastFood from "./FastFood";
import Search from "./Search";


function FastFoodsList ({fastFoodItems, search, setSearch}) {
    return(
        <>
          <div>
            <Search search={search} setSearch={setSearch}/>
            {fastFoodItems.map((fastFoodItem) => (
                <FastFood key={fastFoodItem.id}
                fastFoodItem={fastFoodItem}/>
            ))}
          </div>
        </>
    )
}

export default FastFoodsList;
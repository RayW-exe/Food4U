import FastFood from "./FastFood";
import Search from "./Search";


function FastFoodsList ({fastFoodItems, search, setSearch}) {
    return(
        <>
          <div className="min-h-screen bg-linear-to-b from-yellow-300 via-yellow-500 to-orange-600 flex items-center justify-center">
            <div className="bg-black/40 backdrop-blur-md border-white/60 rounded-4xl shadow-2xl/35 p-8 md:p-14 w-full max-w-5xl m-5">
              <Search search={search} setSearch={setSearch}/>
              {fastFoodItems.map((fastFoodItem) => (
                  <FastFood key={fastFoodItem.id}
                  fastFoodItem={fastFoodItem}/>
              ))}
            </div>
          </div>
        </>
    )
}

export default FastFoodsList;
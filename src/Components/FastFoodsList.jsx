import FastFood from "./FastFood";
import Search from "./Search";
import { Link } from "react-router";


function FastFoodsList ({fastFoodItems, search, setSearch}) {
    return(
        <>
          <div className="min-h-screen bg-linear-to-b from-yellow-300 via-yellow-500 to-orange-600 flex items-center justify-center px-4 py-8">
            <div className="bg-black/40 backdrop-blur-md border-white/60 rounded-4xl shadow-2xl/35 p-6 sm:p-10 w-full max-w-screen-lg m-5">
             <Link to="/Recipes" className="bg-white/30 px-4 py-3 rounded-2xl hover:bg-white/40 mb-5 inline-block">Back to Recipes</Link>
              <Search search={search} setSearch={setSearch}/>
              <div className="grid gap-6">
                {fastFoodItems.map((fastFoodItem) => (
                  <FastFood key={fastFoodItem.id}
                  fastFoodItem={fastFoodItem}/>
              ))}
              </div>
            </div>
          </div>
        </>
    )
}

export default FastFoodsList;
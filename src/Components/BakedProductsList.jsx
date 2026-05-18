import BakedProduct from "./BakedProduct";
import Search from "./Search";
import { Link } from "react-router";


function BakedProductsList ({bakedItems, search, setSearch}) {
    return(
        <>
         <div className="min-h-screen bg-linear-to-b from-yellow-300 via-yellow-500 to-orange-600">
            <div className="bg-black/40 rounded-4xl p-6 m-5">
                <Link to="/Recipes" className="bg-white/30 rounded-2xl hover:bg-white/40 p-4 m-7">Back to Recipes</Link>
                <Search search={search} setSearch={setSearch}/>
                <div className="grid grid-cols-4 gap-6">
                {bakedItems.map((bakedItem) => (
                    <BakedProduct key={bakedItem.id}
                    bakedItem={bakedItem}/>
                ))}
                </div>
            </div>
         </div>
        </>
    )
}

export default BakedProductsList;
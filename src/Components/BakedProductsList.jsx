import BakedProduct from "./BakedProduct";
import Search from "./Search";
import { Link } from "react-router";


function BakedProductsList ({bakedItems, search, setSearch}) {
    return(
        <>
         <div className="min-h-screen bg-linear-to-b from-yellow-300 via-yellow-500 to-orange-600 flex items-center justify-center">
            <div className="bg-black/40 backdrop-blur-md border-white/60 rounded-4xl shadow-2xl/35 p-8 md:p-14 w-full max-w-5xl m-5">
                <Link to="/Recipes" className="bg-white/30 p-3 rounded-2xl hover:bg-white/40 mb-5 inline-block m-5">Back to Recipes</Link>
                <Search search={search} setSearch={setSearch}/>
                {bakedItems.map((bakedItem) => (
                    <BakedProduct key={bakedItem.id}
                    bakedItem={bakedItem}/>
                ))}
            </div>
         </div>
        </>
    )
}

export default BakedProductsList;
import BakedProduct from "./BakedProduct";
import Search from "./Search";


function BakedProductsList ({bakedItems, search, setSearch}) {
    return(
        <>
         <div>
            <Search search={search} setSearch={setSearch}/>
            {bakedItems.map((bakedItem) => (
                <BakedProduct key={bakedItem.id}
                bakedItem={bakedItem}/>
            ))}
         </div>
        </>
    )
}

export default BakedProductsList;
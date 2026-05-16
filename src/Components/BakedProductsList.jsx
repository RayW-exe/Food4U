import BakedProduct from "./BakedProduct";

function BakedProductsList ({bakedItems}) {
    return(
        <>
         <div>
            {bakedItems.map((bakedItem) => (
                <BakedProduct key={bakedItem.id}
                bakedItem={bakedItem}/>
            ))}
         </div>
        </>
    )
}

export default BakedProductsList;
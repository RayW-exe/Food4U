import BakedProductsList from "../Components/BakedProductsList";

function BakedProducts ({bakedItems}) {
    return(
        <>
          <BakedProductsList bakedItems={bakedItems} />
        </>
    )
}

export default BakedProducts;
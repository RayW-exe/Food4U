import BakedProductsList from "../Components/BakedProductsList";

function BakedProducts ({bakedItems, search, setSearch}) {
      const filterSearch = bakedItems.filter((bakedItem) => {
    return bakedItem.name.toLowerCase().includes(search.toLowerCase())
  })

    return(
        <>
          <BakedProductsList bakedItems={filterSearch} search={search} setSearch={setSearch}/>
        </>
    )
}

export default BakedProducts;
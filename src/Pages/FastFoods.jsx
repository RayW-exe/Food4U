import FastFoodsList from "../Components/FastFoodsList";

function FastFoods ({fastFoodItems, search, setSearch}) {
      const filterSearch = fastFoodItems.filter((fastFoodItem) => {
    return fastFoodItem.name.toLowerCase().includes(search.toLowerCase())
  })

    return(
        <>
         <FastFoodsList fastFoodItems={filterSearch} search={search} setSearch={setSearch}/>
        </>
    )
}

export default FastFoods;
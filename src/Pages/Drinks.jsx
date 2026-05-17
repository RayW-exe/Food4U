import DrinksList from "../Components/DrinksList";

function Drinks ({drinksItems, search, setSearch}) {
      const filterSearch = drinksItems.filter((drinksItem) => {
    return drinksItem.name.toLowerCase().includes(search.toLowerCase())
  })

    return(
        <>
         <DrinksList drinksItems={filterSearch} search={search} setSearch={setSearch}/>
        </>
    )
}

export default Drinks;
import Drink from "./Drink";
import Search from "./Search";

function DrinksList ({drinksItems, search, setSearch}) {
    return(
        <>
         <div>
            <Search search={search} setSearch={setSearch}/>
            {drinksItems.map((drinksItem) => (
                <Drink key={drinksItem.id}
                drinksItem={drinksItem}/>
            ))}
         </div>
        </>
    )
}

export default DrinksList;
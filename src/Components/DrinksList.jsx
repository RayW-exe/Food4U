import Drink from "./Drink";

function DrinksList ({drinksItems}) {
    return(
        <>
         <div>
            {drinksItems.map((drinksItem) => (
                <Drink key={drinksItem.id}
                drinksItem={drinksItem}/>
            ))}
         </div>
        </>
    )
}

export default DrinksList;
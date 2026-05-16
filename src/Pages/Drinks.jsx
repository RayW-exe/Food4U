import DrinksList from "../Components/DrinksList";

function Drinks ({drinksItems}) {
    return(
        <>
         <DrinksList drinksItems={drinksItems} />
        </>
    )
}

export default Drinks;
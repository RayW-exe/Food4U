import React from "react";
import { useState } from "react";

function AdminPanel({ onAddFastFood, onAddDrink, onAddBaked }) {
    const [fastFoodItems, setFastFoodItems] = useState({name: "", ingredients: "", video: ""});
    const [drinksItems, setDrinKsItems] = useState({name: "", ingredients: "", video: ""});
    const [bakedItems, setBakedItems] = useState({name: "", ingredients: "", video: ""});


    const handleAddFastFood = (e) => {
        e.preventDefault();
        onAddFastFood({ name, ingredients, video });
        setFastFoodItems({name: "", ingredients: "", video: ""});
    }
    const handleAddDrink = (e) => {
        e.preventDefault();
        onAddDrink({ name, ingredients, video });
        setDrinKsItems({name: "", ingredients: "", video: ""});
    }
    const handleAddBaked = (e) => {
        e.preventDefault();
        onAddBaked({ name, ingredients, video });
        setBakedItems({name: "", ingredients: "", video: ""});
    }
    return(
        <div className="min-h-screen bg-linear-to-b from-yellow-300 via-yellow-500 to-orange-60 px-4 py-8">
            <div className="bg-black/40 p-5 rounded-4xl shadow-2xl/35 w-full max-w-5xl">
            <h1 className="text-3xl font-extrabold m-4">Admin Panel</h1>
            <div className="bg-white/40 p-5 m-4 rounded-4xl">
            <h2 className="text-2xl font-semibold m-4">New FastFood</h2>
             <form onSubmit={handleAddFastFood}>
                <label htmlFor="name">Enter name:</label>
                <input type="text" value={fastFoodItems.name} onChange={(e) => setFastFoodItems({...fastFoodItems, name: e.target.value})} 
                className="border border-slate-300 rounded-md px-3 py-2 focus:bg-white w-full focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 m-0"
                />
                <label htmlFor="ingredients">Enter Ingredients:</label>
                <input type="text" value={fastFoodItems.ingredients} onChange={(e) => setFastFoodItems({...fastFoodItems, ingredients: e.target.value})} 
                className="border border-slate-300 rounded-md px-3 py-2 focus:bg-white w-full focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 m-0"
                />
                <label htmlFor="video">Enter video url:</label>
                <input type="text" value={fastFoodItems.video} onChange={(e) => setFastFoodItems({...fastFoodItems, video: e.target.value})} 
                className="border border-slate-300 rounded-md px-3 py-2 focus:bg-white w-full focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 m-0"
                />
                <button type="submit"
                className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-3 px-6 rounded w-full sm:w-auto"
                >Add Fast Food</button>
             </form>
            </div>
            <div className="bg-white/40 p-5 m-4 rounded-4xl">
            <h2 className="text-2xl font-semibold m-4">New Drink</h2>
                <form onSubmit={handleAddDrink}>
                    <label htmlFor="name">Enter name:</label>
                    <input type="text" value={drinksItems.name} onChange={(e) => setDrinKsItems({...drinksItems, name: e.target.value})} 
                    className="border border-slate-300 rounded-md px-3 py-2 focus:bg-white w-full focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 m-0"
                    />
                    <label htmlFor="ingredients">Enter Ingredients:</label>
                    <input type="text" value={drinksItems.ingredients} onChange={(e) => setDrinKsItems({...drinksItems, ingredients: e.target.value})} 
                    className="border border-slate-300 rounded-md px-3 py-2 focus:bg-white w-full focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 m-0"
                    />
                    <label htmlFor="video">Enter video url:</label>
                    <input type="text" value={drinksItems.video} onChange={(e) => setDrinKsItems({...drinksItems, video: e.target.value})} 
                    className="border border-slate-300 rounded-md px-3 py-2 focus:bg-white w-full focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 m-0"
                    />
                    <button type="submit"
                    className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-3 px-6 rounded w-full sm:w-auto"
                    >Add Drink</button>
                </form>
            </div>
            <div className="bg-white/40 p-5 m-4 rounded-4xl">
            <h2 className="text-2xl font-semibold m-4">New BakedProduct</h2>
                <form onSubmit={handleAddBaked}>
                    <label htmlFor="name">Enter name:</label>
                    <input type="text" value={bakedItems.name} onChange={(e) => setBakedItems({...bakedItems, name: e.target.value})} 
                    className="border border-slate-300 rounded-md px-3 py-2 focus:bg-white w-full focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 m-0"
                    />
                    <label htmlFor="ingredients">Enter Ingredients:</label>
                    <input type="text" value={bakedItems.ingredients} onChange={(e) => setBakedItems({...bakedItems, ingredients: e.target.value})} 
                    className="border border-slate-300 rounded-md px-3 py-2 focus:bg-white w-full focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 m-0"
                    />
                    <label htmlFor="video">Enter video url:</label>
                    <input type="text" value={bakedItems.video} onChange={(e) => setBakedItems({...bakedItems, video: e.target.value})} 
                    className="border border-slate-300 rounded-md px-3 py-2 focus:bg-white w-full focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 m-0"
                    />
                    <button type="submit"
                    className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-3 px-6 rounded w-full sm:w-auto"
                    >Add Baked Product</button>
                </form>
            </div>
            </div>
        </div>
    )
}

export default AdminPanel;
import React from "react";

function Search ({Search, setSearch}) {
    return(
        <>
        <div>
            <div className="bg-white/30 p-5 rounded-4xl m-5">
                <label htmlFor="Search">Search meal</label>
                <input 
                type="text"
                id="search"
                placeholder="Type a specific meal..."
                value={Search}
                onChange={(e) => setSearch(e.target.value)}
                className="border border-slate-300 rounded-md px-3 py-2 focus:bg-white w-full focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 m-2 "
                />
            </div>
          </div>
        </>
    )
}

export default Search
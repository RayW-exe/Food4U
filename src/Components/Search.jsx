import React from "react";

function Search ({Search, setSearch}) {
    return(
        <>
        <div className="bg-white/30 p-6 rounded-4xl">
          <label htmlFor="Search">Search meal</label>
          <input 
          type="text"
          id="search"
          placeholder="Type a specific meal..."
          value={Search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full px-4 py-2 border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          </div>
        </>
    )
}

export default Search
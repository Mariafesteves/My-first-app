
import React, { useState } from 'react'

function SearchBar({onSearch}) {
    const [searchInput, setSearchInput] = useState("");


    const handleChange = (e) => {
        e.preventDefault();
        const value= e.target.value
        setSearchInput(value);

        onSearch(value)


      
    }

    return (
        <div>
            <input
                type="text"
                placeholder="Search here 🔎"
                onChange={handleChange}
                value={searchInput}
            />
        </div>
    );


}

export default SearchBar
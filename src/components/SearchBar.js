import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai';

const SearchBar = () => {
    return (
        <div className="search-box">
            <AiOutlineSearch style={{backgroundColor: "#212121"}} /> 
            <input type="text" placeholder="Search" className="search-bar"/>
        </div>
    )
}

export default SearchBar


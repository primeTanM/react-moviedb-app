import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai';
import { movieContext } from '../App'
import { useContext } from 'react'

const SearchBar = () => {

    const {category, fetchCategory} = useContext(movieContext);
    const [stateCategory, setStateCategory] = category;

    const handleSearch = (e) => {
        if(e.keyCode === 13){
            setStateCategory(e.target.value)
            console.log(e.target.value)
        }
    }

    return (
        <div className="search-box">
            <AiOutlineSearch style={{backgroundColor: "#212121", marginRight: "5px"}} /> 
            <input onKeyDown={handleSearch} type="text" placeholder="Press Enter to Search" className="search-bar"/>
        </div>
    )
}

export default SearchBar


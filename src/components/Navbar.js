import React from 'react'
import SearchBar from './SearchBar'
import { FiFilter } from 'react-icons/fi'
import { movieContext } from '../App'
import { useContext } from 'react'

const Navbar = () => {
    const {category, fetchCategory} = useContext(movieContext);
    const [stateCategory, setStateCategory] = category;
    return (
        <div className="navbar-container">
            <button className="navbar-btn"><FiFilter />Filter</button>
            <div className="categories">
                <button className="cat-btn" onClick={() => setStateCategory("popular")}>Popular</button>
                <button className="cat-btn" onClick={() => setStateCategory("top_rated")}>Top Rated</button>
                <button className="cat-btn" onClick={() => setStateCategory("upcoming")}>Upcoming</button>
                <button className="cat-btn" onClick={() => setStateCategory("trending")}>Trending</button>
                <button className="cat-btn">WatchList</button>
            </div>
            <SearchBar />
        </div>
    )   
}


export default Navbar

import React from 'react'
import SearchBar from './SearchBar'
import { FiFilter } from 'react-icons/fi'

const Navbar = ({ setCategory }) => {

    return (
        <div className="navbar-container">
            <button className="navbar-btn"><FiFilter />Filter</button>
            <div className="categories">
                <button className="cat-btn" onClick={() => setCategory("popular")}>Popular</button>
                <button className="cat-btn" onClick={() => setCategory("top_rated")}>Top Rated</button>
                <button className="cat-btn" onClick={() => setCategory("upcoming")}>Upcoming</button>
                <button className="cat-btn" onClick={() => setCategory("trending")}>Trending</button>
            </div>
            <SearchBar />
        </div>
    )   
}


export default Navbar

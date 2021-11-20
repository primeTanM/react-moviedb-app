import React, { useState } from 'react'
import SearchBar from './SearchBar'
import { FiFilter } from 'react-icons/fi'

const Navbar = ({ setCategory }) => {

    return (
        <div className="navbar-container">
            <button className="navbar-btn"><FiFilter />Filter</button>
            <div className="categories">
                <button onClick={() => setCategory("popular")}>Popular</button>
                <button onClick={() => setCategory("top_rated")}>Top Rated</button>
                <button onClick={() => setCategory("upcoming")}>Upcoming</button>
            </div>
            <SearchBar />
        </div>
    )   
}


export default Navbar

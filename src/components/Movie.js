import React, { useState, useEffect, useContext } from 'react'
import axios from 'axios'
import { movieContext } from '../App';
import { BsBookmarkHeart, BsBookmarkHeartFill } from 'react-icons/bs'


const client = axios.create({
    baseURL: "https://api.themoviedb.org/3/" 
});

const Movie = () => {

    const {setCateogry, fetchCategory} = useContext(movieContext);
    const fetchUrl = fetchCategory

    const [movie, setMovie] = useState([]);

    useEffect(() => {
        async function getPost() {
            const response = await client.get(fetchUrl);
            console.log(response);
            setMovie(response.data.results);
          }
          getPost();
    }, [fetchUrl])

    return (
    movie.map((m) => (
            <div className="movie-component" key={m.id}>    
                <img src={`https://image.tmdb.org/t/p/w500${m.backdrop_path}`} alt="Not Found" onError={(e)=>{e.target.onerror = null; e.target.src="https://image.shutterstock.com/image-illustration/leather-background-jpeg-version-260nw-101031550.jpg"}}/>
                <BsBookmarkHeart className="bookmark" />
                <div className="metadata">
                    <h1>{m.title}</h1>
                    <a>⭐{m.vote_average}</a>
                </div>
                
            </div>
        )
))

}

export default Movie

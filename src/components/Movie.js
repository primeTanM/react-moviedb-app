import React, { useState, useEffect } from 'react'
import axios from 'axios'
import requests from './ApiRequest';

const IMAGE_REQUEST = 'https://image.tmdb.org/t/p/w200';
const SEARCH_REQUEST = 'https://api.themoviedb.org/3/search/movie?api_key=bdec1fccee55a5f07f481f55fd8dec26&language=en-US&page=1&include_adult=false';

const client = axios.create({
    baseURL: "https://api.themoviedb.org/3/" 
});

const Movie = ({ fetchUrl }) => {

    const [movie, setMovie] = useState([]);

    useEffect(() => {
        async function getPost() {
            const response = await client.get(fetchUrl);
            console.log(response);
            setMovie(response.data.results);
            // return response;
          }
          getPost();
    }, [])

    return (
    movie.map((m) => (
            <div className="movie-component" key={m.id}>    
                <img src={`https://image.tmdb.org/t/p/w500${m.backdrop_path}`} alt="" />
                <div className="metadata">
                    <h1>{m.title}</h1>
                    <a>⭐{m.vote_average}</a>
                </div>
                
            </div>
        )
))

}

export default Movie

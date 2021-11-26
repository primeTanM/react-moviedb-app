import { useState } from "react";
import Movie from "./components/Movie";
import requests from "./components/ApiRequest";
import Navbar from "./components/Navbar";
import { createContext } from "react";

const API_KEY = 'bdec1fccee55a5f07f481f55fd8dec26';
export const movieContext = createContext();

function App() {
  const [category, setCategory] = useState('popular')

  let fetchCategory
  if(category === "trending"){
    fetchCategory = category +  "/movie/week?api_key=" + API_KEY 
  }
  if(category === "top_rated" || category === "upcoming" || category === "popular"){
    fetchCategory = "movie/" + category + "?api_key=" + API_KEY + "&language=en-US&page=1";
  }
  else {
    fetchCategory = "search/movie?query=" + category + "&api_key=" + API_KEY + "&language=en-US&page=1&include_adult=false";
  }
  
  return (
    <movieContext.Provider value={{category : [category, setCategory], fetchCategory}}>
      <div className="App">
        <Navbar />
        <div className="movie-container"> 
          <Movie /> 
        </div> 
      </div>    
    </movieContext.Provider>
    
  );
}

export default App;

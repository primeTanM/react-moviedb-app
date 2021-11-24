import { useState } from "react";
import Movie from "./components/Movie";
import requests from "./components/ApiRequest";
import Navbar from "./components/Navbar";
import { createContext } from "react";

const API_KEY = 'bdec1fccee55a5f07f481f55fd8dec26';
const movieContext = createContext();

function App() {
  const [category, setCategory] = useState('top_rated')

  let fetchCategory
  if(category === "trending"){
    fetchCategory = "trending/movie/week?api_key=" + API_KEY 
  }else {
    fetchCategory = "movie/" + category + "?api_key=" + API_KEY + "&language=en-US&page=1";
  }
  
  return (
    <movieContext.Provider value={setCategory}>
      <div className="App">
        <Navbar />
        <div className="movie-container">
          <Movie fetchUrl={fetchCategory} /> 
        </div> 
      </div>    
    </movieContext.Provider>
    
  );
}

export default App;

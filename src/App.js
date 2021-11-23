import { useState } from "react";
import Movie from "./components/Movie";
import requests from "./components/ApiRequest";
import Navbar from "./components/Navbar";

const API_KEY = 'bdec1fccee55a5f07f481f55fd8dec26';

function App() {
  const [category, setCategory] = useState('top_rated')
  
  return (
    <div className="App">
      <Navbar setCategory={setCategory} />
      <div className="movie-container">
        <Movie fetchUrl={"movie/" + category + "?api_key=" + API_KEY + "&language=en-US&page=1"} />
      </div> 
        
    </div>
  );
}

export default App;

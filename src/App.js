
import Movie from "./components/Movie";

function App() {
  const movies = ["Avengers", "Star Wars", "Harry Potter"]
  return (
    <div className="App">
      {movies.map((movie) => (
        <Movie />
      ))}
    </div>
  );
}

export default App;

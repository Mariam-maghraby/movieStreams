import { useState } from "react";
import { Movie } from "./types";

function App() {
  const [movies, setMovies] = useState<Movie[]>([
    { id: 1, title: "Inception", year: 2010, image: "https://via.placeholder.com/300x450" },
    { id: 2, title: "Interstellar", year: 2014, image: "https://via.placeholder.com/300x450" },
    { id: 3, title: "The Dark Knight", year: 2008, image: "https://via.placeholder.com/300x450" }
  ]);

  return (
    <div className="p-4 bg-gray-900 text-white min-h-screen flex flex-row items-center">
      <h1 className="text-4xl font-bold mb-6">Movies App</h1>
      <div className="grid grid-cols-4 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {movies.map((movie) => (
          <div key={movie.id} className="bg-gray-800 p-4 rounded-xl shadow-xl overflow-hidden w-72 flex flex-col items-center">
            <img src={movie.image} alt={movie.title} className="w-full h-96 object-cover rounded-lg mb-4" />
            <h2 className="text-xl font-bold mb-2">{movie.title}</h2>
            <p className="text-gray-400 text-sm mb-2">Year: {movie.year}</p>
            <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-full flex items-center">
              ▶ Watch Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;

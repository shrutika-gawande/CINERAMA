import { useState } from "react";
import MovieCard from "../components/MovieCard";
import MovieModal from "../components/MovieModal";
import movies from "../utils/movieData";
import "../styles/moviePage.css";

export default function MovieDetails() {
  // null = modal closed  |  movie object = modal open for that movie
  const [selectedMovie, setSelectedMovie] = useState(null);

  return (
    <>
      <div className="moviecards">
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            movie={movie}
            onOpen={setSelectedMovie}   // pass setter as onOpen prop
          />
        ))}
      </div>

      {/* Only mounts when a movie is selected */}
      {selectedMovie && (
        <MovieModal
          movie={selectedMovie}
          onClose={() => setSelectedMovie(null)}
        />
      )}
    </>
  );
}
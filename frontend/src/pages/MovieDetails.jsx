import MovieCard from "../components/MovieCard";
import movies from "../utils/movieData";

export default function MovieDetails() {
  return (
    <div className="moviecards">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
}

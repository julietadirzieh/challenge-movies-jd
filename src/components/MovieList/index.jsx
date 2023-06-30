import MovieCard from "../MovieCard";
import Pagination from "../Pagination";
import SortDropdown from "../SortDropdown";

const MovieList = ({ movies }) => {
  return (
    movies !== undefined && (
      <>
        <SortDropdown />

        <div className="md:px-12 mx-auto grid grid-cols-2 lg:grid-cols-5 xl:grid-cols-5 gap-4 xl:gap-8">
          {movies?.map((movie) => (
            <MovieCard key={movie.imdbID} movie={movie} />
          ))}
        </div>

        <Pagination />
      </>
    )
  );
};

export default MovieList;

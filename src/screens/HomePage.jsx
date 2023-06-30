import SearchBar from "../components/SearchBar";
import MovieList from "../components/MovieList";
import Loading from "../components/Loading";
import useMovies from "../hooks/useMovies";

const HomePage = () => {
  const { query, isLoading, isError, error, movies, handleSearch } =
    useMovies();

  return (
    <div className="bg-gray-500 w-full min-h-screen h-full py-12 items-center">
      <h1 className="text-white text-4xl text-center uppercase tracking-wider">
        Movie Search App
      </h1>
      <SearchBar onSearch={handleSearch} />
      {isLoading && <Loading />}
      {isError && (
        <div>
          <p className="px-12 text-white text-2xl text-center">
            Error occurred while fetching data:
          </p>
          <p className="px-12 text-red-500 text-2xl text-center">
            {error?.response?.data?.Error}
          </p>
          <p className="px-12 text-white text-2xl text-center">
            Please, try again.
          </p>
        </div>
      )}
      {movies === undefined && query !== "" && !isLoading && !isError ? (
        <p className="px-12 text-white text-2xl text-center">
          We have no records related to “{query}”. Please, try again!
        </p>
      ) : (
        <MovieList movies={movies} />
      )}
    </div>
  );
};

export default HomePage;

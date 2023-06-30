import MovieDetail from "../components/MovieDetail";
import Loading from "../components/Loading";
import useMovieById from "../hooks/useMovieById";
import Button from "../components/Button";
import useMovies from "../hooks/useMovies";

const MovieDetailPage = () => {
  const { isLoading, isError, movie, error } = useMovieById();

  const { goBack, goHome } = useMovies();
  return (
    <div className="bg-gray-500 w-full min-h-screen h-full py-12 items-center mx-auto text-center">
      <h1 className="text-white text-4xl text-center uppercase tracking-wider">
        Movie Search App
      </h1>
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
      {movie && <MovieDetail movie={movie} />}
      <div className="flex flex-row justify-between">
        <Button onClick={goBack}>←</Button>

        <Button onClick={goHome}>New Search</Button>
      </div>
    </div>
  );
};

export default MovieDetailPage;

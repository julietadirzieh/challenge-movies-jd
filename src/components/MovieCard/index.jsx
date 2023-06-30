import { Link } from "react-router-dom";
import Button from "../Button";

const MovieCard = ({ movie }) => {
  const { Title, Year, Poster } = movie;

  const srcMovie =
    Poster !== "N/A"
      ? Poster
      : "https://www.charlotteathleticclub.com/assets/camaleon_cms/image-not-found-4a963b95bf081c3ea02923dceaeb3f8085e1a654fc54840aac61a57a60903fef.png";

  return (
    <Link
      to={`/movie/${movie.imdbID}`}
      className="mx-auto flex w-52 max-w-52 flex-col md:w-60 md:max-w-60 lg:w-40 xl:w-52 xl:max-w-52 text-center rounded-xl bg-gray-200 text-gray-700 shadow-md items-center"
    >
      <img
        src={srcMovie}
        alt={Title}
        className="h-32 max-h-32 object-fit w-full rounded-xl p-2"
      />

      <h3 className="mb-2 text-lg font-semibold line-clamp-2 p-1">{Title}</h3>
      <p className="text-base font-light p-1">Release year: {Year}</p>

      <Button>Read More</Button>
    </Link>
  );
};

export default MovieCard;

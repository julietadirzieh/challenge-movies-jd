const MovieDetail = ({ movie }) => {
  const { Title, Year, Poster, Genre, Runtime, Plot } = movie;

  const srcMovie =
    Poster !== "N/A"
      ? Poster
      : "https://www.charlotteathleticclub.com/assets/camaleon_cms/image-not-found-4a963b95bf081c3ea02923dceaeb3f8085e1a654fc54840aac61a57a60903fef.png";

  return (
    <div className="mx-auto mt-6 flex flex-col lg:flex-row w-2/3 h-2/3 rounded-xl bg-gray-200 text-gray-700 shadow-md items-center">
      <img
        src={srcMovie}
        alt={Title}
        className="w-full md:w-2/3 max-h-96 lg:w-1/3 object-fit h-auto rounded-xl p-2"
      />

      <div className="flex flex-col">
        <h3 className="my-2 px-6 text-3xl font-semibold text-center md:text-left">
          {Title}
        </h3>
        <ul className="list-disc px-8 pb-4 text-left">
          {Year !== "N/A" && (
            <li className="text-lg py-1">
              <strong>Release year:</strong> {Year}
            </li>
          )}
          {Genre !== "N/A" && (
            <li className="text-lg py-1">
              <strong>Genre:</strong> {Genre}
            </li>
          )}
          {Runtime !== "N/A" && (
            <li className="text-lg py-1">
              <strong>Runtime:</strong> {Runtime}
            </li>
          )}
          {Plot !== "N/A" && (
            <li className="text-lg py-1">
              <strong>Summary:</strong> {Plot}
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default MovieDetail;

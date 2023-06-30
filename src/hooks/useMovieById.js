import { getMovieById } from "../services/api";
import { useQuery } from "react-query";
import { useParams } from "react-router";

const useMovieById = () => {
    const { id } = useParams();

    const { isLoading, isError, data: movie, error } = useQuery(
        ["movieDetails", id],
        async () => {
            const movieDetails = await getMovieById(id);
            return movieDetails;
        }
    );

    return {
        isLoading,
        isError,
        error,
        movie
    };
};

export default useMovieById;
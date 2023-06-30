import { useContext } from "react";
import { useQuery } from "react-query";
import { useNavigate } from "react-router";
import { getMovies } from "../services/api";
import { MovieContext } from "../context/MovieProvider";

const useMovies = () => {
    const navigate = useNavigate();
    const {
        query,
        setQuery,
        currentPage,
        setCurrentPage,
        totalResults,
        setTotalResults,
        sortByYear,
    } = useContext(MovieContext);

    const { isLoading, isError, data: movies, error } = useQuery(
        ["movies", query, currentPage, sortByYear],
        async () => {
            const searchResults = await getMovies(query, currentPage);
            setTotalResults(searchResults.totalResults);

            if (sortByYear === "asc") {
                return searchResults.Search.sort((a, b) => a.Year.localeCompare(b.Year));
            } else if (sortByYear === "desc") {
                return searchResults.Search.sort((a, b) => b.Year.localeCompare(a.Year));
            }

            return searchResults.Search;
        }
    );

    const handleSearch = (query) => {
        setQuery(query);
        setCurrentPage(1);
    };

    const goBack = () => {
        navigate(-1);
    };

    const goHome = () => {
        navigate("/");
        setQuery("");
    };

    return {
        query,
        isLoading,
        isError,
        error,
        movies,
        currentPage,
        totalResults,
        sortByYear,
        handleSearch,
        goBack,
        goHome
    };
};

export default useMovies;

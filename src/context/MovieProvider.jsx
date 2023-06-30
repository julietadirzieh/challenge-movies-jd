import { createContext, useState } from "react";

export const MovieContext = createContext();

export const MovieProvider = ({ children }) => {
  const [query, setQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(0);
  const [totalResults, setTotalResults] = useState(0);
  const [sortByYear, setSortByYear] = useState("");

  return (
    <MovieContext.Provider
      value={{
        query,
        setQuery,
        currentPage,
        setCurrentPage,
        totalResults,
        setTotalResults,
        sortByYear,
        setSortByYear,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};

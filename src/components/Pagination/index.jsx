import { useContext } from "react";
import Button from "../Button";
import { MovieContext } from "../../context/MovieProvider";

const Pagination = () => {
  const { currentPage, totalResults, setCurrentPage } =
    useContext(MovieContext);
  const totalPages = Math.ceil(totalResults / 10);

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className="w-1/3 mx-auto flex justify-center py-12 items-center">
      <Button disabled={currentPage === 1} onClick={handlePreviousPage}>
        Previous
      </Button>

      <h1 className="mx-2 text-xl font-bold text-white">{currentPage}</h1>

      <Button disabled={currentPage >= totalPages} onClick={handleNextPage}>
        Next
      </Button>
    </div>
  );
};

export default Pagination;

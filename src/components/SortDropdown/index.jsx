import { useContext } from "react";
import { MovieContext } from "../../context/MovieProvider";

const SortDropdown = () => {
  const { sortByYear, setSortByYear } = useContext(MovieContext);

  const handleSortChange = (event) => {
    const sortBy = event.target.value;
    setSortByYear(sortBy);
  };

  return (
    <div className="flex justify-center lg:justify-end mb-10 px-20">
      <label htmlFor="sort" className="mr-2 text-white">
        Sort by:
      </label>
      <select
        id="sort"
        className="px-2 py-1 border border-gray-400 rounded"
        onChange={handleSortChange}
        value={sortByYear}
      >
        <option value="">...</option>
        <option value="desc">Newest to Oldest</option>
        <option value="asc">Oldest to Newest</option>
      </select>
    </div>
  );
};

export default SortDropdown;

import { useContext, useState } from "react";
import Button from "../Button";
import { MovieContext } from "../../context/MovieProvider";

const SearchBar = ({ onSearch }) => {
  const { query } = useContext(MovieContext);
  const [searchValue, setSearchValue] = useState(query);

  const handleInputChange = (event) => {
    setSearchValue(event.target.value);
  };

  const handleSearch = (event) => {
    event.preventDefault();
    onSearch(searchValue);
  };

  return (
    <form
      className="flex flex-col md:flex-row items-center py-12 justify-center"
      onSubmit={handleSearch}
    >
      <input
        type="text"
        placeholder="Search movie..."
        value={searchValue}
        onChange={handleInputChange}
        className="mb-4 md:mb-0 p-4 rounded-lg bg-gray-200 border-none shadow-lg shadow-gray-800 w-2/3 lg:w-1/3"
      />
      <Button light type="submit">
        Search
      </Button>
    </form>
  );
};

export default SearchBar;

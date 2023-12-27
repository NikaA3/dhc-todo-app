import { useContext } from "react";
import SearchIcon from "../../assets/SearchIcon";
import TodoContext from "../../context/TodoContext";
import "./SearchBar.css";

const SearchBar = () => {
  const { setSearchText } = useContext(TodoContext) || {};

  const searchTodoHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText && setSearchText(e.target.value);
  };

  return (
    <div className="flex justify-center items-center search-container ">
      <input
        type="text"
        className="search-bar placeholder-text dark:bg-dark-todo dark:text-white"
        placeholder="search for notes"
        onChange={searchTodoHandler}
      />
      <div className="search-btn bg-button-background-color dark:bg-dark-icon">
        <SearchIcon />
      </div>
    </div>
  );
};

export default SearchBar;

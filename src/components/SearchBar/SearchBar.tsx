import SearchIcon from "../../assets/SearchIcon";
import "./SearchBar.css";

interface ISearchBar {
  setSearchText: React.Dispatch<React.SetStateAction<string>>;
}

const SearchBar = ({ setSearchText }: ISearchBar) => {
  const searchTodoHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };

  return (
    <div className="flex justify-center items-center search-container">
      <input
        type="text"
        className="search-bar placeholder-text"
        placeholder="search for notes"
        onChange={searchTodoHandler}
      />
      <div className="search-btn bg-button-background-color">
        <SearchIcon />
      </div>
    </div>
  );
};

export default SearchBar;

import { useContext } from "react";
import SearchContext from "../context/SearchContext";
import SearchBox from "./search-box/SearchBox";

const Header = () => {
  const [searchValue, setSearchValue] = useContext(SearchContext);
  return (
    <div className="flex flex-col ">
      <header className="flex justify-between">
        <a href="/#">Home</a>

        <SearchBox
          data-testid="search-box"
          searchValue={searchValue}
          setSearchValue={(e) => {
            setSearchValue(e.target.value);
          }}
        />
      </header>
    </div>
  );
};

export default Header;

const SearchBox = ({ searchValue, setSearchValue }) => {
  return (
    <div className="search-container">
      <input
        data-testid="search-box__input"
        className="rounded-md"
        type="text"
        placeholder="Search..."
        value={searchValue}
        onChange={setSearchValue}
      />
    </div>
  );
};

export default SearchBox;

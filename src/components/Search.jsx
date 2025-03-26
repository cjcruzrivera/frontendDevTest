function Search({ onSearch }) {
  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Buscar por marca o modelo..."
        onChange={(e) => onSearch(e.target.value)}
        className="search-input"
      />
    </div>
  );
}

export default Search;
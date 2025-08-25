import "./SearchBar.css";

export default function SearchBar({ keyword, setKeyword, onSearch }) {
  return (
    <form className="search-bar" onSubmit={onSearch}>
      <input
        type="text"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        placeholder="Enter keyword..."
      />
      <button type="submit">Search</button>
    </form>
  );
}

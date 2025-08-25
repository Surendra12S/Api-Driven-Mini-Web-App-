import React, { useState } from "react";
import axios from "axios";
import SearchBar from "./Components/SearchBar/SearchBar.jsx";
import RepoTable from "./Components/RepoTable/RepoList.jsx";
import Pager from "./Components/Pager/Pager.jsx";
import Footer from "./Components/Footer/Footer.jsx";

function App() {
  const [keyword, setKeyword] = useState("");
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [page, setPage] = useState(1);
  const [pages, setPages] = useState(1);

  const handleSearch = async (e, newPage = 1) => {
    if (e) e.preventDefault();
    if (!keyword) return;

    setLoading(true);
    setError("");

    try {
      const res = await axios.get(
        `http://localhost:5000/api/search?keyword=${keyword}&page=${newPage}`
      );

      console.log("API response:", res.data);

      if (Array.isArray(res.data.items)) {
        setRepos(res.data.items);
        setPage(res.data.page || newPage);
        setPages(res.data.totalPages || 1);
      } else {
        setRepos([]);
        setError("No repositories found.");
      }
    } catch (err) {
      console.error(err);
      setError("Something went wrong while fetching data.");
      setRepos([]);
    }

    setLoading(false);
  };

  return (
    <>
    <div style={{ padding: "20px" }}>
      
      <h2 className="MainHeading" >🔍 GitHub Repo Search</h2>
      <p className="SubHeading" >Discover and explore millions of open-source repositories.</p>

      <SearchBar keyword={keyword} setKeyword={setKeyword} onSearch={handleSearch} />

      {loading && <p className="loading" >Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      <RepoTable items={repos} />
      
      <Pager page={page} pages={pages} onPage={(newPage) => handleSearch(null, newPage)} />
    </div>
    <Footer/>
    </>
  );
}

export default App;

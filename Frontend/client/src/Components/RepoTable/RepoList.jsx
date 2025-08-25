import RepoCard from "./RepoCard.jsx";
import "./RepoList.css";

export default function RepoList({ items = [] }) {
  if (!items.length) return <p className="no-results">No results yet.</p>;

  return (
    <div className="repo-list">
      {items.map((r, idx) => (
        <RepoCard key={idx} repo={r} />
      ))}
    </div>
  );
}

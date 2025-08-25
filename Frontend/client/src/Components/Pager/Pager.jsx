import React from "react";
import "./Pager.css";

export default function Pager({ page, pages, onPage }) {
  if (pages <= 1) return null;

  return (
    <div className="pager">
      <button disabled={page === 1} onClick={() => onPage(page - 1)}>Prev</button>
      <span>Page {page} of {pages}</span>
      <button disabled={page === pages} onClick={() => onPage(page + 1)}>Next</button>
    </div>
  );
}

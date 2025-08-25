import "./RepoCard.css";
import React, { useState } from "react";
import { IoCode } from "react-icons/io5";
import { IoPersonSharp } from "react-icons/io5";

export default function RepoCard({ repo }) {

     const [expanded, setExpanded] = useState(false);
  const maxLength = 100;

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  const description = repo.description || "No description available";


  return (
    <div className="repo-card">
      <h3 className="repo-name">
        <a href={repo.url} target="_blank" rel="noreferrer">
          {repo.fullName}
        </a>
      </h3>
       <p className="repo-description">
        {expanded || description.length <= maxLength
          ? description
          : description.slice(0, maxLength) + "..."}
        {description.length > maxLength && (
          <button className="expand-btn" onClick={toggleExpanded}>
            {expanded ? "Show less" : "Read more"}
          </button>
        )}
      </p>
      <div className="repo-info">
        <div>
           <span>⭐ {repo.stars} Stars</span>
        </div>
        <div className="laguageName" >
           <IoCode className="codingIcon" /> 
           <span>{repo.language || "N/A"}</span>
          </div>
          <div className="PersonName">
              <IoPersonSharp />
               <span> {repo.owner}</span>
          </div>
      </div>
    </div>
  );
}

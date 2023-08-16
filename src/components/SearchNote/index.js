import React from "react";
import "./style.css";

function SearchNote({searchTerm, handleChange}) {
  return (
    <div className="search">
      <input type="text" placeholder="搜索笔记" value={searchTerm} onChange={handleChange}  />
    </div>
  );
}

export default SearchNote;

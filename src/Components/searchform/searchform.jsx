import React, { useState } from "react";

export function SearchForm({ onSearch }) {
  const [query, setQuery] = useState("");

  return (
    <div>
      {/* Allows the user to enter search keywords */}  
      <input type="text" placeholder="Enter keywords" value={query} onChange={(event) => setQuery(event.target.value)}/>
      {/*Once the button is clicked on it searchs the query*/}
      <button onClick={() => {
          if (query.trim()) {
            onSearch(query);
          }
        }}
      >
      </button>
    </div>
  );
}

export default SearchForm;
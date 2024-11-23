import React from "react";
import { SearchForm } from ".//Components/searchform/searchform.jsx"; 
import {DetailsPage} from "./Components/detailspage/detailspage";
import { useState } from "react";

const SERVER_URL = process.env.REACT_APP_Server_Url || "http://localhost:3000";

function App() {
  // Stores the search results
  const [articles, setArticles] = useState([]);


  return (
    <div>
      <h1>Search New York Times articles here!</h1>

      <SearchForm onSearch={async (query) => {
        const response = await fetch(`${SERVER_URL}/api/search?query=${query}`);
        const data = await response.json();
        setArticles(data.response.docs);
      }}/>

      <ul>
        {articles.map((article) => (

          <li key={article._id}>
            <a href={article.web_url} target="_blank" rel="noopener noreferrer">
              {article.headline.main}
            </a>
          </li>
        ))}
      </ul>
    </div>

  )
}

export default App;
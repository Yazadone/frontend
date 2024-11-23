import React, {useState} from "react"
function DetailsPage({id}) {
    const [article, setArticle] = useState(null);
    if (!article) {
      //Checks if the article data is used or not
        fetch(`http://localhost:3000/api/article?id=${id}`) //The API grabs the article information
          .then((response) => response.json())
          .then((data) => setArticle(data)); //Updates the article state with data
    }

    return (
        <div>
          <h2>{article ? article.headline.main : ""}</h2> 
          <p><strong>Source:</strong> {article ? article.source : ""}</p> 
          <p><strong>Published Date:</strong> {article ? new Date(article.pub_date).toDateString() : ""}</p>
          <p><strong>Abstract:</strong> {article ? article.abstract : ""}</p> 
          <p><strong>Lead Paragraph:</strong> {article ? article.lead_paragraph : ""}</p>
          <a href={article ? article.web_url : "#"} target="_blank" rel="noopener noreferrer">
            {article ? "Read Full Article" : ""}
          </a> 
        </div>
      );



}
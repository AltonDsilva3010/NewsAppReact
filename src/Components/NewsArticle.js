import React from "react";
import "./NewsArticle.css";

const NewsArticle = ({ data }) => {
  return (
    <div className="newsarticle-container">
      <h1 className="news-title">{data.title}</h1>
      <img src={data.urlToImage} className="news-image" alt={data.title} />
      <p className="news-desc">{data.description}</p>
      <p className="news-author">{data.author}</p> <br />
      <p className="news-published">{data.publishedAt}</p>
      <p className="news-source">{data.source.name}</p>
      <p className="news-url">
        <a href={data.url} target="_blank">
          Read More...
        </a>
      </p>
    </div>
  );
};

export default NewsArticle;

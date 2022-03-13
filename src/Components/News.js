import React, { useContext } from "react";
import { NewsContext } from "./NewsContext";
import NewsArticle from "./NewsArticle";
import "./News.css";

const News = () => {
  const { data } = useContext(NewsContext);

  return (
    <div className="news-container">
      {data
        ? data.articles.map((news) => (
            <NewsArticle data={news} key={news.url} />
          ))
        : "Loading..."}
    </div>
  );
};

export default News;

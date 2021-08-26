import { useParams, Link } from "react-router-dom";
import React, { useState, useEffect } from "react";

const DetailPage = ({ article, onSelect }) => {
  const { id } = useParams();
  const [newsArticle, setNewsArticle] = useState(null);
  useEffect(() => {
    onSelect(id);
  }, [onSelect, id]);

  useEffect(() => {
    setNewsArticle(article);
  }, [article]);

  if (!newsArticle)
    return (
      <div>
        Article not found Please go back to <Link to="/">Home page</Link>
      </div>
    );

  return (
    <main className="card-list">
      <div className="bg-white shadow-md article-detail flex-center">
        <div className="default-m-p">
          <img
            src={newsArticle?.image_url}
            alt="title"
            width="440"
            height="293"
          />
        </div>
        <div className="default-m-p">
          <b>{newsArticle?.title}</b>
          <div className="flex justify-between small">
            <div>{newsArticle?.author}</div>
            <div>{newsArticle?.publishedDate}</div>
          </div>
        </div>

        <div className="default-m-p">{newsArticle?.abstract}</div>
        <div>
          <Link to="/">Back</Link>
        </div>
      </div>
    </main>
  );
};

export default DetailPage;

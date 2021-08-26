import { useEffect } from "react";

import useSWR from "swr";
import NewsItem from "../components/NewsItem";
import NewsListPlaceHolder from "../components/NewsListPlaceHolder";
import fetcher from "../helpers/fetcher";

const API_URL = process.env.REACT_APP_API_URL + process.env.REACT_APP_API_KEY;
console.log("API_URL", API_URL);

const HomePage = ({ onFetchArticles, searchValue }) => {
  const { data, error } = useSWR(API_URL, fetcher);

  useEffect(() => {
    if (data) {
      onFetchArticles(data?.results);
    }
  }, [data?.results, data, onFetchArticles]);

  // If news articles fetch fails then show the message
  if (error) return <div className="text-center ">failed to load</div>;

  // placeholder list while loading articles
  if (!data)
    return (
      <main className="card-list">
        {Array.from(Array(10).keys()).map((item) => (
          <NewsListPlaceHolder key={item} />
        ))}
      </main>
    );

  return (
    <main className="card-list">
      {data.results
        .filter((item) => {
          if (!searchValue) return true;
          return item.title.toLowerCase().includes(searchValue.toLowerCase());
        })
        .map((item) => (
          <NewsItem
            key={item.id}
            id={item.id}
            newsType={item.type}
            url={item.uri}
            title={item.title}
            author={item.byline}
            publishedDate={item.published_date}
            abstract={item.abstract}
            thumbnail={item["media"][0]?.["media-metadata"][0]["url"]}
          />
        ))}
    </main>
  );
};

export default HomePage;

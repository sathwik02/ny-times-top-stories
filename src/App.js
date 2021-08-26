import { BrowserRouter, Route, Switch } from "react-router-dom";
import React, { useState, useEffect } from "react";
import SearchContext from "./context/SearchContext";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import DetailPage from "./pages/DetailPage";
import "./App.scss";

console.log(process.env.REACT_APP_API_KEY);

function App() {
  const [newsArticles, setNewsArticles] = useState();
  const [currentArticle, setCurrentArticle] = useState();
  const [selectedArticleId, setSelectedArticleId] = useState();
  const [searchValue, setSearchValue] = useState();

  // set the selected article
  useEffect(() => {
    const article = newsArticles?.find(
      (item) => Number(item.id) === Number(selectedArticleId)
    );

    setCurrentArticle({
      title: article?.title,
      image_url: article?.["media"][0]?.["media-metadata"][2]["url"],
      author: article?.byline,
      publishedDate: article?.published_date,
      description: article?.abstract,
      newsUrl: article?.uri,
    });
  }, [newsArticles, selectedArticleId]);

  return (
    <div className="App">
      <SearchContext.Provider value={[searchValue, setSearchValue]}>
        <Header />
      </SearchContext.Provider>

      <BrowserRouter>
        <Switch>
          <Route path="/article-details/:id">
            <DetailPage
              article={currentArticle}
              onSelect={(e) => setSelectedArticleId(e)}
            />
          </Route>
          <Route exact path="/">
            <HomePage
              onFetchArticles={(e) => setNewsArticles(e)}
              searchValue={searchValue}
            />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

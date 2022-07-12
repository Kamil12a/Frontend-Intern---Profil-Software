import { createArticle } from "../components/createArticle.js";
import { pageNumber } from "../main-page.js";
export function fetchArticles() {
  fetch("https://api.spaceflightnewsapi.net/v3/articles?_limit=" + pageNumber)
    .then((res) => res.json())
    .then((articles) => {
      articles.forEach((article) => {
        createArticle(article);
      });
    });
}

import { createArticle } from "../../../globalComponents/createArticle.js";
export function fetchArticles() {
  fetch("https://api.spaceflightnewsapi.net/v3/articles?_limit=15")
    .then((res) => res.json())
    .then((articles) => {
      articles.forEach((article) => {
        createArticle(article);
      });
    });
}

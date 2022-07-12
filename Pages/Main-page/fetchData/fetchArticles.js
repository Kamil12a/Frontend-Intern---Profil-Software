import { getArticles } from "../main-page.js";
import {createArticle} from "../components/createArticle.js"
export function fetchArticles() {
  fetch("https://api.spaceflightnewsapi.net/v3/articles?_limit=15")
    .then((res) => res.json())
    .then((articles) => {
      getArticles(articles);
      createArticle(articles)
    })
}


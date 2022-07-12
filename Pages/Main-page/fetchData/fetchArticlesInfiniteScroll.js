import { createArticle } from "../../../globalComponents/createArticle.js";
import { pageNumber } from "../main-page.js";
import { setAmountOfArticles } from "../main-page.js";

const inputAmountArticles = document.querySelector(".amountArticlesInput");

export function fetchArticlesInfiniteScroll() {
  let fetchAmount = pageNumber + parseInt(inputAmountArticles.value);
  fetch("https://api.spaceflightnewsapi.net/v3/articles?_limit=" + fetchAmount)
    .then((res) => res.json())
    .then((articles) => {
      articles.forEach((article, index) => {
        if (index + 1 > pageNumber) {
          createArticle(article);
        }
      });
      setAmountOfArticles(fetchAmount);
    });
}

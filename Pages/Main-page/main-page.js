import { fetchArticles } from "./fetchData/fetchArticles.js";
import { fetchAmountOfArticles } from "./fetchData/fetchAmountOfArticles.js";
import { infiniteScroll } from "./components/infiniteScroll.js";


export let pageNumber = 15;
export function amountOfArticles(value) {
  pageNumber = value;
}

window.onload = function () {
  fetchArticles();
  fetchAmountOfArticles();
};

window.addEventListener("scroll", infiniteScroll);


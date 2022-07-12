import { fetchArticles } from "./fetchData/fetchArticles.js";
import { fetchAmountOfArticles } from "./fetchData/fetchAmountOfArticles.js";
import { infiniteScroll } from "./components/infiniteScroll.js";
import { checkWhatBtnIsInLibrary } from "./components/checkWhatBtnISInLibrary.js";
export let articlesInLibrary = [];
export let pageNumber = 15;

export function setAmountOfArticles(value) {
  pageNumber = value;
}
export function setArticlesInLibrary(value) {
  articlesInLibrary = value;
}
window.onload = function () {
  fetchArticles();
  fetchAmountOfArticles();
  checkWhatBtnIsInLibrary();
};

window.addEventListener("scroll", infiniteScroll);

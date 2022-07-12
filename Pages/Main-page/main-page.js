import { fetchArticles } from "./fetchData/fetchArticles.js";
import { fetchAmountOfArticles } from "./fetchData/fetchAmountOfArticles.js";
import { infiniteScroll } from "./components/infiniteScroll.js";
import { checkWhatBtnIsInLibrary } from "./components/checkWhatBtnISInLibrary.js";
import { inputAmountArticlesHandler } from "./components/inputAmountArticles.js"
const inputAmountArticles = document.querySelector(".amountArticlesInput");
export let articlesInLibrary = [];
export let pageNumber = 15;
export function amountOfArticles(value) {
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

inputAmountArticles.addEventListener("input", inputAmountArticlesHandler);

window.addEventListener("scroll", infiniteScroll);

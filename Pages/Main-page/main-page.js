import { fetchArticles } from "./fetchData/fetchArticles.js";
import { fetchAmountOfArticles } from "./fetchData/fetchAmountOfArticles.js";
import { infiniteScroll } from "./components/infiniteScroll.js";
import { checkWhatBtnIsInLibrary } from "../../globalComponents/checkWhatBtnISInLibrary.js";
export let articlesInLibrary = [];
export let pageNumber = 15;
const btnNavigateLibrary = document.querySelector(".go-to-library-btn");
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
btnNavigateLibrary.addEventListener("click", () => {
  location.href = "../Library/index.html";
});

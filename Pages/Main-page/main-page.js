import { fetchArticles } from "./fetchData/fetchArticles.js";
import { fetchAmountOfArticles } from "./fetchData/fetchAmountOfArticles.js";
import { infiniteScroll } from "./components/infiniteScroll.js";
import { checkWhatBtnIsInLibrary } from "../global-components/btnAddToLibrary/checkIfBtnIsInLibrary.js";

const navigateLibrary = document.querySelector(".go-to-library-btn");

export let pageNumber = 15;

export function setAmountOfArticles(value) {
  pageNumber = value;
}

window.onload = function () {
  fetchArticles();
  fetchAmountOfArticles();
  checkWhatBtnIsInLibrary()
};

window.addEventListener("scroll", infiniteScroll);

navigateLibrary.addEventListener("click", () => {
  location.href = "../Library/index.html";
});

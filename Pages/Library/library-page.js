import { createArticle } from "../global-components/createArticle.js";
import { checkWhatBtnIsInLibrary } from "../global-components/btnAddToLibrary/checkIfBtnIsInLibrary.js";
import { sortByPublished } from "./components/sortByPublished.js";
import { sortByTitle } from "./components/sortByTitle.js";
const btnNavigateMain = document.querySelector(
  ".container-btn-sort-navigateMain"
);
const btnSortByTitle = document.querySelector(".container-btn-sort-byTitle");
const btnSortbyPublished = document.querySelector(
  ".container-btn-sort-byPublished"
);
export const articlesInLocalStorage = { ...localStorage };
window.onload = function () {
  checkWhatBtnIsInLibrary();
  Object.values(articlesInLocalStorage).forEach((article) => {
    createArticle(JSON.parse(article));
  });
};
btnSortByTitle.addEventListener("click", sortByTitle);
btnSortbyPublished.addEventListener("click", sortByPublished);
btnNavigateMain.addEventListener("click", () => {
  location.href = "../Main-page/index.html";
});

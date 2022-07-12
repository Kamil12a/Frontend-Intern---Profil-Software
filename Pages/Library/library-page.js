import { createArticle } from "../global-components/createArticle.js";
import { checkWhatBtnIsInLibrary } from "../global-components/btnAddToLibrary/checkIfBtnIsInLibrary.js";
import { sortByPublished } from "./components/sortByPublished.js";

const btnSortbyPublished = document.querySelector(
  ".container-btn-sort-byPublished"
);
export const items = { ...localStorage };
window.onload = function () {
  checkWhatBtnIsInLibrary();
  Object.values(items).forEach((article) => {
    createArticle(JSON.parse(article));
  });
};

btnSortbyPublished.addEventListener("click", sortByPublished);

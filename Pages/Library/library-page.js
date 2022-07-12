import { createArticle } from "../global-components/createArticle.js";
import { checkWhatBtnIsInLibrary } from "../global-components/btnAddToLibrary/checkIfBtnIsInLibrary.js";
const items = { ...localStorage };

window.onload = function () {
  checkWhatBtnIsInLibrary();
  Object.values(items).forEach((article) => {
    createArticle(JSON.parse(article));
  });
};

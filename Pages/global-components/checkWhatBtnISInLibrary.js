import { setArticlesInLibrary } from "../Pages/Main-page/main-page.js";

export let articlesInLibrary = [];
export function setArticlesInLibrary(value) {
  articlesInLibrary = value;
}

export function checkWhatBtnIsInLibrary() {
  const items = { ...localStorage };
  let allArticlesInLibrary = [];
  Object.values(items).forEach((article) => {
    allArticlesInLibrary.push(JSON.parse(article).id.toString());
  });
  setArticlesInLibrary(allArticlesInLibrary);
}

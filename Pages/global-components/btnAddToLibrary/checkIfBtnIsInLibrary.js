export let articlesInLibrary = [];
export function setArticlesInLibrary(value) {
  articlesInLibrary = value;
}
export function checkWhatBtnIsInLibrary() {
  const articlesInLocalStorage = { ...localStorage };
  let allArticlesInLibrary = [];
  Object.values(articlesInLocalStorage).forEach((article) => {
    allArticlesInLibrary.push(JSON.parse(article).id.toString());
  });
  setArticlesInLibrary(allArticlesInLibrary);
}

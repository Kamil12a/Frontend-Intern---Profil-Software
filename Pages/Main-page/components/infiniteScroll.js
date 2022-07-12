import { fetchAmountOfArticles } from "../fetchData/fetchAmountOfArticles.js";
import { uploadSingleArticle } from "../fetchData/uploadSingleArticle.js";
import { pageNumber } from "../main-page.js";
import { amountOfArticles } from "../main-page.js";

export function infiniteScroll() {
  if (
    window.scrollY + window.innerHeight >=
    document.documentElement.scrollHeight
  ) {
    amountOfArticles(pageNumber + 1);
    fetchAmountOfArticles()
    uploadSingleArticle()
  }
}

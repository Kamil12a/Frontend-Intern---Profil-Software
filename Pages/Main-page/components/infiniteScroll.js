import { fetchAmountOfArticles } from "../fetchData/fetchAmountOfArticles.js";
import { fetchArticlesInfiniteScroll } from "../fetchData/fetchArticlesInfiniteScroll.js";


export function infiniteScroll() {
  if (
    window.scrollY + window.innerHeight >=
    document.documentElement.scrollHeight
  ) {
    fetchAmountOfArticles();
    fetchArticlesInfiniteScroll()
  }
}

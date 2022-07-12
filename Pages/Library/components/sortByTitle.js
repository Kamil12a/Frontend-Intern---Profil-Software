import { createArticle } from "../../global-components/createArticle.js";
import { items } from "../library-page.js";

const container_articles = document.querySelector(".container-articles");

export const sortByTitle = () => {
  let articles = [];
  Object.values(items).forEach((article) => {
    articles.push(JSON.parse(article));
  });
  articles.sort(compare);
  deleteAllArticles();
  articles.forEach((article) => {
    createArticle(article);
  });
};

function compare(a, b) {
  if (a.title < b.title) {
    return -1;
  }
  if (a.title > b.title) {
    return 1;
  }
}

function deleteAllArticles() {
  while (container_articles.firstChild) {
    container_articles.removeChild(container_articles.firstChild);
  }
}

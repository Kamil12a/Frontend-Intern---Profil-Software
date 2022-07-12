import { createArticle } from "../../global-components/createArticle.js";
import { items } from "../library-page.js";

const container_articles = document.querySelector(".container-articles");

export const sortByPublished = () => {
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
  let firstDate = new Date(a.publishedAt);
  let secoundDate = new Date(b.publishedAt);
  let firstSecounds = firstDate.getTime() / 1000;
  let secoundSecounds = secoundDate.getTime() / 1000;
  if (firstSecounds < secoundSecounds) {
    return 1;
  }
  if (secoundSecounds < firstSecounds) {
    return -1;
  }
}

function deleteAllArticles() {
  while (container_articles.firstChild) {
    container_articles.removeChild(container_articles.firstChild);
  }
}

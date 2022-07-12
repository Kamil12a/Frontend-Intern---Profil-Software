import { fetchArticles } from "./fetchData/fetchArticles.js";

export let articles = [];
export function getArticles(value) {
  articles = value;
}
window.onload = function () {
  fetchArticles();

};

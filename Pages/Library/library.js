const containerArticles = document.querySelector(".container-articles-library");
// import { createArticle } from "./components/createArticle.js";
const items = { ...localStorage };

Object.values(items).forEach((article) => {
    // createArticle(JSON.parse(article));
});

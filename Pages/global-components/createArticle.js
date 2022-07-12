import { addToLibraryButton } from "./btnAddToLibrary/addToLibraryButton.js";
import { summarySubStr } from "./summarySubString.js";
const container_articles = document.querySelector(".container-articles");
export function createArticle(single_Article) {
  let container_articles_single_article = document.createElement("div");
  let title = document.createElement("h4");
  let newsSite = document.createElement("a");
  let publishedAt = document.createElement("p");
  let summary = document.createElement("p");

  title.innerText = single_Article.title;
  newsSite.href = single_Article.url;
  newsSite.innerHTML = "News Site: " + single_Article.newsSite;
  publishedAt.innerHTML =
    "published at: " + single_Article.publishedAt.substr(0, 10);
  container_articles_single_article.classList.add(
    "container_articles_single_article"
  );
  title.classList.add("container_articles_single_article_title");
  newsSite.classList.add("container_articles_single_article_newsSite");
  publishedAt.classList.add("container_articles_single_article_publishedAt");
  summary.classList.add("container_articles_single_article_summary");

  container_articles_single_article.appendChild(title);
  container_articles_single_article.appendChild(newsSite);
  container_articles_single_article.appendChild(publishedAt);
  container_articles_single_article.appendChild(summary);
  summarySubStr(single_Article, summary, container_articles_single_article);

  addToLibraryButton(container_articles_single_article, single_Article);
  container_articles.appendChild(container_articles_single_article);
}


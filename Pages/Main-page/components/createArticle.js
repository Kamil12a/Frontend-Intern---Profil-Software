const container_articles = document.querySelector(".container-articles");
export function createArticle(single_Article) {
  
    let container_articles_single_article = document.createElement("div");
    let title = document.createElement("h4");
    let newsSite = document.createElement("a");
    let publishedAt = document.createElement("p");
    let summary = document.createElement("p");
    let buttonAddLibrary = document.createElement("button");
    let container_articles_single_article_btn_box =
      document.createElement("div");

    title.innerText = single_Article.title;
    newsSite.href = single_Article.url;
    newsSite.innerHTML = "News Site: " + single_Article.newsSite;
    publishedAt.innerHTML = single_Article.publishedAt;
    summary.innerHTML = single_Article.summary;
    buttonAddLibrary.innerHTML = "add to library";

    container_articles_single_article.classList.add(
      "container_articles_single_article"
    );
    title.classList.add("container_articles_single_article_title");
    newsSite.classList.add("container_articles_single_article_newsSite");
    publishedAt.classList.add("container_articles_single_article_publishedAt");
    summary.classList.add("container_articles_single_article_summary");
    container_articles_single_article_btn_box.classList.add(
      "container_articles_single_article_btn_box"
    );
    buttonAddLibrary.classList.add(
      "container_articles_single_article_btn_box_addLibrary"
    );

    container_articles_single_article_btn_box.appendChild(buttonAddLibrary);

    container_articles_single_article.appendChild(title);
    container_articles_single_article.appendChild(newsSite);
    container_articles_single_article.appendChild(publishedAt);
    container_articles_single_article.appendChild(summary);
    container_articles_single_article.appendChild(
      container_articles_single_article_btn_box
    );

    container_articles.appendChild(container_articles_single_article);

}

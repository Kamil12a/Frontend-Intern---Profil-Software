export function createBtn(
    buttonAddLibrary,
    container_articles_single_article,
    single_Article
  ) {
    let container_articles_single_article_btn_box = document.createElement("div");
    container_articles_single_article_btn_box.classList.add(
      "container_articles_single_article_btn_box"
    );
    buttonAddLibrary.classList.add(
      "container_articles_single_article_btn_box_addLibrary"
    );
    container_articles_single_article_btn_box.appendChild(buttonAddLibrary);
    container_articles_single_article.appendChild(
      container_articles_single_article_btn_box
    );
    buttonAddLibrary.id = single_Article.id;
  }
  
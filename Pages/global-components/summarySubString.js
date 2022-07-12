export const summarySubStr = (
  single_Article,
  summary,
  container_articles_single_article
) => {
  if (single_Article.summary.length > 200) {
    summary.innerHTML =
      "summary: " + single_Article.summary.substr(0, 200) + "...";
    let summarybtn = document.createElement("button");
    container_articles_single_article.appendChild(summarybtn);
    summarybtn.innerHTML = "Read More";
    summarybtn.classList.add("btn-summary");
    summarybtn.addEventListener("click", () => {
      if (summarybtn.innerHTML === "Read More") {
        summary.innerHTML = "summary: " + single_Article.summary;
        summarybtn.innerHTML = "Read Less";
      } else {
        summary.innerHTML =
          "summary: " + single_Article.summary.substr(0, 200) + "...";
        summarybtn.innerHTML = "Read More";
      }
    });
  } else {
    summary.innerHTML = "summary: " + single_Article.summary;
  }
};

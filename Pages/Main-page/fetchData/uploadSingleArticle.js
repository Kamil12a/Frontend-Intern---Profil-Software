import { createArticle } from "../../../globalComponents/createArticle.js"
import { pageNumber } from "../main-page.js"
export function uploadSingleArticle() {
    fetch("https://api.spaceflightnewsapi.net/v3/articles/"+pageNumber)
      .then((res) => res.json())
      .then((article) => {
        createArticle(article)
   
      })
  }
  
  
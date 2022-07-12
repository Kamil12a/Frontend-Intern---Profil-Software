import {displayFunction} from "../components/displayAmountOfArticles.js"
export function fetchAmountOfArticles() {
    fetch("https://api.spaceflightnewsapi.net/v3/articles/count")
      .then((res) => res.json())
      .then((count) => {
        displayFunction(count)
      })
  }
  
  
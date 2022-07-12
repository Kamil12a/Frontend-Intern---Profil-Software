import { pageNumber } from "../main-page.js";
import { removeAllChildNodes } from "./removeAllChildren.js";
const containter_amount_articles = document.querySelector(
  ".container-amount_articles"
);
export function displayFunction(count) {
  removeAllChildNodes(containter_amount_articles)
  let title = document.createElement("h3");
  let amount = document.createElement("p");
  title.innerHTML = "Amount of articles:";
  amount.innerHTML = pageNumber + "/" + count;
  containter_amount_articles.appendChild(title);
  containter_amount_articles.appendChild(amount);
}

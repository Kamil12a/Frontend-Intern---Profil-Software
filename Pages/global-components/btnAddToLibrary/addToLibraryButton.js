import { createBtn } from "./createBtn.js";
import { Handle_add_To_Library } from "./handleAddToLibrary.js";
export function addToLibraryButton(
  container_articles_single_article,
  single_Article
) {
  let buttonAddLibrary = document.createElement("button");
  createBtn(
    buttonAddLibrary,
    container_articles_single_article,
    single_Article
  );
  
  buttonAddLibrary.addEventListener("click", Handle_add_To_Library);
}

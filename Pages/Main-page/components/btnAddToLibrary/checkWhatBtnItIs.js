import { articlesInLibrary } from "../../main-page.js";
export function checkWhatBtnItIs(buttonAddLibrary) {
  if (articlesInLibrary.includes(buttonAddLibrary.id)) {
    buttonAddLibrary.name = "isInLibrary";
    buttonAddLibrary.style.backgroundColor = "red";
    buttonAddLibrary.innerHTML = "delete from library";
  } else {
    buttonAddLibrary.name = "isntInLibrary";
    buttonAddLibrary.style.backgroundColor = "green";
    buttonAddLibrary.innerHTML = "Add to library";
  }
}

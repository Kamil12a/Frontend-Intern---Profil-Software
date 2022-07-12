export function Handle_add_To_Library(e) {
  if (e.target.name === "isInLibrary") {
    window.localStorage.removeItem(e.target.id);
    e.target.name = "isntInLibrary";
    e.target.innerHTML = "Add to library";
    e.target.style.backgroundColor = "green";
  } else {
    fetch("https://api.spaceflightnewsapi.net/v3/articles/" + e.target.id)
      .then((res) => res.json())
      .then((article) => {
        window.localStorage.setItem(article.id, JSON.stringify(article));
        e.target.name = "isInLibrary";
        e.target.innerHTML = "Delete from library";
        e.target.style.backgroundColor = "red";
      });
  }
}

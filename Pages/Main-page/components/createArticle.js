const container_articles = document.querySelector(".container-articles");
export function createArticle(articlesData){
    articlesData.forEach(element => {
        console.log(element)
        let p = document.createElement("p");
        p.innerText="xdxd"
        container_articles.appendChild(p)
    });
}
  
  
console.log("index script loaded");

fetch(`https://kea-alt-del.dk/t7/api/categories`)
  .then((response) => response.json())
  .then((data) => showCategory(data));

function showCategory(data) {
  console.log("mine data er ", data);

  let markup = "";
  data
    .map((element) => {
      markup += `
        <a href="produktliste.html?category=${element.category}" class=category">${element.category}</a>
        `;
    })
    .join("");
  document.querySelector(".menu").innerHTML = markup;
}

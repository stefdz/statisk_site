const productContainer = document.querySelector(".grid");
const urlParams = new URLSearchParams(window.location.search);
const myCategory = urlParams.get("category");

console.log(myCategory);

fetch(`https://kea-alt-del.dk/t7/api/products?category=${myCategory}`)
  .then((response) => response.json())
  .then((data) => showList(data));

function showList(products) {
  console.log(products);
  let markup = "";
  products
    .map((product) => {
      markup += ` <article class="liste_con">
          <img
            src="https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp"
            alt="tshirt"
          />
          <p>modelname: ${product.productdisplayname}
            <br />type:${product.articletype}
          </p>
          <p>price:${product.price}</p>
          <a class="knap" href="produkt.html?product=${product.id}">Read more</a>        </article>`;
    })
    .join("");
  productContainer.innerHTML = markup;
}

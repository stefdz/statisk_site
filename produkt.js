// Hent produkt-id fra URL'en
const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get("product");

// Find produkt-containeren i HTML
const productContainer = document.querySelector(".product-container1");

if (!productId) {
  console.error("Produkt ID mangler i URL'en!");
} else {
  fetch(`https://kea-alt-del.dk/t7/api/products/${productId}`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);

      productContainer.innerHTML = ` 
          <div class="product-image">
            <img src="https://kea-alt-del.dk/t7/images/webp/640/${productId}.webp" alt="${
        data.productdisplayname
      }" />
          </div>
          <article class="product-details">
            <h2>${data.productdisplayname || "Produkt uden navn"}</h2>
            <p>${data.description || "Ingen beskrivelse tilgængelig."}</p>
            <p><strong>MODEL:</strong> ${data.model || "N/A"}</p>
            <p><strong>FARVE:</strong> ${data.color || "N/A"}</p>
            <p><strong>INVENTORY:</strong> ${data.stock || "N/A"}</p>
            <label for="size"><strong>Størrelse:</strong></label>
            <select id="size">
              <option>S</option>
              <option>M</option>
              <option>L</option>
              <option>XL</option>
            </select>
            <button class="add-to-cart">Add to cart</button>
          </article>`;
    })
    .catch((error) => console.error("Fejl ved hentning af data:", error));
}

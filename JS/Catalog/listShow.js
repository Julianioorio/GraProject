//list ориентация
document.getElementById("list").addEventListener("click", function () {
  const productCard = document.getElementById("productCard");
  if (productCard.style.flexDirection === "column") return;

  productCard.style.flexDirection = "column";
  productCard.style.flexWrap = "nowrap";

  const existingCards = productCard.querySelectorAll("div");
  productCard.innerHTML = "";

  existingCards.forEach((card) => {
    const button = card.querySelector("button");
    const productId = button?.getAttribute("data-product-id");
    const title = card.querySelector("h3")?.textContent;
    const tons = card.querySelector("p")?.textContent;

    if (title && tons) {
      const div = document.createElement("div");
      div.style.textAlign = "center";

      const button = document.createElement("button");
      button.setAttribute("data-product-id", productId);
      button.style.textDecoration = "none";
      button.style.color = "black";

      const titleEl = document.createElement("h3");
      titleEl.textContent = title;
      titleEl.style.textAlign = "center";
      button.appendChild(titleEl);

      const tonsEl = document.createElement("p");
      tonsEl.textContent = tons;

      div.appendChild(button);
      div.appendChild(tonsEl);
      productCard.appendChild(div);
    }
  });
});

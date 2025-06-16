import { ProductCard } from "../Header/productCard";
document.getElementById("Group").addEventListener("click", function () {
  const productCard = document.getElementById("productCard");
  const pList = productCard.querySelectorAll("p");
  if (productCard.style.flexDirection === "row") return;
  productCard.style.flexDirection = "row";
  productCard.style.flexWrap = "wrap";
  productCard.innerHTML = "";
  pList.forEach((el) => {
    const match = el.innerHTML.match(/\d+/);
    if (match) {
      const button = el.parentElement.querySelector("button");
      const productId = button?.getAttribute("data-product-id");

      const cardData = {
        title: "Гусеничный кран Liebherr LR 1750",
        image: "img/Gkran.jpg",
        tons: match[0],
        id: productId,
      };
      const card = new ProductCard(cardData);
      const cardElement = card.render();
      if (productId) {
        cardElement.setAttribute("data-product-id", productId);
      }
      productCard.appendChild(cardElement);
    }
  });
});

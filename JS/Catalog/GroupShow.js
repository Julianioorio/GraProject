import { ProductCard } from "../Header/productCard";
document.getElementById("Group").addEventListener("click", function () {
  const productCard = document.getElementById("productCard");
  const pList = productCard.querySelectorAll("p");
  if (productCard.style.flexDirection === "row") return;
  productCard.style.flexDirection = "row";
  productCard.innerHTML = "";
  pList.forEach((el) => {
    const match = el.innerHTML.match(/\d+/);
    if (match) {
      const cardData = {
        title: "Гусеничный кран Liebherr LR 1750",
        image: "img/Gkran.jpg",
        tons: match[0],
      };
      const card = new ProductCard(cardData);
      productCard.appendChild(card.render());
    }
  });
});

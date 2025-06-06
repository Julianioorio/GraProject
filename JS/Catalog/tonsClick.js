import { ProductCard } from "../Header/productCard";
import "../Header/productCard";
function searchByTons(tons) {
  fetch(`http://localhost:4000/products?tons=${tons}`)
    .then((res) => res.json())
    .then((data) => {
      console.log("Результаты поиска по тоннам:", data);
      const resCard = document.getElementById("productCard");
      resCard.innerHTML = "";
      data.forEach((element) => {
        const card = new ProductCard(element);
        resCard.appendChild(card.render());
      });
    })
    .catch((err) => console.error("Ошибка поиска:", err));
}

export { searchByTons };

document.querySelector(".tonsBtn").addEventListener("click", function (event) {
  if (event.target.tagName === "BUTTON") {
    let texst = event.target.innerHTML.match(/[\d,.]+/);
    searchByTons(texst[0]);
  }
});

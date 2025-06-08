import { ProductCard } from "../Header/productCard";
import "../Header/productCard";

function displayProducts(products, container) {
  container.innerHTML = "";

  if (products.length === 0) {
    container.innerHTML = "<p>Товары с такой грузоподъемностью не найдены</p>";
    return;
  }

  products.forEach((product) => {
    const card = new ProductCard(product);
    container.appendChild(card.render());
  });
}

function updateColumnView(text) {
  const pList = document.querySelectorAll("#productCard p");
  pList.forEach((el) => {
    el.textContent = `Грузоподъемность: ${text}`;
  });
}

function searchByTons(tons) {
  fetch(`http://localhost:4000/products?tons=${tons}`)
    .then((res) => res.json())
    .then((data) => {
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
    if (document.getElementById("productCard").style.flexDirection === "column") {
      const pList = document.querySelectorAll("#productCard p");
      pList.forEach((el) => {
        el.textContent = `Грузоподъемность: ${event.target.innerHTML}`;
      });
      return;
    }
    document.getElementById("productCard").style.flexDirection = "row";
    searchByTons(texst[0]);
  }
});

document.querySelector(".CaterpillarCranes").addEventListener("click", (event) => {
  if (event.target.tagName !== "BUTTON") return;

  const match = event.target.innerHTML.match(/\((\d+)\s*т\.?\)/);
  if (!match) return;

  const tons = parseInt(match[1]);
  const productCard = document.getElementById("productCard");

  if (productCard.style.flexDirection === "column") {
    const pList = document.querySelectorAll("#productCard p");
    pList.forEach((el) => {
      el.textContent = `Грузоподъемность: ${match[0]}`;
    });
    return;
  }

  productCard.style.flexDirection = "row";
  searchByTons(tons);
});

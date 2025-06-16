import { ProductCard } from "../Header/productCard";
import "../Header/productCard";

function searchByTons(tons) {
  fetch(`http://localhost:4000/products?tons=${tons}`)
    .then((res) => res.json())
    .then((data) => {
      const resCard = document.getElementById("productCard");
      const currentOrientation = resCard.style.flexDirection;
      resCard.innerHTML = "";

      if (currentOrientation === "column") {
        data.forEach((element) => {
          const div = document.createElement("div");
          div.style.textAlign = "center";

          const button = document.createElement("button");
          button.setAttribute("data-product-id", element.id);
          button.style.textDecoration = "none";
          button.style.color = "black";

          const title = document.createElement("h3");
          title.textContent = element.title;
          title.style.textAlign = "center";
          button.appendChild(title);

          const tons = document.createElement("p");
          tons.textContent = `Грузоподъемность: ${element.tons}`;

          div.appendChild(button);
          div.appendChild(tons);
          resCard.appendChild(div);
        });
      } else {
        data.forEach((element) => {
          const card = new ProductCard(element);
          resCard.appendChild(card.render());
        });
      }
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

document.querySelector(".CaterpillarCranes").addEventListener("click", (event) => {
  if (event.target.tagName !== "BUTTON") return;

  const match = event.target.innerHTML.match(/\((\d+)\s*т\.?\)/);
  if (!match) return;

  const tons = parseInt(match[1]);
  searchByTons(tons);
});

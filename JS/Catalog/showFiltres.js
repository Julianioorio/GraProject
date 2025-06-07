import { ProductCard } from "../Header/productCard";

document.querySelector(".show").addEventListener("click", function () {
  if (document.querySelectorAll(".btnParameters input[type=checkbox]")[1].checked === false) return;
  const fromTons = document.getElementById("price-from").value.slice(3);
  const toTons = document.getElementById("price-to").value.slice(3);
  const select = document.getElementById("select");

  fetch(`http://localhost:4000/products?tons_gte=${fromTons}&tons_lte=${toTons}`)
    .then((res) => res.json())
    .then((data) => {
      const resCard = document.getElementById("productCard");
      resCard.innerHTML = "";

      if (select.value === "Тяжёлые") {
        data.sort((a, b) => parseFloat(b.tons) - parseFloat(a.tons));
      } else if (select.value === "Лёгкие") {
        data.sort((a, b) => parseFloat(a.tons) - parseFloat(b.tons));
      }

      data.forEach((element) => {
        const card = new ProductCard(element);
        resCard.appendChild(card.render());
      });
    })
    .catch((err) => console.error("Ошибка поиска:", err));
});

import { ProductCard } from "../Header/productCard";

document.querySelector(".show").addEventListener("click", function () {
  const fromTons = document.getElementById("price-from").value.slice(3);
  const toTons = document.getElementById("price-to").value.slice(3);
  const select = document.getElementById("select");
  const productCard = document.getElementById("productCard");
  const currentOrientation = productCard.style.flexDirection;

  if (isNaN(fromTons) || isNaN(toTons)) return;

  fetch(`http://localhost:4000/products`)
    .then((res) => res.json())
    .then((data) => {
      productCard.innerHTML = "";

      const filteredData = data.filter((item) => {
        const tons = parseFloat(item.tons);
        return tons >= parseFloat(fromTons) && tons <= parseFloat(toTons);
      });

      if (select.value === "Тяжёлые") {
        filteredData.sort((a, b) => parseFloat(b.tons) - parseFloat(a.tons));
      } else if (select.value === "Лёгкие") {
        filteredData.sort((a, b) => parseFloat(a.tons) - parseFloat(b.tons));
      }

      if (currentOrientation === "column") {
        filteredData.forEach((element) => {
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
          tons.textContent = `${element.tons} тонн`;

          div.appendChild(button);
          div.appendChild(tons);
          productCard.appendChild(div);
        });
      } else {
        filteredData.forEach((element) => {
          productCard.appendChild(new ProductCard(element).render());
        });
      }
    })
    .catch((err) => console.error("Ошибка поиска:", err));

  if (document.querySelector(".container").style.width === "300px") {
    document.querySelector(".filParameters").classList.remove("openFil");
  }
});

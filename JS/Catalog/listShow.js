//list ориентация 
document.getElementById("list").addEventListener("click", function () {
  const productCard = document.getElementById("productCard");
  if (productCard.style.flexDirection === "column") return;

  productCard.style.flexDirection = "column";
  const tons = document.querySelectorAll(".product-card div:last-child p:first-child");

  productCard.innerHTML = "";

  tons.forEach((ton) => {
    const div = document.createElement("div");
    div.style.textAlign = "center";

    const aLink = document.createElement("a");
    aLink.href = "#";
    aLink.style.textDecoration = "none";
    aLink.style.color = "black";

    const title = document.createElement("h3");
    title.textContent = "Гусеничный кран Liebherr LR 1750";
    title.style.textAlign = "center";
    aLink.appendChild(title);

    div.appendChild(aLink);
    div.appendChild(ton);
    productCard.appendChild(div);
  });
});

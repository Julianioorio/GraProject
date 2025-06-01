const imgPoint = document.querySelector(".btnPark");
imgPoint.addEventListener("click", function (event) {
  if (event.target.tagName === "IMG") {
    event.target.src = event.target.src.includes("plus.svg") ? "img/mines.svg" : "img/plus.svg";
    event.target.closest("div").nextElementSibling.classList.toggle("open");
  }
});

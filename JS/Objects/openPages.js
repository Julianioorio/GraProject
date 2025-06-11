const objectsContainer = document.querySelector(".ShowObjects .Objects");

objectsContainer.addEventListener("click", (event) => {
  const card = event.target.closest(".Objects > div");
  if (card) {
    localStorage.setItem("objectTitle", card.querySelector("p:first-child").textContent);
    localStorage.setItem("objectLocation", card.querySelector("p:last-child").textContent);
    localStorage.setItem("objectImage", card.querySelector("img").src);
    window.location.href = "ObjectPages.html";
  }
});

document.querySelectorAll(".ShowObjects .Objects > div").forEach((card) => (card.style.cursor = "pointer"));

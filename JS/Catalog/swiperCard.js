let currentPageIndex = 1;

function updatePagination() {
  const productCard = document.getElementById("productCard");
  const listCards = document.querySelector(".listCards");
  const swipFilter = document.querySelector(".swipFilter");
  const prevButton = document.querySelector(".prev");
  const nextButton = document.querySelector(".next");

  listCards.innerHTML = "";
  const cardLen = productCard.children.length;
  const pages = cardLen === 0 ? 1 : Math.ceil(cardLen / 6);

  function showPage(pageNumber) {
    currentPageIndex = pageNumber;
    const startIndex = (pageNumber - 1) * 6;
    const startCard = productCard.children[startIndex];
    if (startCard) {
      startCard.scrollIntoView({ behavior: "smooth", block: "start" });
    }

    // Обновляем активную кнопку
    listCards.querySelectorAll("div").forEach((el, index) => {
      el.classList.toggle("Active", index === pageNumber - 1);
    });
  }

  for (let i = 1; i <= pages; i++) {
    const div = document.createElement("div");
    div.textContent = i;
    if (i === currentPageIndex) div.classList.add("Active");
    div.addEventListener("click", () => {
      showPage(i);
    });
    listCards.appendChild(div);
  }

  showPage(currentPageIndex); // сохранить текущую страницу
}

function setupNavigation() {
  const prevButton = document.querySelector(".prev");
  const nextButton = document.querySelector(".next");
  const listCards = document.querySelector(".listCards");

  if (prevButton) {
    prevButton.addEventListener("click", () => {
      if (currentPageIndex > 1) {
        updatePagination();
        showPage(currentPageIndex - 1);
      }
    });
  }

  if (nextButton) {
    nextButton.addEventListener("click", () => {
      const productCard = document.getElementById("productCard");
      const totalPages = Math.ceil(productCard.children.length / 6);
      if (currentPageIndex < totalPages) {
        updatePagination();
        showPage(currentPageIndex + 1);
      }
    });
  }
}

function showPage(pageNumber) {
  currentPageIndex = pageNumber;
  const productCard = document.getElementById("productCard");
  const listCards = document.querySelector(".listCards");
  const startIndex = (pageNumber - 1) * 6;
  const startCard = productCard.children[startIndex];
  if (startCard) {
    startCard.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  // Обновить активную кнопку
  listCards.querySelectorAll("div").forEach((el, index) => {
    el.classList.toggle("Active", index === pageNumber - 1);
  });
}


const observer = new MutationObserver(updatePagination);
const productCard = document.getElementById("productCard");

if (productCard) {
  observer.observe(productCard, {
    childList: true,
    subtree: true,
  });
  updatePagination();
  setupNavigation();
}

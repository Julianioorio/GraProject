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
    const startIndex = (pageNumber - 1) * 6;
    const startCard = productCard.children[startIndex];
    if (startCard) {
      startCard.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }

  for (let i = 1; i <= pages; i++) {
    const div = document.createElement("div");
    div.textContent = i;
    if (i === 1) div.classList.add("Active");
    div.addEventListener("click", () => {
      listCards.querySelectorAll("div").forEach((el) => el.classList.remove("Active"));
      div.classList.add("Active");
      showPage(i);
    });
    listCards.appendChild(div);
  }

  if (prevButton) {
    prevButton.addEventListener("click", () => {
      const activePage = listCards.querySelector(".Active");
      if (activePage) {
        const currentPage = parseInt(activePage.textContent);
        if (currentPage > 1) {
          activePage.classList.remove("Active");
          const prevPage = listCards.children[currentPage - 2];
          if (prevPage) {
            prevPage.classList.add("Active");
            showPage(currentPage - 1);
          }
        }
      }
    });
  }

  if (nextButton) {
    nextButton.addEventListener("click", () => {
      const activePage = listCards.querySelector(".Active");
      if (activePage) {
        const currentPage = parseInt(activePage.textContent);
        if (currentPage < pages) {
          activePage.classList.remove("Active");
          const nextPage = listCards.children[currentPage];
          if (nextPage) {
            nextPage.classList.add("Active");
            showPage(currentPage + 1);
          }
        }
      }
    });
  }

  showPage(1);
}

const observer = new MutationObserver(updatePagination);
const productCard = document.getElementById("productCard");

if (productCard) {
  observer.observe(productCard, {
    childList: true,
    subtree: true,
  });
  updatePagination();
}

// Функция бургера в Headere
export function headerBurger() {
  try {
    const burger = document.getElementById("burger");
    if (!burger) {
      throw new Error("Элемент burger не найден");
    }

    const ul = burger.nextElementSibling;
    if (!ul) {
      throw new Error("Навигационное меню не найдено");
    }

    burger.addEventListener("click", function () {
      ul.classList.toggle("nav-active");
      burger.classList.toggle("burger-active");
    });
  } catch (error) {
    console.error("Ошибка в работе бургер-меню:", error.message);
  }
}

const searchItems = [
  { name: "Гусеничный кран Liebherr LR 1750", link: "#" },
  { name: "Гусеничный кран Liebherr LR 1760", link: "#" },
  { name: "Гусеничный кран Liebherr LR 1770", link: "#" },
];

// Функция поиска в Headere
export function headerSearch() {
  try {
    const search = document.getElementById("search");
    const searchResultsContainer = document.getElementById("search-results");

    if (!search || !searchResultsContainer) {
      throw new Error("Элементы поиска не найдены");
    }

    search.addEventListener("input", function () {
      const searchQuery = this.value.toLowerCase().trim();
      searchResultsContainer.innerHTML = "";

      if (searchQuery === "") {
        searchResultsContainer.style.display = "none";
        return;
      }

      const matchedItems = searchItems.filter((item) => item.name.toLowerCase().includes(searchQuery));

      if (matchedItems.length > 0) {
        matchedItems.forEach((item) => {
          const resultItem = document.createElement("a");
          resultItem.href = item.link;
          resultItem.classList.add("search-result-item");
          resultItem.textContent = item.name;

          resultItem.addEventListener("click", function (e) {
            search.value = "";
            searchResultsContainer.style.display = "none";
          });

          searchResultsContainer.appendChild(resultItem);
        });
        searchResultsContainer.style.display = "block";
      } else {
        const noResults = document.createElement("div");
        noResults.textContent = "Ничего не найдено";
        searchResultsContainer.appendChild(noResults);
        searchResultsContainer.style.display = "block";
      }
    });

    document.addEventListener("click", function (e) {
      if (!search.contains(e.target) && !searchResultsContainer.contains(e.target)) {
        searchResultsContainer.style.display = "none";
      }
    });
  } catch (error) {
    console.error("Ошибка в работе поиска:", error.message);
  }
}

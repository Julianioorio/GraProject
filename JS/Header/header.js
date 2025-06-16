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

// Функция поиска в Headere
export function headerSearch() {
  try {
    const search = document.getElementById("search");
    const searchResultsContainer = document.getElementById("search-results");

    if (!search || !searchResultsContainer) {
      throw new Error("Элементы поиска не найдены");
    }

    search.addEventListener("input", async function () {
      const searchQuery = this.value.toLowerCase().trim();
      searchResultsContainer.innerHTML = "";

      if (searchQuery === "") {
        searchResultsContainer.style.display = "none";
        return;
      }

      try {
        const response = await fetch(`http://localhost:4000/products?q=${searchQuery}`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();

        if (data.length > 0) {
          data.forEach((item) => {
            const resultItem = document.createElement("button");
            resultItem.setAttribute("data-product-id", item.id);
            resultItem.classList.add("search-result-item");
            resultItem.textContent = `${item.title} (${item.tons} тонн)`;

            resultItem.addEventListener("click", function (e) {
              window.location.href = `ProductCard.html?${item.id}`;
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
      } catch (error) {
        console.error("Ошибка при поиске:", error);
        const errorMessage = document.createElement("div");
        errorMessage.textContent = "Ошибка при поиске";
        searchResultsContainer.appendChild(errorMessage);
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

document.addEventListener("DOMContentLoaded", function () {
  // Находим контейнер с карточками
  const blogContainer = document.querySelector(".Blog");

  // Добавляем один обработчик на контейнер
  blogContainer.addEventListener("click", function (event) {
    // Проверяем, была ли нажата кнопка "Подробнее"
    if (event.target.tagName === "BUTTON" && !event.target.classList.contains("Download")) {
      // Получаем заголовок статьи из карточки
      const articleTitle = event.target.closest("div").querySelector("h3").textContent;
      // Перенаправляем на страницу BlogPages.html с заголовком в URL
      window.location.href = `BlogPages.html?title=${encodeURIComponent(articleTitle)}`;
    }
  });
});

// Функция бургера в Headere
function headerBurger() {
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
export { headerBurger };

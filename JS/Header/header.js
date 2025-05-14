// Функция бургера в Headere
function headerBurger() {
  const burger = document.getElementById("burger");
  const ul = burger.nextElementSibling;

  burger.addEventListener("click", function () {
    ul.style.display = ul.style.display === 'block' ? 'none' : 'block';
  });
}
// Функция поиска в Headere
export { headerBurger };

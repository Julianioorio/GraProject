document.addEventListener("DOMContentLoaded", function () {
  const mainImg = document.querySelector(".mainImg img");
  const secImgContainer = document.querySelector(".secImg");

  if (secImgContainer) {
    secImgContainer.addEventListener("click", function (event) {
      const clickedImg = event.target.closest("img");

      if (clickedImg) {
        // Сохраняем текущее изображение из mainImg
        const mainImgSrc = mainImg.src;

        // Меняем изображения местами
        mainImg.src = clickedImg.src;
        clickedImg.src = mainImgSrc;
      }
    });
  }
});

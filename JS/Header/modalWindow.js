document.addEventListener("DOMContentLoaded", function () {
  // Находим все формы с кнопкой connectionBtn
  const forms = document.querySelectorAll("form");

  forms.forEach((form) => {
    const submitButton = form.querySelector(".connectionBtn");
    if (submitButton) {
      form.addEventListener("submit", function (e) {
        e.preventDefault(); // Предотвращаем стандартную отправку формы

        // Показываем модальное окно
        const modal = document.querySelector(".modal");
        if (modal) {
          modal.style.display = "block";
        }

        // Получаем данные формы
        const formData = new FormData(form);

        // Отправляем данные на сервер
        fetch(form.action, {
          method: form.method,
          body: formData,
        })
          .then((response) => {
            if (!response.ok) {
              throw new Error("Ошибка при отправке формы");
            }
          })
          .catch((error) => {
            console.error("Ошибка при отправке формы:", error);
          });
      });
    }
  });

  // Обработчики закрытия модального окна
  const closeButtons = document.querySelectorAll(".close, #closeModal");
  closeButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const modal = document.querySelector(".modal");
      if (modal) {
        modal.style.display = "none";
      }
    });
  });

  // Закрытие модального окна при клике вне его области
  window.addEventListener("click", function (e) {
    const modal = document.querySelector(".modal");
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });
});

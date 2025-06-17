document.addEventListener("DOMContentLoaded", function () {
  const forms = document.querySelectorAll("form");

  forms.forEach((form) => {
    const submitButton = form.querySelector(".connectionBtn");
    if (submitButton) {
      form.addEventListener("submit", function (e) {
        e.preventDefault();

        const modal = document.querySelector(".modal");
        if (modal) {
          modal.style.display = "block";
        }

        const formData = new FormData(form);
        const data = {};
        formData.forEach((value, key) => {
          data[key] = value;
        });

        fetch("http://localhost:4000/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        })
          .then((response) => {
            if (!response.ok) {
              return response.json().then((err) => {
                throw new Error(err.details || err.error || "Ошибка при отправке формы");
              });
            }
            return response.json();
          })
          .then((data) => {
            // Показываем сообщение об успехе
            const successMessage = document.createElement("div");
            successMessage.className = "success-message";
            successMessage.textContent = "Форма успешно отправлена!";
            modal.appendChild(successMessage);

            // Очищаем форму
            form.reset();
            // Не закрываем модальное окно автоматически
          })
          .catch((error) => {
            // Показываем сообщение об ошибке
            const errorMessage = document.createElement("div");
            errorMessage.className = "error-message";
            errorMessage.textContent = "Произошла ошибка при отправке формы";
            modal.appendChild(errorMessage);
          });
      });
    }
  });

  // Обработчик для кнопки закрытия
  const closeButtons = document.querySelectorAll(".close, #closeModal");
  closeButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const modal = document.querySelector(".modal");
      if (modal) {
        modal.style.display = "none";
        // Удаляем все сообщения при закрытии
        const messages = modal.querySelectorAll(".success-message, .error-message");
        messages.forEach((message) => message.remove());
      }
    });
  });
});

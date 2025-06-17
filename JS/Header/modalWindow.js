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
            if (modal) {
              modal.style.display = "none";
            }
            
            form.reset();
          })
          .catch((error) => {
            console.error("Ошибка при отправке формы:", error);
          });
      });
    }
  });

  const closeButtons = document.querySelectorAll(".close, #closeModal");
  closeButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const modal = document.querySelector(".modal");
      if (modal) {
        modal.style.display = "none";
      }
    });
  });

  window.addEventListener("click", function (e) {
    const modal = document.querySelector(".modal");
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });
});

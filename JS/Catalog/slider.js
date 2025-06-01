import noUiSlider from "nouislider";
import "nouislider/dist/nouislider.css";

export function initializeSlider() {
  console.log("initializeSlider function called");

  // Ползунок для Грузоподъемности
  const weightSlider = document.getElementById("weight-slider");
  const weightInputFrom = document.getElementById("price-from");
  const weightInputTo = document.getElementById("price-to");

  if (weightSlider && weightInputFrom && weightInputTo) {
    console.log("Weight slider elements found");
    noUiSlider.create(weightSlider, {
      start: [40, 750], // Начальные значения для двух ползунков
      connect: true, // Соединить ползунки полосой
      range: {
        min: 40,
        max: 750,
      },
      // Добавьте сюда настройки внешнего вида noUiSlider
    });

    weightSlider.noUiSlider.on("update", (values, handle) => {
      const value = values[handle];
      if (handle === 0) {
        weightInputFrom.value = "от " + Math.round(value);
      } else {
        weightInputTo.value = "до " + Math.round(value);
      }
    });

    weightInputFrom.addEventListener("change", () => {
      const value = parseInt(weightInputFrom.value.replace("от ", ""));
      if (!isNaN(value)) {
        weightSlider.noUiSlider.set([value, null]);
      }
    });

    weightInputTo.addEventListener("change", () => {
      const value = parseInt(weightInputTo.value.replace("до ", ""));
      if (!isNaN(value)) {
        weightSlider.noUiSlider.set([null, value]);
      }
    });
  }

  // Первый ползунок для Высоты подъема
  const heightSlider = document.getElementById("height-slider");
  const heightInputFrom = document.getElementById("height-from");
  const heightInputTo = document.getElementById("height-to");

  if (heightSlider && heightInputFrom && heightInputTo) {
    console.log("Height slider elements found");
    noUiSlider.create(heightSlider, {
      start: [10, 84], // Начальные значения для двух ползунков
      connect: true, // Соединить ползунки полосой
      range: {
        min: 10,
        max: 84,
      },
      // Добавьте сюда настройки внешнего вида noUiSlider
    });

    heightSlider.noUiSlider.on("update", (values, handle) => {
      const value = values[handle];
      if (handle === 0) {
        heightInputFrom.value = "от " + Math.round(value);
      } else {
        heightInputTo.value = "до " + Math.round(value);
      }
    });

    heightInputFrom.addEventListener("change", () => {
      const value = parseInt(heightInputFrom.value.replace("от ", ""));
      if (!isNaN(value)) {
        heightSlider.noUiSlider.set([value, null]);
      }
    });

    heightInputTo.addEventListener("change", () => {
      const value = parseInt(heightInputTo.value.replace("до ", ""));
      if (!isNaN(value)) {
        heightSlider.noUiSlider.set([null, value]);
      }
    });
  }

  // Второй ползунок для Высоты подъема
  const heightSlider2 = document.getElementById("height-slider-2");
  const heightInputFrom2 = document.getElementById("height-from-2");
  const heightInputTo2 = document.getElementById("height-to-2");

  if (heightSlider2 && heightInputFrom2 && heightInputTo2) {
    console.log("Height slider 2 elements found");
    noUiSlider.create(heightSlider2, {
      start: [50, 169], // Начальные значения для двух ползунков
      connect: true, // Соединить ползунки полосой
      range: {
        min: 50,
        max: 169,
      },
      // Добавьте сюда настройки внешнего вида noUiSlider
    });

    heightSlider2.noUiSlider.on("update", (values, handle) => {
      const value = values[handle];
      if (handle === 0) {
        heightInputFrom2.value = "от " + Math.round(value);
      } else {
        heightInputTo2.value = "до " + Math.round(value);
      }
    });

    heightInputFrom2.addEventListener("change", () => {
      const value = parseInt(heightInputFrom2.value.replace("от ", ""));
      if (!isNaN(value)) {
        heightSlider2.noUiSlider.set([value, null]);
      }
    });

    heightInputTo2.addEventListener("change", () => {
      const value = parseInt(heightInputTo2.value.replace("до ", ""));
      if (!isNaN(value)) {
        heightSlider2.noUiSlider.set([null, value]);
      }
    });
  }
}

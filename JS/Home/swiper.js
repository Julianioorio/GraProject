import Swiper from "swiper";
import { Navigation, Pagination, Scrollbar } from "swiper/modules";
// Импортируем стили Swiper
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

// Инициализация Swiper
const swiper = new Swiper(".swiper", {
  modules: [Navigation, Pagination, Scrollbar],
  // Настройки слайдера
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,

  // Пагинация
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  scrollbar: {
    el: ".swiper-scrollbar",
    draggable: true,
  },

  // Навигационные кнопки
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
const swiper2 = new Swiper(".swiper2", {
  modules: [Navigation, Pagination, Scrollbar],
  // Настройки слайдера
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  spaceBetween: 20, // отступ между слайдами
  freeMode: true,
  // Пагинация
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  scrollbar: {
    el: ".swiper-scrollbar",
    draggable: true,
  },
  breakpoints: {
    320: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    740: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
    1250: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
    1570: {
      slidesPerView: 6,
      spaceBetween: 30,
    },
  },
  // Навигационные кнопки
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
const swiper3 = new Swiper(".swiper3", {
  modules: [Navigation, Pagination, Scrollbar],
  // Настройки слайдера
  slidesPerView: 1,
  spaceBetween: 30,
  loop: false,

  // Пагинация
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  // Скролбар
  scrollbar: {
    el: ".swiper-scrollbar",
    draggable: true,
    hide: false,
  },

  // Навигационные кнопки
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
    disabledClass: "swiper-button-disabled",
  },

  breakpoints: {
    320: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    740: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    1250: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    1570: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
});

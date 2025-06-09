import Swiper from "swiper";
import { Navigation, Pagination, Scrollbar } from "swiper/modules";
// Импортируем стили Swiper
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

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
  },

  breakpoints: {
    300: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    740: {
      slidesPerView: 2,
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

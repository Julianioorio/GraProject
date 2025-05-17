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
    el: '.swiper-scrollbar',
    draggable: true,
  },

  // Навигационные кнопки
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

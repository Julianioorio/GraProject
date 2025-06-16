import "../../SCSS/Catalog/Catalog.scss";
import { initializeSlider } from "./slider.js";
import "./parkPoint.js";
import "./parPark.js";
import { headerBurger, headerSearch } from "../Header/header.js";
import "./tonsClick.js";
import "./clickClear.js";
import "./listShow.js";
import "./GroupShow.js";
import "./showFiltres.js";
import "./swiperCard.js";
import "../Header/productCard.js";
import '../Header/rentButton.js';
import '../Header/modalWindow.js';

headerBurger();
headerSearch();

document.addEventListener("DOMContentLoaded", () => {
  initializeSlider();
});

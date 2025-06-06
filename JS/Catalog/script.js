import "../../SCSS/Catalog/Catalog.scss";
import { initializeSlider } from "./slider.js";
import "./parkPoint.js";
import "./parPark.js";
import { headerBurger, headerSearch } from "../Header/header.js";
import './tonsClick.js';
import './clickClear.js';
import '../Header/productCard.js';

headerBurger();
headerSearch();

document.addEventListener("DOMContentLoaded", () => {
  initializeSlider();
});

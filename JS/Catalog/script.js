import "../../SCSS/Catalog/Catalog.scss";
import { initializeSlider } from "./slider.js";
import "./parkPoint.js";
import "./parPark.js";
import { headerBurger, headerSearch } from "../Header/header.js";

// document.getElementById("ggg").addEventListener("click", async function () {
//   document.getElementById("ggg").style.width = "300px";
//   document.getElementById("ggg").style.height = "300px";
//   document.getElementById("ggg").style.backgroundColor = "red";

//   const response = await fetch("http://localhost:8000/vehicles?tonStart=40&tonEnd=40");

//   if (response.ok) {
//     const data = await response.json();
//     console.log(data);
//   }
// });
headerBurger();
headerSearch();

document.addEventListener("DOMContentLoaded", () => {
  initializeSlider();
});

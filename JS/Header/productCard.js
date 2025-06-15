export class ProductCard {
  constructor({ title, image, tons, id }) {
    this.title = title;
    this.image = image;
    this.tons = tons;
    this.id = id;
  }
  render() {
    const card = document.createElement("div");
    card.className = "product-card";

    card.innerHTML = `<img src="${this.image}" alt="${this.title}" /> 
      <div><h3>${this.title}</h3></div>
      <div>
      <p>Грузоподъемность: ${this.tons} тонн</p>
      <p>Длина стрелы: 35 м</p> 
      <p>Все характеристики&nbsp&nbsp&nbsp&nbsp<a href="#"><img src="img/arrowIntr.svg" alt="" /></a></p>
      <button data-product-id="${this.id}">Арендовать</button>
      </div>`;
    return card;
  }
}

const productData = {
  title: "Гусеничный кран Liebherr LR 1750",
  image: "img/Gkran.jpg",
  tons: "40",
  id: 1, // Пример id с сервера
};

const swiperWrapper = document.querySelector(".swiper3 .swiper-wrapper");
if (swiperWrapper) {
  swiperWrapper.innerHTML = "";
  for (let i = 0; i < 6; i++) {
    const slide = document.createElement("div");
    slide.className = "swiper-slide";
    const card = new ProductCard(productData);
    slide.appendChild(card.render());
    swiperWrapper.appendChild(slide);
  }
}

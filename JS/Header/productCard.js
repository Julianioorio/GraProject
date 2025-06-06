
export class ProductCard {
  constructor({ title, image, tons }) {
    this.title = title;
    this.image = image;
    this.tons = tons;
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
      <button>Арендовать</button>
      </div>`;
    return card;
  }
}

const productData = {
  title: "Гусеничный кран Liebherr LR 1750",
  image: 'img/Gcran.jpeg',
  tons: "40",
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

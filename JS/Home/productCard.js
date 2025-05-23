class productCard {
  constructor({ id, title, image }) {
    this.id = id;
    this.title = title;
    this.image = image;
  }
  render() {
      const card = document.createElement('div');
      card.className = 'product-card';

      card.innerHTML = `<img src="${this.image}" alt="${this.title}" /> 
      <div><h3>${this.title}</h3></div>
      <div>
      <p>Грузоподъемность: 40 тонн</p>
      <p>Длина стрелы: 35 м</p> 
      <p>Все характеристики&nbsp&nbsp&nbsp&nbsp<a href="#"><img src="img/arrowIntr.svg" alt="" /></a></p>
      <button>Арендовать</button>
      </div>`
      return card
  }
}

const productData = {
  id: 1,
  title: 'Гусеничный кран Liebherr LR 1750',
  image: 'img/Gkran.jpg'
};
const card = new productCard(productData);
document.querySelectorAll(".swiper3 .swiper-slide").forEach(el =>{const cardCopy = new productCard(productData); el.appendChild(cardCopy.render())})
class n{constructor({title:t,image:r,tons:s}){this.title=t,this.image=r,this.tons=s}render(){const t=document.createElement("div");return t.className="product-card",t.innerHTML=`<img src="${this.image}" alt="${this.title}" /> 
      <div><h3>${this.title}</h3></div>
      <div>
      <p>Грузоподъемность: ${this.tons} тонн</p>
      <p>Длина стрелы: 35 м</p> 
      <p>Все характеристики&nbsp&nbsp&nbsp&nbsp<a href="#"><img src="img/arrowIntr.svg" alt="" /></a></p>
      <button>Арендовать</button>
      </div>`,t}}const a={title:"Гусеничный кран Liebherr LR 1750",image:"img/Gkran.jpg",tons:"40"},i=document.querySelector(".swiper3 .swiper-wrapper");if(i){i.innerHTML="";for(let e=0;e<6;e++){const t=document.createElement("div");t.className="swiper-slide";const r=new n(a);t.appendChild(r.render()),i.appendChild(t)}}export{n as P};
//# sourceMappingURL=productCard.js.map

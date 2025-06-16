import{h as i,a as d}from"./header.js";document.querySelector(".Download").addEventListener("click",function(){const o=document.querySelector(".Blog"),e=document.createElement("div"),t=document.createElement("div"),n=document.createElement("div");e.innerHTML=`<div><img src="img/BlogShow.jpg" alt="imgBlog" /></div>
                <div>
                  <h3>Аренда автокрана LIEBHERR LTM 1160 в Москве</h3>
                  <p>Компания Liebherr – ведущий поставщик строительной и землеройной техники в мире. Предлагаем автомобильные краны от легкой до тяжелой категории.</p>
                  <button>Подробнее</button>
                </div>`,t.innerHTML=`
               <div><img src="img/BlogShow.jpg" alt="imgBlog" /></div>
                <div>
                  <h3>Аренда автокрана LIEBHERR LTM 1160 в Москве</h3>
                  <p>Компания Liebherr – ведущий поставщик строительной и землеройной техники в мире. Предлагаем автомобильные краны от легкой до тяжелой категории.</p>
                  <button>Подробнее</button>
                </div>`,n.innerHTML=`<div><img src="img/BlogShow.jpg" alt="imgBlog" /></div>
                <div>
                  <h3>Аренда автокрана LIEBHERR LTM 1160 в Москве</h3>
                  <p>Компания Liebherr – ведущий поставщик строительной и землеройной техники в мире. Предлагаем автомобильные краны от легкой до тяжелой категории.</p>
                  <button>Подробнее</button>
                </div>`,o.append(e,t,n)});document.addEventListener("DOMContentLoaded",function(){document.querySelector(".Blog").addEventListener("click",function(e){if(e.target.tagName==="BUTTON"&&!e.target.classList.contains("Download")){const t=e.target.closest("div").querySelector("h3").textContent;window.location.href=`BlogPages.html?title=${encodeURIComponent(t)}`}})});i();d();
//# sourceMappingURL=Blog.js.map

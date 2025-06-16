import"./modulepreload-polyfill.js";import{h as i,a as d}from"./header.js";document.querySelector(".Download").addEventListener("click",function(){const o=document.querySelector(".Blog"),t=document.createElement("div"),e=document.createElement("div"),n=document.createElement("div");t.innerHTML=`<div><img src="img/BlogShow.jpg" alt="imgBlog" /></div>
                <div>
                  <h3>Аренда автокрана LIEBHERR LTM 1160 в Москве</h3>
                  <p>Компания Liebherr – ведущий поставщик строительной и землеройной техники в мире. Предлагаем автомобильные краны от легкой до тяжелой категории.</p>
                  <button>Подробнее</button>
                </div>`,e.innerHTML=`
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
                </div>`,o.append(t,e,n)});document.addEventListener("DOMContentLoaded",function(){document.querySelector(".Blog").addEventListener("click",function(t){if(t.target.tagName==="BUTTON"&&!t.target.classList.contains("Download")){const e=t.target.closest("div").querySelector("h3").textContent;window.location.href=`BlogPages.html?title=${encodeURIComponent(e)}`}})});i();d();
//# sourceMappingURL=Blog.js.map

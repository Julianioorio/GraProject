document.querySelector(".Download").addEventListener("click", function () {
  const mainObject = document.querySelector(".Blog");
  const div = document.createElement("div");
  const div2 = document.createElement("div");
  const div3 = document.createElement("div");
  div.innerHTML = `<div><img src="img/BlogShow.jpg" alt="imgBlog" /></div>
                <div>
                  <h3>Аренда автокрана LIEBHERR LTM 1160 в Москве</h3>
                  <p>Компания Liebherr – ведущий поставщик строительной и землеройной техники в мире. Предлагаем автомобильные краны от легкой до тяжелой категории.</p>
                  <button>Подробнее</button>
                </div>`;
  div2.innerHTML = `
               <div><img src="img/BlogShow.jpg" alt="imgBlog" /></div>
                <div>
                  <h3>Аренда автокрана LIEBHERR LTM 1160 в Москве</h3>
                  <p>Компания Liebherr – ведущий поставщик строительной и землеройной техники в мире. Предлагаем автомобильные краны от легкой до тяжелой категории.</p>
                  <button>Подробнее</button>
                </div>`;
  div3.innerHTML = `<div><img src="img/BlogShow.jpg" alt="imgBlog" /></div>
                <div>
                  <h3>Аренда автокрана LIEBHERR LTM 1160 в Москве</h3>
                  <p>Компания Liebherr – ведущий поставщик строительной и землеройной техники в мире. Предлагаем автомобильные краны от легкой до тяжелой категории.</p>
                  <button>Подробнее</button>
                </div>`;
  mainObject.append(div, div2, div3);
});

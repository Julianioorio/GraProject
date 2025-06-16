document.querySelector(".Download").addEventListener("click", function () {
  const mainObject = document.querySelector(".Objects");
  const div = document.createElement("div");
  const div2 = document.createElement("div");
  const div3 = document.createElement("div");
  div.innerHTML = `<div><img src="img/ObjectBlog.jpg" alt="imgObject" /></div>
                <div><p>Разгрузка и монтаж<br> трансформатора автокраном <br> LIEBHERR LTM1500</p><p>г.Туапсе</p></div>`;
  div2.innerHTML = `<div><img src="img/ObjectBlog.jpg" alt="imgObject" /></div>
                <div><p>Разгрузка и монтаж<br> трансформатора автокраном <br> LIEBHERR LTM1500</p><p>г.Туапсе</p></div>`;
  div3.innerHTML = `<div><img src="img/ObjectBlog.jpg" alt="imgObject" /></div>
                <div><p>Разгрузка и монтаж<br> трансформатора автокраном <br> LIEBHERR LTM1500</p><p>г.Туапсе</p></div>`;
  mainObject.append(div,div2,div3);
});

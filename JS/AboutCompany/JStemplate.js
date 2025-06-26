fetch("/GraProject/templates/aboutCompanyInfo.html")
  .then((res) => res.text())
  .then((html) => {
    document.querySelector(".infoUsMain").innerHTML = html;
  });

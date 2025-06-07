const filMobile = document.querySelector(".filMobile");
filMobile.addEventListener("click", function (e) {
  if (e.target.closest(".filMobile")) {
    document.querySelector(".filters .filCon .filParameters").classList.toggle("openFil");
    document.querySelector('.park').classList.toggle('openPark')
  }
});

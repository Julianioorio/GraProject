const filMobile = document.querySelector(".filMobile");
filMobile.addEventListener("click", function (e) {
  if (e.target.closest(".filMobile")) {
    console.log(e.target);
    document.querySelector(".filters .filCon .filParameters").classList.toggle("openFil");
    document.querySelector('.park').classList.toggle('openPark')
  }
});

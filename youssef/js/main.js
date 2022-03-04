//menu
menuBtn = document.querySelector(".menu");
navList = document.querySelector(".nav-list");
iconNavList = document.querySelector(".icon");

menuBtn.addEventListener("click", function () {
  navList.classList.toggle("hight");
  iconNavList.classList.toggle("hight");
});

//carousel
$(document).ready(function () {
  $(".owl-carousel").owlCarousel();
});
$(".owl-carousel").owlCarousel({
  rtl: true,
  loop: true,
  autoplay: true,
  nav: true,
  responsive: {
    0: {
      items: 1,
    },
  },
});

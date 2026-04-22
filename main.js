const swiper = new Swiper(".mySwiper", {
  loop: true,               /* Infinite loop */
  autoplay: {
    delay: 5000,            /* Slides change every 5 seconds */
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,        /* User can click dots to jump to slide */
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  effect: 'fade',           /* Makes it look high-end like fashion sites */
});
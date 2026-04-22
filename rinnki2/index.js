const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobileMenu");

hamburger.addEventListener("click", () => {
  mobileMenu.classList.toggle("active");
});

//hero page  JS code  starts from here
let slides = document.querySelectorAll(".slide");
let index = 0;

const next = document.getElementById("next");
const prev = document.getElementById("prev");

// Show Slide
function showSlide(i) {
  slides.forEach(slide => slide.classList.remove("active"));
  slides[i].classList.add("active");
}

// Next Slide
function nextSlide() {
  index = (index + 1) % slides.length;
  showSlide(index);
}

// Prev Slide
function prevSlide() {
  index = (index - 1 + slides.length) % slides.length;
  showSlide(index);
}

// Auto Slide
setInterval(nextSlide, 4000);

// Controls
next.addEventListener("click", nextSlide);
prev.addEventListener("click", prevSlide);
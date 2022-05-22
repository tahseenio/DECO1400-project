const ohWafflesDetailBtn = document.getElementById('oh-waffles');
const socalTacosDetailBtn = document.getElementById('socal-tacos');

// Set localstorage to truck_id on foodcart click
ohWafflesDetailBtn.addEventListener('click', () => {
  localStorage.setItem('id', '35746');
});

socalTacosDetailBtn.addEventListener('click', () => {
  localStorage.setItem('id', '36206');
});

// Slideshow
let slideIndex = 0;
const slideShowDelay = 10;

const slides = document.querySelectorAll('.slide');
const carouselBackBtn = document.querySelector('.carousel__left');
const carouselForwardBtn = document.querySelector('.carousel__right');
const carouselPills = document.querySelectorAll('.circle');

const ShowSlide = (index) => {
  if (index === slides.length) {
    slideIndex = 0;
  } else if (index < 0) {
    slideIndex = slides.length - 1;
  }
  // reset slideshow
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
    carouselPills[i].classList.remove('active-pill');
  }
  // set active slideshow based on index number
  slides[slideIndex].style.display = 'block';
  carouselPills[slideIndex].classList.add('active-pill');
};

carouselBackBtn.addEventListener('click', () => {
  ShowSlide(--slideIndex);
});

carouselForwardBtn.addEventListener('click', () => {
  ShowSlide(++slideIndex);
});

carouselPills.forEach((pill) => pill.addEventListener('click', (e) => {}));

ShowSlide(slideIndex);

const dropdown = document.querySelector('.modal');

const modalOpenBtn = document.querySelector('.modal-open__button');
const modalCloseBtn = document.querySelector('.modal-close__button');

modalOpenBtn.addEventListener('click', () => {
  dropdown.classList.toggle('active');
});

modalCloseBtn.addEventListener('click', () => {
  dropdown.classList.toggle('active');
});

const modalLink = document.querySelectorAll('.modal__link--dropdown');

modalLink.forEach((link) =>
  link.addEventListener('click', () => {
    console.log('clicked modal link');
    dropdown.classList.toggle('active');
  })
);

const ohWafflesDetailBtn = document.getElementById('oh-waffles');

ohWafflesDetailBtn.addEventListener('click', () => {
  localStorage.setItem('id', '35746');
});

const socalTacosDetailBtn = document.getElementById('socal-tacos');

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

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
    carouselPills[i].classList.remove('active-pill');
  }

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

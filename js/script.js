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

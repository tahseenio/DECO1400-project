const dropdown = document.querySelector('.modal');
const modalOpenBtn = document.querySelector('.modal-open__button');
const modalCloseBtn = document.querySelector('.modal-close__button');
const modalLink = document.querySelectorAll('.modal__link--dropdown');

// modal open and close listeners
modalOpenBtn.addEventListener('click', () => {
  dropdown.classList.toggle('active');
});

modalCloseBtn.addEventListener('click', () => {
  dropdown.classList.toggle('active');
});

// On modal link click, close modal
modalLink.forEach((link) =>
  link.addEventListener('click', () => {
    console.log('clicked modal link');
    dropdown.classList.toggle('active');
  })
);

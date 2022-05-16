const accordionOneBtn = document.getElementById('accordion-1-btn')
const accordionOneAnswer = document.querySelector('.accordion-1-answer')

const accordionTwoBtn = document.getElementById('accordion-2-btn')
const accordionTwoAnswer = document.querySelector('.accordion-2-answer')

const accordionThreeBtn = document.getElementById('accordion-3-btn')
const accordionThreeAnswer = document.querySelector('.accordion-3-answer')

const accordionFourBtn = document.getElementById('accordion-4-btn')
const accordionFourAnswer = document.querySelector('.accordion-4-answer')

accordionOneBtn.addEventListener('click', () => {
  accordionOneAnswer.classList.toggle('active')
})

accordionTwoBtn.addEventListener('click', () => {
  accordionTwoAnswer.classList.toggle('active')
})

accordionThreeBtn.addEventListener('click', () => {
  accordionThreeAnswer.classList.toggle('active')
})

accordionFourBtn.addEventListener('click', () => {
  accordionFourAnswer.classList.toggle('active')
})



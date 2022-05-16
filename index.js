const modalOpenBtn = document.querySelector('.modal-open__button')
const modalCloseBtn = document.querySelector('.modal-close__button')

const dropdown = document.querySelector('.modal')

modalOpenBtn.addEventListener('click', () => {
  console.log("clicked")
  dropdown.classList.toggle('active')
})

modalCloseBtn.addEventListener('click', () => {
  console.log("clicked")
  dropdown.classList.toggle('active')
})

const ohWafflesDetailBtn = document.getElementById('oh-waffles')

ohWafflesDetailBtn.addEventListener('click', () => {
  localStorage.setItem('id', '35746')
  console.log("pressed ohwaffles -> should be ohw waffles", localStorage.getItem('id'))
})

const socalTacosDetailBtn = document.getElementById('socal-tacos')

socalTacosDetailBtn.addEventListener('click', () => {
  localStorage.setItem('id', '36206')
  console.log("pressed socal -> should be socal tacos", localStorage.getItem('id'))
})
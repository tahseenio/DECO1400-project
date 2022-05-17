

const firstName = document.getElementById('firstName')
const lastName = document.getElementById('lastName')
const email = document.getElementById('email')
const message = document.getElementById('message')

const handleFormSubmit = () => {
  alert(`Submitted. First Name: ${firstName.value}, Last Name: ${lastName.value}, Email: ${email.value}, Message: ${message.value}`)
}

const form = document.querySelector('.contact-form--right')

form.addEventListener('submit', handleFormSubmit)



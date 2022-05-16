

const firstName = document.getElementById('firstName')
const lastName = document.getElementById('lastName')
const email = document.getElementById('email')
const message = document.getElementById('message')

let firstNameValue = null
let lastNameValue = null
let emailValue = null
let messageValue = null


const handleFormSubmit = () => {
  alert(`Submitted. First Name: ${firstNameValue}, Last Name: ${lastNameValue}, Email: ${emailValue}, Message: ${messageValue}`)
}


const handleChange = (value) => {
  if (value === 'firstName') {
    firstNameValue = document.getElementById('firstName').value
  } else if (value === 'lastName') {
    lastNameValue = document.getElementById('lastName').value
  } else if (value === 'email') {
    emailValue = document.getElementById('email').value
  } else if (value === 'message') {
    messageValue = document.getElementById('message').value
  }
}



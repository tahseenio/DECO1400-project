const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const email = document.getElementById('email');
const message = document.getElementById('message');

// handles Form Submit. Data can be used for backend.
const handleFormSubmit = (event) => {
  event.preventDefault();
  alert(
    `Submitted. First Name: ${firstName.value}, Last Name: ${lastName.value}, Email: ${email.value}, Message: ${message.value}`
  );
};

// Event Listener for the submit button in the form
const form = document.querySelector('.contact-form--right');
form.addEventListener('submit', handleFormSubmit);

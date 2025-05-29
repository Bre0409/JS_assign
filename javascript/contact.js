// CONTACT FORM DROPDOWN MENU

const dropdowns = document.querySelectorAll('.dropdown');

// all dropdown elements
dropdowns.forEach(dropdown => {

const select = dropdown.querySelector('.select');
const caret = dropdown.querySelector('.caret');
const menu = dropdown.querySelector('.menu');
const options = dropdown.querySelectorAll('.menu li');
const selected = dropdown.querySelector('.selected');

// click event

select.addEventListener('click', () => {

    select.classList.toggle('select-clicked');

    caret.classList.toggle('caret-rotate');

    menu.classList.toggle('menu-open');
});

// all options

options.forEach(option =>{
    // click event
    option.addEventListener('click', () =>{
        // change inner text when clicked
        selected.innerText = option.innerText;

        select.classList.remove('select-clicked');

        caret.classList.remove('caret-rotate');

        menu.classList.remove('menu-open');

        options.forEach(option => {
            option.classList.remove('active');
        });
        option.classList.add('active');
    });
});
});

        // Form Submission

// document.addEventListener("DOMContentLoaded", function () {
//   const form = document.getElementById("contact-form");

//   form.addEventListener("submit", function (event) {
//     event.preventDefault(); // Stop default form submission

//     const firstName = document.getElementById("first-name-input").value.trim();
//     const message = document.getElementById("message").value.trim();

//     if (firstName === "") {
//       alert("First name is required.");
//       return;
//     }

//     if (message === "") {
//       alert("Message is required.");
//       return;
//     }

//     // Everything is valid
//     alert("Form submitted successfully!");
//     // Optional: form.submit(); // If you want to proceed with submission
//   });
// });

        // Form Submission

// function messages(){
//   let name = document.getElementById('first-name-input');
//   let email = document.getElementById('email-contact');
//   let msg = document.getElementById('message');
//   const success = document.getElementById('success');
//   const alert = document.getElementById('alert');

// if(name.value === '' || email.value === '' || msg.value === ''){
//   alert.style.display = 'block';
// }
// else{
//   setTimeout(() => {
//     name.value = '';
//     email.value = '';
//     msg.value = '';
//   }, 2000);

//     success.style.display ='block';
// }

// setTimeout(() => {
//   alert.style.display = 'none';
//   success.style.display = 'none';
// }, 4000);
// }

function messages(event) {
  event.preventDefault(); // Prevent form submission

  const form = document.getElementById('contact-form');
  const firstName = document.getElementById('first-name-input').value.trim();
  const email = document.getElementById('email-contact').value.trim();
  const message = document.getElementById('message').value.trim();
  const selectedElement = document.querySelector('.selected');
  const selectedOption = selectedElement.textContent.trim();

  const successMsg = document.getElementById('success');
  const alertMsg = document.getElementById('alert');

  // Reset messages
  successMsg.style.display = 'none';
  alertMsg.style.display = 'none';
  alertMsg.textContent = '';

  const emailRegex = /\S+@\S+\.\S+/;

  // Validation
  if (
    selectedOption === 'Pick Query' || 
    selectedOption === '' ||
    selectedOption === null
  ) {
    alertMsg.textContent = 'Please select a query type from the dropdown.';
    alertMsg.style.display = 'block';
    return;
  }

  if (!firstName || !email || !message) {
    alertMsg.textContent = 'Input fields can\'t be empty!';
    alertMsg.style.display = 'block';
    return;
  }

  if (!emailRegex.test(email)) {
    alertMsg.textContent = 'Please enter a valid email address.';
    alertMsg.style.display = 'block';
    return;
  }

  // Show success message
  successMsg.style.display = 'block';
  alertMsg.style.display = 'none';

  // Reset the form
  form.reset();

  // Reset custom dropdown to default (Pick Query)
  selectedElement.textContent = 'Pick Query';
}

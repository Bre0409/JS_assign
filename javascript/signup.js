// signup form validation
const signupform = document.getElementById('signupform');
const firstname_input = document.getElementById('firstname-input');
const email_input = document.getElementById('email-input');
const password_input = document.getElementById('password-input');
const re_enter_password_input = document.getElementById('re-enter-password-input');
const error_message = document.getElementById('error-message');
const success_message = document.getElementById('success-message');

signupform.addEventListener('submit', (e) => {
    let errors = [];

    if (firstname_input) {
        // Sign-up form
        errors = getSignupFormErrors(
            firstname_input.value,
            email_input.value,
            password_input.value,
            re_enter_password_input.value
        );
    }

    if (errors.length > 0) {
        e.preventDefault();
        error_message.innerText = errors.join('. ');
        success_message.innerText = ''; // Clear old success message
    } else {
        // if no errors — allow form to submit and show success message
        e.preventDefault(); 

        showSuccessMessage();
        error_message.innerText = '';

        signupform.reset(); //  form reset on completion
    }
});

// highlighted errors stated and highlighted in red
function getSignupFormErrors(firstname, email, password, reenterPassword) {
    let errors = [];

    if (firstname === '' || firstname == null) {
        errors.push('Firstname is required');
        firstname_input.parentElement.classList.add('incorrect');
    }

    if (email === '' || email == null) {
        errors.push('Email is required');
        email_input.parentElement.classList.add('incorrect');
    }

    if (password === '' || password == null) {
        errors.push('Password is required');
        password_input.parentElement.classList.add('incorrect');
    }

    if (password.length < 8) {
        errors.push('Password must contain at least 8 characters');
        password_input.parentElement.classList.add('incorrect');
    }

    if (password !== reenterPassword) {
        errors.push('Password does not match re-enter password');
        password_input.parentElement.classList.add('incorrect');
        re_enter_password_input.parentElement.classList.add('incorrect');
    }

    const errorContainer = document.getElementById('errorContainer');
    if (errorContainer) {
        errorContainer.innerHTML = errors.join('<br>');
    }

    return errors;
}

const allInputs = [firstname_input, email_input, password_input, re_enter_password_input].filter(input => input != null);

allInputs.forEach(input => {
    input.addEventListener('input', () => {
        if (input.parentElement.classList.contains('incorrect')) {
            input.parentElement.classList.remove('incorrect');
            error_message.innerText = '';
            success_message.innerText = '';
        }
    });
});

        // On sucessful sign up hide sign up form and display login link and change header link from signup to log in

function showSuccessMessage() {
  let successMessage = document.getElementById('success-message');
  const loginLinkContainer = document.getElementById('login-link-container');
  const alreadyAccount = document.getElementById('login');

  // Change header links from "Sign up" to "Login"
  const sidebarSignupLink = document.getElementById('sidebar-signup-link');
  const mainSignupLink = document.getElementById('main-signup-link');

  if (sidebarSignupLink) {
    sidebarSignupLink.textContent = 'Login';
    sidebarSignupLink.href = '#signinform';
  }

  if (mainSignupLink) {
    mainSignupLink.textContent = 'Login';
    mainSignupLink.href = '#signinform';
  }

  if (!successMessage) {
    successMessage = document.createElement('p');
    successMessage.id = 'success-message';
    successMessage.style.color = 'green';
    signupform.parentElement.appendChild(successMessage);
  }

  successMessage.textContent = 'You have been successfully signed up!';
  successMessage.style.display = 'block';

  // Hide signup form and “Already have an account” message
  signupform.style.display = 'none';
  if (alreadyAccount) {
        alreadyAccount.style.display = 'none';
    }

  // Show login link
  const loginLink = document.createElement('a');
  loginLink.href = '#signinform';
  loginLink.textContent = 'Go to Login';
  loginLink.style.display = 'inline-block';
  loginLink.style.marginTop = '10px';
  loginLink.style.color = 'blue';
  loginLink.style.textDecoration = 'underline';
  loginLinkContainer.appendChild(loginLink);
}



//  // Hide signup form and the "already have an account" paragraph
//   signupform.style.display = 'none';
//   if (alreadyAccount) {
//     alreadyAccount.style.display = 'none';
//   }
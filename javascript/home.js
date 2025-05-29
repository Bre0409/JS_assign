            // OPEN/CLOSE SIDEBAR // HIDE SIDEBAR ONCE LIST ITEM IS SELECTED
  function showSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex'
  }
  function closeSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'none'
  }

//   clicks/touches outside the sidebar
  document.addEventListener('click', function(event) {
    const sidebar = document.querySelector('.sidebar');
    const menuButton = document.querySelector('.menu-button');

    // run if sidebar is currently visible
    if (sidebar.style.display === 'flex') {
      
      if (!sidebar.contains(event.target) && !menuButton.contains(event.target)) {
        closeSidebar();
      }
    }
  });


//   Touch on mobile
  document.addEventListener('touchstart', function(event) {
    const sidebar = document.querySelector('.sidebar');
    const menuButton = document.querySelector('.menu-button');

    if (sidebar.style.display === 'block') {
      if (!sidebar.contains(event.target) && !menuButton.contains(event.target)) {
        closeSidebar();
      }
    }
  });

        // Login form

function login() {
  const emailInput = document.querySelector('.email').value.trim();
  const passwordInput = document.querySelector('.password').value;
  const resultDiv = document.getElementById('result');

  // email validation regex (1 non white space text, @ symbol, 1 non white space text after @ symbol and a . with more non white space text after)
 
  const emailRegex = /\S+@\S+\.\S+/;

  // Validation if wrong red messages are displayed
  if (!emailInput || !passwordInput) {
    resultDiv.textContent = 'Please fill in all fields.';
    resultDiv.style.color = 'red';
    return;
  }

  if (!emailRegex.test(emailInput)) {
    resultDiv.textContent = 'Please enter a valid email address.';
    resultDiv.style.color = 'red';
    return;
  }

  // password length check
  if (passwordInput.length < 6) {
    resultDiv.textContent = 'Password must be at least 6 characters.';
    resultDiv.style.color = 'red';
    return;
  }

  // If all info is correct
  resultDiv.textContent = 'Login successful!';
  resultDiv.style.color = 'green';

  // login in succesful displayed for 2 seconds before redirecting to coding.html
   setTimeout(() => {
    window.location.href = 'coding.html';
  }, 2000);
}






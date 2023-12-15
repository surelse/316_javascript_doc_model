// Access DOM elements
const contentSection = document.getElementById('content');
const changeTextBtn = document.getElementById('changeTextBtn');
const myForm = document.getElementById('myForm');
const usernameInput = document.getElementById('username');
const emailInput = document.getElementById('email');

// Change text on button click
changeTextBtn.addEventListener('click', () => {
  contentSection.innerHTML = '<p>New content after button click</p>';
});

// Form validation using JavaScript
myForm.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent default form submission
  
  // Simple validation - Check if username and email are filled
  if (usernameInput.value.trim() === '' || emailInput.value.trim() === '') {
    alert('Please fill in all fields!');
  } else {
    // If valid, proceed with further actions (e.g., submit the form)
    alert('Form submitted successfully!');
    // You can add additional logic here, like submitting the form data via AJAX
    
    // Prevent the form from resetting immediately (for demonstration purposes)
    return false;
  }
});
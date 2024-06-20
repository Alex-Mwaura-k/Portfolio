// Event listener for form submission
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission
  
    // Validate form inputs
    if (validateForm()) {
      // If form is valid, submit it
      submitForm();
    }
  });
  
  // Function to validate the form inputs
  function validateForm() {
    // Fetching form inputs
    var firstName = document.getElementById('FirstName').value.trim();
    var lastName = document.getElementById('LastName').value.trim();
    var email = document.getElementById('Email').value.trim();
    var phone = document.getElementById('Phone').value.trim();
    var message = document.getElementById('Message').value.trim();
  
    // Basic validation checks for empty fields
    if (firstName === '' || lastName === '' || email === '' || phone === '' || message === '') {
      // Show error message using SweetAlert
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Please fill out all fields.'
      });
      return false;
    }
  
    // Validate email format using regex
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      // Show error message using SweetAlert
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Please enter a valid email address.'
      });
      return false;
    }
  
// Validate phone number format using regex (exactly 10 digits)
var phoneRegex = /^\d{10}$/;
if (!phoneRegex.test(phone)) {
  // Show error message using SweetAlert
  Swal.fire({
    icon: 'error',
    title: 'Oops...',
    text: 'Please enter a valid 10-digit phone number.'
  });
  return false;
}
  
    // Validate names are not just numbers
    var nameRegex = /\D/;
    if (!nameRegex.test(firstName) || !nameRegex.test(lastName)) {
      // Both first name and last name should contain at least one non-digit character
      // Show error message using SweetAlert
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Names cannot be just numbers.'
      });
      return false;
    }
  
    // Validate message is not just numbers
    var messageRegex = /\D/;
    if (!messageRegex.test(message)) {
      // Show error message using SweetAlert
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Message cannot be just numbers.'
      });
      return false;
    }
  
    return true; // Form is valid
  }
  
  // Function to submit the form
  function submitForm() {
    // Simulating form submission (replace with actual form submission logic)
    Swal.fire({
      icon: 'success',
      title: 'Success!',
      text: 'Your message has been sent successfully.',
      showConfirmButton: false,
      timer: 2000 // Close alert after 2 seconds
    });
  
    // You can add actual form submission logic here
    document.getElementById('contactForm').submit();
  }
  
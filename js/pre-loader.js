// pre-Loader
document.addEventListener("DOMContentLoaded", function() {
    // Ensure the loader overlay is displayed initially
    document.querySelector('.loader-overlay').style.display = 'flex';
  });

  window.addEventListener('load', function() {
    // Hide the loader overlay once the page is fully loaded
    document.querySelector('.loader-overlay').style.display = 'none';
  });


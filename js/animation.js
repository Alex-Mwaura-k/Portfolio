// Controls the footer wave animation
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
      console.log(entry);
      if (entry.isIntersecting) {
          entry.target.classList.add('show');
      } else {
          entry.target.classList.remove('show');
      }
  });
});

const hiddenElements = document.querySelectorAll('.animate, .animate2');
hiddenElements.forEach((el) => observer.observe(el));

// The preloader-related code has been removed

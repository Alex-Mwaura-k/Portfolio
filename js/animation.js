const observer = new IntersectionObserver((entries) =>{
    entries.forEach((entry) =>{
      console.log(entry)
      if (entry.isIntersecting){
        entry.target.classList.add('show');
      }
      else
      {
        entry.target.classList.remove('show');
      }
    });
  });

  const hiddenElements = document.querySelectorAll('.animate, .animate2');
  hiddenElements.forEach((el) => observer.observe(el));

  window.addEventListener('load', function () {
const preloader = document.querySelector('.preloader');
setTimeout(function () {
  preloader.style.opacity = '0';
  setTimeout(function () {
    preloader.style.display = 'none';
  }, 500); // Adjust the delay as needed
}, 1000); // Adjust the delay as needed
}); 
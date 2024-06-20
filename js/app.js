
// Scroll back to top btn 
document.addEventListener("DOMContentLoaded", function() {
  const scrollButton = document.getElementById('scrollButton');
  const homeSection = document.getElementById('Home');

  // Initially hide the scroll button
  scrollButton.style.display = "none";

  window.onscroll = function() { scrollFunction() };

  function scrollFunction() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
      scrollButton.style.display = "block";
    } else {
      scrollButton.style.display = "none";
    }

    // Check if at the "Home" section
    if (isElementInViewport(homeSection)) {
      scrollButton.style.display = "none";
    }
  }

  // Function to check if an element is in the viewport
  function isElementInViewport(element) {
    var rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
});
//burger script
document.addEventListener("DOMContentLoaded", function () {
  const burger = document.querySelector('nav .burger_btn');
  const nav = document.querySelector('nav .navlinks');
  const navlinks = document.querySelectorAll('nav .navlinks li');

  burger.addEventListener('click', () => {
    nav.classList.toggle('nav-active');
    navlinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = '';
      } else {
        link.style.animation = `navlinkFade 0.5s ease  ${index / 7 + 0.3}s backwards`;
      }
    });
    burger.classList.toggle('toggles');
  });
});
//Timely Greetings
var today = new Date() 
var curHr = today.getHours() 
if (curHr >= 0 && curHr < 6) { 
  document.getElementById("demo").innerHTML = 'Hi There!'; 
    } 
  else if (curHr >= 6 && curHr < 12) {
     document.getElementById("demo").innerHTML = 'Good Morning!'; 
    } 
  else if (curHr >= 12 && curHr < 17) { 
    document.getElementById("demo").innerHTML = 'Good Afternoon!'; 
    } 
  else { document.getElementById("demo").innerHTML = 'Good Evening!';
} 
//Auto type intro
var typed = new Typed('.element', {
  strings: ["", "Security Analyst","Front-End Developer.", "Tech Support personel."],
  typeSpeed: 120,
  backSpeed: 50,
  loop: true
});
// partical js 
particlesJS("particles-js", {
  "particles": {
    "number": {
      "value": 23,
      "density": {
        "enable": true,
        "value_area": 1420.4657549380909
      }
    },
    "color": {
      "value": "#000000"
    },
    "shape": {
      "type": "triangle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 5
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 0.3,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 11.83721462448409,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 10,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 150,
      "color": "#09454e",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 3,
      "direction": "none",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "repulse"
      },
      "onclick": {
        "enable": true,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 400,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 400,
        "size": 40,
        "duration": 2,
        "opacity": 8,
        "speed": 3
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
});
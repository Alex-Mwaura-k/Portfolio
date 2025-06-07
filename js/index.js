// Trail cursor 
$(document).ready(function(){
  
  var mousePos = {};

 function getRandomInt(min, max) {
   return Math.round(Math.random() * (max - min + 1)) + min;
 }
  
  $(window).mousemove(function(e) {
    mousePos.x = e.pageX;
    mousePos.y = e.pageY;
  });
  
  $(window).mouseleave(function(e) {
    mousePos.x = -1;
    mousePos.y = -1;
  });
  
  var draw = setInterval(function(){
    if(mousePos.x > 0 && mousePos.y > 0){
      
      var range = 15;
      
      var color = "background: rgb("+getRandomInt(0,255)+","+getRandomInt(0,255)+","+getRandomInt(0,255)+");";
      
      var sizeInt = getRandomInt(10, 30);
      size = "height: " + sizeInt + "px; width: " + sizeInt + "px;";
      
      var left = "left: " + getRandomInt(mousePos.x-range-sizeInt, mousePos.x+range) + "px;";
      
      var top = "top: " + getRandomInt(mousePos.y-range-sizeInt, mousePos.y+range) + "px;"; 

      var style = left+top+color+size;
      $("<div class='ball' style='" + style + "'></div>").appendTo('body').one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", function(){$(this).remove();}); 
    }
  }, 1);
});


//linking scripts
document.addEventListener("DOMContentLoaded", function () {
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  function openAppWithFallback(appUrl, webUrl) {
    if (!isMobile) {
      // On desktop, just open the web link
      window.open(webUrl, "_blank");
      return;
    }

    const now = Date.now();
    const iframe = document.createElement("iframe");
    iframe.style.display = "none";
    iframe.src = appUrl;
    document.body.appendChild(iframe);

    setTimeout(() => {
      if (Date.now() - now < 1500) {
        window.location.href = webUrl;
      }
      document.body.removeChild(iframe);
    }, 1000);
  }

  // LinkedIn
  const linkedin = document.getElementById("linkedin");
  linkedin.addEventListener("click", function (e) {
    e.preventDefault();
    const appUrl = "linkedin://in/alex-mwaura-7707b21a2";
    const webUrl = this.href;
    openAppWithFallback(appUrl, webUrl);
  });

  // Instagram
  const instagram = document.getElementById("instagram");
  instagram.addEventListener("click", function (e) {
    e.preventDefault();
    const appUrl = "instagram://user?username=lexcy.__";
    const webUrl = this.href;
    openAppWithFallback(appUrl, webUrl);
  });

  // WhatsApp
  const whatsapp = document.getElementById("whatsapp");
  whatsapp.addEventListener("click", function (e) {
    e.preventDefault();
    const appUrl = "whatsapp://send?phone=+254734716845";
    const webUrl = this.href;
    openAppWithFallback(appUrl, webUrl);
  });
});

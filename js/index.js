// index.js

// Trail cursor effect
$(document).ready(function () {
  let mousePos = {};

  function getRandomInt(min, max) {
    return Math.round(Math.random() * (max - min + 1)) + min;
  }

  $(window).mousemove(function (e) {
    mousePos.x = e.pageX;
    mousePos.y = e.pageY;
  });

  $(window).mouseleave(function () {
    mousePos.x = -1;
    mousePos.y = -1;
  });

  setInterval(function () {
    if (mousePos.x > 0 && mousePos.y > 0) {
      const range = 15;

      const color =
        "background: rgb(" +
        getRandomInt(0, 255) +
        "," +
        getRandomInt(0, 255) +
        "," +
        getRandomInt(0, 255) +
        ");";

      const sizeInt = getRandomInt(10, 30);
      const size = "height: " + sizeInt + "px; width: " + sizeInt + "px;";

      const left =
        "left: " +
        getRandomInt(mousePos.x - range - sizeInt, mousePos.x + range) +
        "px;";
      const top =
        "top: " +
        getRandomInt(mousePos.y - range - sizeInt, mousePos.y + range) +
        "px;";

      const style = left + top + color + size;
      $("<div class='ball' style='" + style + "'></div>")
        .appendTo("body")
        .one(
          "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",
          function () {
            $(this).remove();
          }
        );
    }
  }, 1);
});

// Social link logic
document.addEventListener("DOMContentLoaded", function () {
  // In-app browser detection (Instagram, Facebook, LinkedIn)
  function isInAppBrowser() {
    const ua = navigator.userAgent || navigator.vendor || window.opera;
    return /Instagram|FBAN|FBAV|LinkedIn/i.test(ua);
  }

  function isMobile() {
    return /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  }

  function openInNativeBrowser(url) {
    const win = window.open(url, "_blank");
    if (!win) {
      alert("Please open this link in your browser for the best experience.");
    }
  }

  function openAppWithFallback(appUrl, webUrl) {
    if (isInAppBrowser()) {
      openInNativeBrowser(webUrl);
      return;
    }

    if (!isMobile()) {
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

  // Attach handlers
  document.getElementById("linkedin").addEventListener("click", function (e) {
    e.preventDefault();
    openAppWithFallback(
      "linkedin://in/alex-mwaura-7707b21a2",
      "https://www.linkedin.com/in/alex-mwaura-7707b21a2/"
    );
  });

  document.getElementById("instagram").addEventListener("click", function (e) {
    e.preventDefault();
    openAppWithFallback(
      "instagram://user?username=lexcy.__",
      "https://www.instagram.com/lexcy.__"
    );
  });

  document.getElementById("whatsapp").addEventListener("click", function (e) {
    e.preventDefault();
    openAppWithFallback(
      "whatsapp://send?phone=+254734716845",
      "https://wa.me/254734716845"
    );
  });
});

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

// Detect in-app browser (Instagram, Facebook, LinkedIn, etc.)
function isInAppBrowser() {
  const ua = navigator.userAgent || navigator.vendor || window.opera;
  return /FBAN|FBAV|Instagram|LinkedInApp|Twitter/i.test(ua);
}

// Try to open app using iframe, fallback to web URL if it fails
function openAppWithFallback(appUrl, webUrl) {
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

// Open external browser (especially from in-app browsers)
function openInExternalBrowser(url) {
  const win = window.open(url, "_blank");
  if (!win) {
    alert("Please open this link in your default browser.");
  }
}

document.addEventListener("DOMContentLoaded", function () {
  // LinkedIn
  const linkedin = document.getElementById("linkedin");
  if (linkedin) {
    const linkedinUrl = "https://www.linkedin.com/in/alex-mwaura-7707b21a2/";
    linkedin.addEventListener("click", function (e) {
      e.preventDefault();
      if (isInAppBrowser()) {
        openInExternalBrowser(linkedinUrl);
      } else {
        openAppWithFallback(linkedinUrl, linkedinUrl);
      }
    });
  }

  // Instagram
  const instagram = document.getElementById("instagram");
  if (instagram) {
    const appUrl = "instagram://user?username=lexcy.__";
    const webUrl = "https://www.instagram.com/lexcy.__";
    instagram.addEventListener("click", function (e) {
      e.preventDefault();
      if (isInAppBrowser()) {
        openInExternalBrowser(webUrl);
      } else {
        openAppWithFallback(appUrl, webUrl);
      }
    });
  }

  // WhatsApp
  const whatsapp = document.getElementById("whatsapp");
  if (whatsapp) {
    const appUrl = "whatsapp://send?phone=+254734716845";
    const webUrl = "https://wa.me/254734716845";
    whatsapp.addEventListener("click", function (e) {
      e.preventDefault();
      if (isInAppBrowser()) {
        openInExternalBrowser(webUrl);
      } else {
        openAppWithFallback(appUrl, webUrl);
      }
    });
  }
});

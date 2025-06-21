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

// App deep link fallback logic
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

// Detect if inside Instagram/Facebook/LinkedIn in-app browser
function isInAppBrowser() {
  return /Instagram|FBAN|FBAV|LinkedIn/i.test(navigator.userAgent);
}

// Force open in external browser
function openInExternalBrowser(url) {
  const win = window.open(url, "_blank");
  if (!win) {
    alert("Please open this link in your default browser.");
  }
}

document.addEventListener("DOMContentLoaded", function () {
  // LinkedIn
  const linkedin = document.getElementById("linkedin");
  linkedin.addEventListener("click", function (e) {
    e.preventDefault();
    const appUrl = "https://ke.linkedin.com/in/alex-mwaura-7707b21a2";
    const webUrl = this.href;

    if (isInAppBrowser()) {
      openInExternalBrowser(webUrl);
    } else {
      openAppWithFallback(appUrl, webUrl);
    }
  });

  // Instagram
  const instagram = document.getElementById("instagram");
  instagram.addEventListener("click", function (e) {
    e.preventDefault();
    const appUrl = "instagram://user?username=lexcy.__";
    const webUrl = this.href;

    if (isInAppBrowser()) {
      openInExternalBrowser(webUrl);
    } else {
      openAppWithFallback(appUrl, webUrl);
    }
  });

  // WhatsApp
  const whatsapp = document.getElementById("whatsapp");
  whatsapp.addEventListener("click", function (e) {
    e.preventDefault();
    const appUrl = "whatsapp://send?phone=+254734716845";
    const webUrl = this.href;

    if (isInAppBrowser()) {
      openInExternalBrowser(webUrl);
    } else {
      openAppWithFallback(appUrl, webUrl);
    }
  });
});

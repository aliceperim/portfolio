/* Tela de introdução estilo "atualização de software", exibida uma vez por sessão. */
(function () {
  "use strict";

  var STORAGE_KEY = "portfolio-intro-shown";
  var LINE_DELAY = 260;
  var MAX_VISIBLE_LINES = 3;

  document.addEventListener("DOMContentLoaded", function () {
    var bootScreen = document.getElementById("boot-screen");
    if (!bootScreen) return;

    var alreadyShown = false;
    try {
      alreadyShown = sessionStorage.getItem(STORAGE_KEY) === "1";
    } catch (e) {}

    var reducedMotion =
      window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    function markShown() {
      try {
        sessionStorage.setItem(STORAGE_KEY, "1");
      } catch (e) {}
    }

    if (alreadyShown || reducedMotion) {
      bootScreen.classList.add("is-hidden");
      bootScreen.setAttribute("aria-hidden", "true");
      markShown();
      return;
    }

    var lang = Site.getLang();
    var t = CONTENT[lang].intro;
    var logEl = document.getElementById("boot-log");
    var fillEl = document.getElementById("boot-bar-fill");
    var pctEl = document.getElementById("boot-percent");
    var skipBtn = document.getElementById("boot-skip");
    skipBtn.textContent = t.skip;

    var finished = false;

    function addLine(text) {
      var lineEl = document.createElement("div");
      lineEl.className = "boot-log-line";
      lineEl.textContent = text;
      logEl.appendChild(lineEl);
      while (logEl.children.length > MAX_VISIBLE_LINES) {
        logEl.removeChild(logEl.firstChild);
      }
      requestAnimationFrame(function () {
        lineEl.classList.add("is-visible");
      });
    }

    function finish() {
      if (finished) return;
      finished = true;
      bootScreen.classList.add("is-hidden");
      bootScreen.setAttribute("aria-hidden", "true");
      markShown();
    }

    skipBtn.addEventListener("click", finish);

    var lines = t.lines;
    var total = lines.length;

    lines.forEach(function (text, i) {
      setTimeout(function () {
        if (finished) return;
        addLine(text);
        var pct = Math.round(((i + 1) / total) * 100);
        fillEl.style.width = pct + "%";
        pctEl.textContent = pct + "%";
      }, i * LINE_DELAY);
    });

    var totalDuration = total * LINE_DELAY + 450;
    setTimeout(function () {
      if (finished) return;
      fillEl.style.width = "100%";
      pctEl.textContent = "100%";
      addLine(t.done);
    }, totalDuration);

    setTimeout(finish, totalDuration + 550);
  });
})();

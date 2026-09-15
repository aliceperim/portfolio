/* Config, i18n e utilidades compartilhadas entre todas as páginas do site. */
var SITE = {
  email: "alice.perim.10@gmail.com",
  linkedin: "https://www.linkedin.com/in/alice-perim/",
  github: "https://github.com/aliceperim",
  resumeFile: "assets/files/Alice_Perim_Borges_CV.pdf",
};

var Site = (function () {
  "use strict";

  var LANG_KEY = "portfolio-lang";
  var supported = ["pt", "en"];
  var state = { lang: detectDefaultLang() };
  var pageRenderer = null;

  function detectDefaultLang() {
    var saved = null;
    try {
      saved = localStorage.getItem(LANG_KEY);
    } catch (e) {}
    if (saved && supported.indexOf(saved) !== -1) return saved;
    var nav = (navigator.language || "pt").toLowerCase();
    return nav.indexOf("pt") === 0 ? "pt" : "en";
  }

  function el(tag, className, text) {
    var node = document.createElement(tag);
    if (className) node.className = className;
    if (text !== undefined && text !== null) node.textContent = text;
    return node;
  }

  function getLang() {
    return state.lang;
  }

  function renderNav(t) {
    var map = {
      "nav-about": t.nav.about,
      "nav-skills": t.nav.skills,
      "nav-experience": t.nav.experience,
      "nav-education": t.nav.education,
      "nav-projects": t.nav.projects,
      "nav-contact": t.nav.contact,
      "nav-resume": t.nav.resume,
    };
    Object.keys(map).forEach(function (id) {
      var node = document.getElementById(id);
      if (node) node.textContent = map[id];
    });
  }

  function renderFooter(t) {
    var rights = document.getElementById("footer-rights");
    var built = document.getElementById("footer-built");
    if (rights) rights.textContent = new Date().getFullYear() + " Alice Perim Borges. " + t.footer.rights;
    if (built) built.textContent = t.footer.builtWith;
  }

  function applyStaticLinks() {
    var resumeBtn = document.getElementById("hero-cta-resume");
    var navResume = document.getElementById("nav-resume");
    if (resumeBtn) resumeBtn.href = SITE.resumeFile;
    if (navResume) navResume.href = SITE.resumeFile;
  }

  function render() {
    var t = CONTENT[state.lang];
    document.documentElement.lang = state.lang === "pt" ? "pt-BR" : "en";
    document.title = t.meta.title;
    var metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute("content", t.meta.description);

    renderNav(t);
    renderFooter(t);
    applyStaticLinks();

    if (typeof pageRenderer === "function") pageRenderer(t);

    document.querySelectorAll(".lang-btn").forEach(function (btn) {
      btn.classList.toggle("is-active", btn.dataset.lang === state.lang);
    });

    initReveal();
  }

  function setLang(lang) {
    if (supported.indexOf(lang) === -1) return;
    state.lang = lang;
    try {
      localStorage.setItem(LANG_KEY, lang);
    } catch (e) {}
    render();
  }

  function initLangSwitch() {
    document.querySelectorAll(".lang-btn").forEach(function (btn) {
      btn.addEventListener("click", function () {
        setLang(btn.dataset.lang);
      });
    });
  }

  function initNavToggle() {
    var toggle = document.getElementById("nav-toggle");
    var menu = document.getElementById("nav-menu");
    if (!toggle || !menu) return;
    toggle.addEventListener("click", function () {
      var isOpen = menu.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });
    menu.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        menu.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  function initHeaderShadow() {
    var header = document.getElementById("site-header");
    if (!header) return;
    var onScroll = function () {
      header.classList.toggle("is-scrolled", window.scrollY > 8);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  function initReveal() {
    var targets = document.querySelectorAll("[data-reveal]:not(.is-visible)");
    if (!("IntersectionObserver" in window)) {
      targets.forEach(function (t) {
        t.classList.add("is-visible");
      });
      return;
    }
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    targets.forEach(function (t) {
      observer.observe(t);
    });
  }

  function init(renderPage) {
    pageRenderer = renderPage;
    document.addEventListener("DOMContentLoaded", function () {
      initLangSwitch();
      initNavToggle();
      initHeaderShadow();
      render();
    });
  }

  return { init: init, el: el, getLang: getLang, setLang: setLang, SITE: SITE };
})();

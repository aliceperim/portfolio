/* Renderização, i18n e interações do portfólio. */
(function () {
  "use strict";

  var SITE = {
    email: "alice.perim.10@gmail.com",
    linkedin: "https://www.linkedin.com/in/alice-perim/",
    github: "https://github.com/aliceperim",
    resumeFile: "assets/files/Alice_Perim_Borges_CV.pdf",
  };

  var LANG_KEY = "portfolio-lang";
  var supported = ["pt", "en"];

  function detectDefaultLang() {
    var saved = null;
    try {
      saved = localStorage.getItem(LANG_KEY);
    } catch (e) {}
    if (saved && supported.indexOf(saved) !== -1) return saved;
    var nav = (navigator.language || "pt").toLowerCase();
    return nav.indexOf("pt") === 0 ? "pt" : "en";
  }

  var state = { lang: detectDefaultLang() };

  function el(tag, className, text) {
    var node = document.createElement(tag);
    if (className) node.className = className;
    if (text !== undefined && text !== null) node.textContent = text;
    return node;
  }

  function renderHero(t) {
    document.getElementById("hero-eyebrow").textContent = t.hero.eyebrow;
    document.getElementById("hero-name").textContent = t.hero.name;
    document.getElementById("hero-role").textContent = t.hero.role;
    document.getElementById("hero-tagline").textContent = t.hero.tagline;
    document.getElementById("hero-location").textContent = t.hero.location;
    document.getElementById("hero-cta-projects").textContent = t.hero.ctaProjects;
    document.getElementById("hero-cta-contact").textContent = t.hero.ctaContact;
    document.getElementById("hero-cta-resume").textContent = t.hero.ctaResume;
    document.getElementById("hero-code-title").textContent = t.hero.codeCardTitle;
  }

  function renderAbout(t) {
    document.getElementById("about-kicker").textContent = t.about.kicker;
    document.getElementById("about-title").textContent = t.about.title;
    document.getElementById("about-text").textContent = t.about.text;
    var wrap = document.getElementById("about-highlights");
    wrap.innerHTML = "";
    t.about.highlights.forEach(function (h) {
      var card = el("div", "highlight");
      card.appendChild(el("strong", null, h.label));
      card.appendChild(el("span", null, h.value));
      wrap.appendChild(card);
    });
  }

  function renderSkills(t) {
    document.getElementById("skills-kicker").textContent = t.skills.kicker;
    document.getElementById("skills-title").textContent = t.skills.title;
    var wrap = document.getElementById("skills-grid");
    wrap.innerHTML = "";
    t.skills.groups.forEach(function (group) {
      var card = el("div", "skill-card");
      card.appendChild(el("h3", null, group.name));
      var list = el("div", "tag-list");
      group.items.forEach(function (item) {
        list.appendChild(el("span", "tag", item));
      });
      card.appendChild(list);
      wrap.appendChild(card);
    });
  }

  function renderExperience(t) {
    document.getElementById("experience-kicker").textContent = t.experience.kicker;
    document.getElementById("experience-title").textContent = t.experience.title;
    var wrap = document.getElementById("experience-timeline");
    wrap.innerHTML = "";
    t.experience.items.forEach(function (job) {
      var item = el("div", "timeline-item" + (job.current ? " is-current" : ""));
      var dot = el("span", "timeline-dot");
      item.appendChild(dot);
      var content = el("div", "timeline-content");

      var head = el("div", "timeline-head");
      var roleWrap = el("div");
      roleWrap.appendChild(el("h3", null, job.role));
      roleWrap.appendChild(el("p", "timeline-company", job.company + " · " + job.location));
      head.appendChild(roleWrap);
      head.appendChild(el("span", "timeline-period", job.period));
      content.appendChild(head);

      var bullets = el("ul", "timeline-bullets");
      job.bullets.forEach(function (b) {
        bullets.appendChild(el("li", null, b));
      });
      content.appendChild(bullets);

      item.appendChild(content);
      wrap.appendChild(item);
    });

    document.getElementById("experience-other-title").textContent = t.experience.otherTitle;
    var otherWrap = document.getElementById("experience-other");
    otherWrap.innerHTML = "";
    t.experience.other.forEach(function (job) {
      var row = el("div", "other-item");
      row.appendChild(el("strong", null, job.role));
      row.appendChild(el("span", null, job.company));
      row.appendChild(el("span", "other-period", job.period));
      otherWrap.appendChild(row);
    });
  }

  function renderEducation(t) {
    document.getElementById("education-kicker").textContent = t.education.kicker;
    document.getElementById("education-title").textContent = t.education.title;
    var wrap = document.getElementById("education-list");
    wrap.innerHTML = "";
    t.education.items.forEach(function (edu) {
      var card = el("div", "education-card");
      card.appendChild(el("h3", null, edu.degree));
      card.appendChild(el("p", null, edu.institution));
      card.appendChild(el("span", "education-period", edu.period));
      wrap.appendChild(card);
    });

    document.getElementById("cert-title").textContent = t.education.certTitle;
    var certWrap = document.getElementById("cert-list");
    certWrap.innerHTML = "";
    t.education.certifications.forEach(function (c) {
      var row = el("div", "cert-item");
      row.appendChild(el("span", "cert-name", c.name));
      var meta = [c.issuer, c.date].filter(Boolean).join(" · ");
      row.appendChild(el("span", "cert-meta", meta));
      certWrap.appendChild(row);
    });
  }

  function renderProjects(t) {
    document.getElementById("projects-kicker").textContent = t.projects.kicker;
    document.getElementById("projects-title").textContent = t.projects.title;
    document.getElementById("projects-subtitle").textContent = t.projects.subtitle;
    document.getElementById("projects-coming-title").textContent = t.projects.comingSoonTitle;
    document.getElementById("projects-coming-text").textContent = t.projects.comingSoonText;
    var ghBtn = document.getElementById("projects-github-cta");
    ghBtn.textContent = t.projects.githubCta;
    ghBtn.href = SITE.github;
  }

  function renderContact(t) {
    document.getElementById("contact-kicker").textContent = t.contact.kicker;
    document.getElementById("contact-title").textContent = t.contact.title;
    document.getElementById("contact-text").textContent = t.contact.text;

    var wrap = document.getElementById("contact-list");
    wrap.innerHTML = "";

    var rows = [
      { label: t.contact.emailLabel, value: SITE.email, href: "mailto:" + SITE.email },
      { label: t.contact.linkedinLabel, value: "linkedin.com/in/alice-perim", href: SITE.linkedin },
      { label: t.contact.githubLabel, value: "github.com/aliceperim", href: SITE.github },
      { label: t.contact.locationLabel, value: t.hero.location, href: null },
    ];

    rows.forEach(function (row) {
      var item = el("div", "contact-item");
      item.appendChild(el("span", "contact-label", row.label));
      if (row.href) {
        var a = el("a", "contact-value", row.value);
        a.href = row.href;
        if (row.href.indexOf("http") === 0) {
          a.target = "_blank";
          a.rel = "noopener";
        }
        item.appendChild(a);
      } else {
        item.appendChild(el("span", "contact-value", row.value));
      }
      wrap.appendChild(item);
    });

    var emailCta = document.getElementById("contact-email-cta");
    emailCta.textContent = t.contact.emailCta;
    emailCta.href = "mailto:" + SITE.email;
  }

  function renderNav(t) {
    document.getElementById("nav-about").textContent = t.nav.about;
    document.getElementById("nav-skills").textContent = t.nav.skills;
    document.getElementById("nav-experience").textContent = t.nav.experience;
    document.getElementById("nav-education").textContent = t.nav.education;
    document.getElementById("nav-projects").textContent = t.nav.projects;
    document.getElementById("nav-contact").textContent = t.nav.contact;
    document.getElementById("nav-resume").textContent = t.nav.resume;
  }

  function renderFooter(t) {
    document.getElementById("footer-rights").textContent =
      new Date().getFullYear() + " Alice Perim Borges. " + t.footer.rights;
    document.getElementById("footer-built").textContent = t.footer.builtWith;
  }

  function applyStaticLinks() {
    document.getElementById("hero-cta-resume").href = SITE.resumeFile;
    document.getElementById("nav-resume").href = SITE.resumeFile;
  }

  function render() {
    var t = CONTENT[state.lang];
    document.documentElement.lang = state.lang === "pt" ? "pt-BR" : "en";
    document.title = t.meta.title;
    var metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute("content", t.meta.description);

    renderNav(t);
    renderHero(t);
    renderAbout(t);
    renderSkills(t);
    renderExperience(t);
    renderEducation(t);
    renderProjects(t);
    renderContact(t);
    renderFooter(t);
    applyStaticLinks();

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
    var targets = document.querySelectorAll("[data-reveal]");
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

  function initYear() {
    var yearEl = document.getElementById("footer-year");
    if (yearEl) yearEl.textContent = new Date().getFullYear();
  }

  document.addEventListener("DOMContentLoaded", function () {
    initLangSwitch();
    initNavToggle();
    initHeaderShadow();
    render();
  });
})();

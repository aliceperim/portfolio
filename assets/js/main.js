/* Renderização da página inicial (Home). Depende de common.js e content.js. */
(function () {
  "use strict";

  var el = Site.el;

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

  function renderProjectsTeaser(t) {
    document.getElementById("projects-kicker").textContent = t.projects.kicker;
    document.getElementById("projects-title").textContent = t.projects.title;
    document.getElementById("projects-teaser-text").textContent = t.projects.teaserText;
    var cta = document.getElementById("projects-teaser-cta");
    cta.textContent = t.projects.viewAllCta;
    cta.href = "projects.html";
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

  function renderHome(t) {
    renderHero(t);
    renderAbout(t);
    renderSkills(t);
    renderExperience(t);
    renderEducation(t);
    renderProjectsTeaser(t);
    renderContact(t);
  }

  Site.init(renderHome);
})();

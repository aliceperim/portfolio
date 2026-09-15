/* Renderização da página de Projetos. Depende de common.js e content.js. */
(function () {
  "use strict";

  function renderProjectsPage(t) {
    document.getElementById("projects-kicker").textContent = t.projects.kicker;
    document.getElementById("projects-title").textContent = t.projects.title;
    document.getElementById("projects-subtitle").textContent = t.projects.subtitle;
    document.getElementById("projects-coming-title").textContent = t.projects.comingSoonTitle;
    document.getElementById("projects-coming-text").textContent = t.projects.comingSoonText;
    document.getElementById("projects-back-home").textContent = t.projects.backHome;

    var ghBtn = document.getElementById("projects-github-cta");
    ghBtn.textContent = t.projects.githubCta;
    ghBtn.href = SITE.github;
  }

  Site.init(renderProjectsPage);
})();

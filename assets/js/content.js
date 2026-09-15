/* Conteúdo bilíngue do portfólio — edite aqui para atualizar textos ou adicionar projetos. */
const CONTENT = {
  pt: {
    meta: {
      title: "Alice Perim Borges — Analista de TI Pleno | Backend Developer",
      description:
        "Portfólio de Alice Perim Borges, Analista de TI Pleno e Backend Developer especializada em Python, Azure e GCP.",
    },
    nav: {
      about: "Sobre",
      skills: "Habilidades",
      experience: "Experiência",
      education: "Formação",
      projects: "Projetos",
      contact: "Contato",
      resume: "Currículo",
    },
    hero: {
      eyebrow: "Olá, eu sou",
      name: "Alice Perim Borges",
      role: "Analista de TI Pleno · Backend Developer",
      tagline:
        "Construo APIs, automações e integrações que reduzem trabalho manual e mantêm sistemas rodando com performance — com Python, Azure e GCP.",
      ctaProjects: "Ver projetos",
      ctaContact: "Fale comigo",
      ctaResume: "Baixar currículo",
      location: "Serra, ES — Brasil",
      codeCardTitle: "perfil.py",
    },
    about: {
      title: "Sobre mim",
      kicker: "Resumo profissional",
      text: "Analista de TI Pleno com mais de 3 anos de atuação na área de tecnologia, com foco em desenvolvimento backend, automação de processos e integração de sistemas. Experiência sólida no desenvolvimento e manutenção de REST APIs (Python/Flask/FastAPI), gestão de bancos de dados SQL e NoSQL, e deploy em cloud (Azure e GCP). Perfil analítico com histórico comprovado em redução de trabalho manual através de automações, melhoria de processos internos e suporte técnico a equipes multidisciplinares. Atualmente cursando Sistemas de Informação (FAESA) e em busca de oportunidades que permitam aprofundar a atuação em engenharia de software e arquitetura de sistemas.",
      highlights: [
        { label: "3+ anos", value: "em tecnologia" },
        { label: "Backend", value: "Python · Flask · FastAPI" },
        { label: "Cloud", value: "Azure & GCP" },
        { label: "Idiomas", value: "PT nativo · EN B2" },
      ],
    },
    skills: {
      title: "Habilidades técnicas",
      kicker: "Stack",
      groups: [
        {
          name: "Linguagens",
          items: ["Python", "JavaScript", "TypeScript", "Dart", "SQL", "Java", "Go"],
        },
        {
          name: "Frameworks & Bibliotecas",
          items: [
            "Flask",
            "FastAPI",
            "Django",
            "Node.js",
            "Next.js",
            "Pandas",
            "Selenium",
            "APIs REST (Node.js & Python)",
            "Webhooks em Larga Escala",
          ],
        },
        {
          name: "Banco de Dados",
          items: ["SQL Server", "MySQL", "PostgreSQL", "Redis (Cache)", "Firebase (NoSQL)", "MongoDB", "BigQuery"],
        },
        {
          name: "Cloud & DevOps",
          items: ["Microsoft Azure", "Google Cloud Platform", "Oracle Cloud Infrastructure (OCI)", "Jira"],
        },
        {
          name: "Infraestrutura & Observabilidade",
          items: ["Linux", "Docker", "Máquinas Virtuais (OCI)", "Grafana", "Zabbix"],
        },
        {
          name: "Low-Code & Automação",
          items: ["FlutterFlow", "Make (Integromat)", "N8N", "Zapier", "TakeBlip"],
        },
        {
          name: "Análise de Dados",
          items: ["Power BI", "Looker", "Google Analytics (GA4)", "Google Tag Manager"],
        },
      ],
    },
    experience: {
      title: "Experiência profissional",
      kicker: "Trajetória",
      items: [
        {
          role: "Analista de TI Pleno",
          company: "Unit",
          location: "Vitória, ES",
          period: "Ago/2025 — Atual",
          current: true,
          bullets: [
            "Desenvolvimento e manutenção de REST APIs em Python (Flask e FastAPI), com deploy e gerenciamento em Azure, garantindo disponibilidade e performance dos serviços",
            "Integração entre sistemas internos via APIs, processamento de scripts automatizados e conexão com múltiplas fontes de dados",
            "Criação e manutenção de aplicações em FlutterFlow com foco em experiência do usuário, atendendo usuários internos e externos",
            "Administração de bancos de dados SQL Server e Firebase (NoSQL), incluindo modelagem, consultas otimizadas e procedures",
            "Desenvolvimento de automações de processos com Python e Make, reduzindo tarefas manuais e aumentando a eficiência operacional",
            "Gestão do sistema Jira para organização de demandas e acompanhamento de sprints da equipe de TI",
            "Treinamento e mentoria de novos colaboradores na área de desenvolvimento",
          ],
        },
        {
          role: "Analista de TI Júnior",
          company: "Unit",
          location: "Vitória, ES",
          period: "Nov/2024 — Ago/2025",
          bullets: [
            "Desenvolvimento de aplicações e sistemas em plataformas Low-Code (FlutterFlow) e desenvolvimento backend com Dart, JavaScript e Node.js",
            "Criação e manutenção de bancos de dados NoSQL (Firebase) e SQL (SQL Server), incluindo modelagem e otimização de queries",
            "Automação e melhoria de processos utilizando Python, Azure Cloud e Flask",
            "Análise de dados e criação de dashboards com Power BI e Excel para suporte à tomada de decisão",
          ],
        },
        {
          role: "Assistente de TI",
          company: "Unit",
          location: "Vitória, ES",
          period: "Jan/2024 — Nov/2024",
          bullets: [
            "Suporte técnico a usuários internos e manutenção de sistemas web (JavaScript, HTML, CSS)",
            "Construção e edição de APIs com Node.js e Google Cloud, integração com bancos SQL e NoSQL",
            "Manutenção de aplicativo mobile e desenvolvimento de automações com Flutter, Python e Flask",
          ],
        },
        {
          role: "Analista de Inbound Marketing Jr",
          company: "Unit",
          location: "Espírito Santo",
          period: "Jan/2023 — Dez/2023",
          bullets: [
            "Automação de fluxos de marketing utilizando Make e TakeBlip, otimizando processos de comunicação e reduzindo tempo de resposta",
            "Análise diária de tráfego e performance com Google Analytics (GA4), Tag Manager, Search Console, Looker e HubSpot",
            "Atuação em SEO, copywriting e WebDesign (Elementor), contribuindo para aumento de visibilidade orgânica",
          ],
        },
      ],
      otherTitle: "Trajetória adicional",
      other: [
        {
          role: "Estagiária de Segurança do Trabalho",
          company: "Vallourec South America",
          period: "Ago/2021 — Abr/2022",
        },
        {
          role: "Sales Account Executive",
          company: "LUMA Escola Individualizada",
          period: "Jan/2021 — Jul/2021",
        },
        {
          role: "Líder de Equipe de Atendimento ao Cliente",
          company: "AIESEC no Brasil",
          period: "Ago/2019 — Jan/2021",
        },
        {
          role: "Iniciação Científica — Gestão Pública na Economia Compartilhada",
          company: "UFES",
          period: "Ago/2018 — Jul/2019",
        },
        {
          role: "Gerente Geral de Operações",
          company: "SEPUFES",
          period: "Mar/2018 — Ago/2018",
        },
      ],
    },
    education: {
      title: "Formação acadêmica",
      kicker: "Educação",
      items: [
        {
          degree: "Bacharelado em Sistemas de Informação",
          institution: "FAESA (EAD)",
          period: "Fev/2025 — Dez/2028 (previsto)",
        },
        {
          degree: "Engenharia de Produção (incompleto — até 7º período)",
          institution: "Universidade Federal do Espírito Santo (UFES)",
          period: "Ago/2017 — Dez/2024",
        },
      ],
      certTitle: "Certificações",
      certifications: [
        { name: "Microsserviços: Padrões de Projeto", issuer: "Alura", date: "Nov/2025" },
        { name: "Soft Skills para Desenvolvedores", issuer: "Comunidade sem Codar", date: "Set/2024" },
        { name: "Fundamentos de Python", issuer: "DIO", date: "Jun/2024" },
        { name: "Fundamentos de Modelagem e Projeto de Banco de Dados", issuer: "DIO", date: "Jan/2024" },
        { name: "Arquitetura de Banco de Dados", issuer: "DIO", date: "Jan/2024" },
        { name: "Gestão Ágil com Scrum", issuer: "DIO", date: "" },
        { name: "Introdução ao Git e GitHub", issuer: "DIO", date: "" },
        { name: "Marketing Digital", issuer: "RD University", date: "" },
      ],
    },
    projects: {
      title: "Projetos",
      kicker: "Portfólio",
      subtitle: "Em breve: estudos de caso e projetos pessoais em Python, APIs e automações.",
      comingSoonTitle: "Em construção",
      comingSoonText: "Novos projetos serão adicionados aqui em breve. Enquanto isso, confira meu código no GitHub.",
      githubCta: "Ver GitHub",
    },
    contact: {
      title: "Vamos conversar",
      kicker: "Contato",
      text: "Aberta a oportunidades como Analista de TI, Backend Developer ou funções que envolvam engenharia de software, automação e cloud. Entre em contato.",
      emailLabel: "E-mail",
      linkedinLabel: "LinkedIn",
      githubLabel: "GitHub",
      locationLabel: "Localização",
      emailCta: "Enviar e-mail",
    },
    footer: {
      rights: "Todos os direitos reservados.",
      builtWith: "Feito com HTML, CSS e JavaScript.",
    },
  },

  en: {
    meta: {
      title: "Alice Perim Borges — Mid-level IT Analyst | Backend Developer",
      description:
        "Portfolio of Alice Perim Borges, Mid-level IT Analyst and Backend Developer specialized in Python, Azure and GCP.",
    },
    nav: {
      about: "About",
      skills: "Skills",
      experience: "Experience",
      education: "Education",
      projects: "Projects",
      contact: "Contact",
      resume: "Resume",
    },
    hero: {
      eyebrow: "Hi, I'm",
      name: "Alice Perim Borges",
      role: "Mid-level IT Analyst · Backend Developer",
      tagline:
        "I build APIs, automations and integrations that cut manual work and keep systems running with performance — using Python, Azure and GCP.",
      ctaProjects: "View projects",
      ctaContact: "Get in touch",
      ctaResume: "Download resume",
      location: "Serra, ES — Brazil",
      codeCardTitle: "profile.py",
    },
    about: {
      title: "About me",
      kicker: "Professional summary",
      text: "Mid-level IT Analyst with over 3 years of experience in technology, focused on backend development, process automation, and systems integration. Solid experience building and maintaining REST APIs (Python/Flask/FastAPI), managing SQL and NoSQL databases, and deploying to the cloud (Azure and GCP). Analytical profile with a proven track record of reducing manual work through automation, improving internal processes, and providing technical support to cross-functional teams. Currently pursuing a degree in Information Systems (FAESA) and looking for opportunities to deepen expertise in software engineering and systems architecture.",
      highlights: [
        { label: "3+ years", value: "in technology" },
        { label: "Backend", value: "Python · Flask · FastAPI" },
        { label: "Cloud", value: "Azure & GCP" },
        { label: "Languages", value: "PT native · EN B2" },
      ],
    },
    skills: {
      title: "Technical skills",
      kicker: "Stack",
      groups: [
        {
          name: "Languages",
          items: ["Python", "JavaScript", "TypeScript", "Dart", "SQL", "Java", "Go"],
        },
        {
          name: "Frameworks & Libraries",
          items: [
            "Flask",
            "FastAPI",
            "Django",
            "Node.js",
            "Next.js",
            "Pandas",
            "Selenium",
            "REST APIs (Node.js & Python)",
            "Large-Scale Webhook Handling",
          ],
        },
        {
          name: "Databases",
          items: ["SQL Server", "MySQL", "PostgreSQL", "Redis (Cache)", "Firebase (NoSQL)", "MongoDB", "BigQuery"],
        },
        {
          name: "Cloud & DevOps",
          items: ["Microsoft Azure", "Google Cloud Platform", "Oracle Cloud Infrastructure (OCI)", "Jira"],
        },
        {
          name: "Infrastructure & Observability",
          items: ["Linux", "Docker", "Virtual Machines (OCI)", "Grafana", "Zabbix"],
        },
        {
          name: "Low-Code & Automation",
          items: ["FlutterFlow", "Make (Integromat)", "N8N", "Zapier", "TakeBlip"],
        },
        {
          name: "Data Analysis",
          items: ["Power BI", "Looker", "Google Analytics (GA4)", "Google Tag Manager"],
        },
      ],
    },
    experience: {
      title: "Professional experience",
      kicker: "Journey",
      items: [
        {
          role: "Mid-level IT Analyst",
          company: "Unit",
          location: "Vitória, ES",
          period: "Aug/2025 — Present",
          current: true,
          bullets: [
            "Developed and maintained REST APIs in Python (Flask and FastAPI), deploying and managing them on Azure, ensuring service availability and performance",
            "Integrated internal systems via APIs, automated script processing, and connected multiple data sources",
            "Built and maintained FlutterFlow applications focused on user experience, serving internal and external users",
            "Administered SQL Server and Firebase (NoSQL) databases, including modeling, query optimization, and stored procedures",
            "Developed process automations with Python and Make, reducing manual tasks and increasing operational efficiency",
            "Managed Jira for demand organization and sprint tracking for the IT team",
            "Trained and mentored new team members in development",
          ],
        },
        {
          role: "Junior IT Analyst",
          company: "Unit",
          location: "Vitória, ES",
          period: "Nov/2024 — Aug/2025",
          bullets: [
            "Developed applications on low-code platforms (FlutterFlow) and backend development with Dart, JavaScript, and Node.js",
            "Created and maintained NoSQL (Firebase) and SQL (SQL Server) databases, including modeling and query optimization",
            "Automated and improved processes using Python, Azure Cloud, and Flask",
            "Analyzed data and built dashboards with Power BI and Excel to support decision-making",
          ],
        },
        {
          role: "IT Assistant",
          company: "Unit",
          location: "Vitória, ES",
          period: "Jan/2024 — Nov/2024",
          bullets: [
            "Provided technical support to internal users and maintained web systems (JavaScript, HTML, CSS)",
            "Built and edited APIs with Node.js and Google Cloud, integrating SQL and NoSQL databases",
            "Maintained a mobile application and developed automations with Flutter, Python, and Flask",
          ],
        },
        {
          role: "Junior Inbound Marketing Analyst",
          company: "Unit",
          location: "Espírito Santo",
          period: "Jan/2023 — Dec/2023",
          bullets: [
            "Automated marketing workflows using Make and TakeBlip, streamlining communication processes and reducing response time",
            "Performed daily traffic and performance analysis with Google Analytics (GA4), Tag Manager, Search Console, Looker, and HubSpot",
            "Worked on SEO, copywriting, and web design (Elementor), contributing to increased organic visibility",
          ],
        },
      ],
      otherTitle: "Additional background",
      other: [
        {
          role: "Occupational Safety Intern",
          company: "Vallourec South America",
          period: "Aug/2021 — Apr/2022",
        },
        {
          role: "Sales Account Executive",
          company: "LUMA Escola Individualizada",
          period: "Jan/2021 — Jul/2021",
        },
        {
          role: "Customer Service Team Leader",
          company: "AIESEC in Brazil",
          period: "Aug/2019 — Jan/2021",
        },
        {
          role: "Undergraduate Research — Public Management in the Sharing Economy",
          company: "UFES",
          period: "Aug/2018 — Jul/2019",
        },
        {
          role: "General Operations Manager",
          company: "SEPUFES",
          period: "Mar/2018 — Aug/2018",
        },
      ],
    },
    education: {
      title: "Education",
      kicker: "Academic background",
      items: [
        {
          degree: "B.Sc. in Information Systems",
          institution: "FAESA (Distance Learning)",
          period: "Feb/2025 — Dec/2028 (expected)",
        },
        {
          degree: "Industrial Engineering (incomplete — through 7th semester)",
          institution: "Federal University of Espírito Santo (UFES)",
          period: "Aug/2017 — Dec/2024",
        },
      ],
      certTitle: "Certifications",
      certifications: [
        { name: "Microservices: Design Patterns", issuer: "Alura", date: "Nov/2025" },
        { name: "Soft Skills for Developers", issuer: "Comunidade sem Codar", date: "Sep/2024" },
        { name: "Python Fundamentals", issuer: "DIO", date: "Jun/2024" },
        { name: "Database Modeling & Design Fundamentals", issuer: "DIO", date: "Jan/2024" },
        { name: "Database Architecture", issuer: "DIO", date: "Jan/2024" },
        { name: "Agile Management with Scrum", issuer: "DIO", date: "" },
        { name: "Introduction to Git and GitHub", issuer: "DIO", date: "" },
        { name: "Digital Marketing", issuer: "RD University", date: "" },
      ],
    },
    projects: {
      title: "Projects",
      kicker: "Portfolio",
      subtitle: "Coming soon: case studies and personal projects in Python, APIs and automation.",
      comingSoonTitle: "Under construction",
      comingSoonText: "New projects will be added here soon. In the meantime, check out my code on GitHub.",
      githubCta: "View GitHub",
    },
    contact: {
      title: "Let's talk",
      kicker: "Contact",
      text: "Open to opportunities as an IT Analyst, Backend Developer, or roles involving software engineering, automation, and cloud. Get in touch.",
      emailLabel: "Email",
      linkedinLabel: "LinkedIn",
      githubLabel: "GitHub",
      locationLabel: "Location",
      emailCta: "Send email",
    },
    footer: {
      rights: "All rights reserved.",
      builtWith: "Built with HTML, CSS and JavaScript.",
    },
  },
};

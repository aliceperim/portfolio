# Portfólio — Alice Perim Borges

Site pessoal / portfólio, bilíngue (PT-BR / EN), feito em HTML, CSS e JavaScript puros — sem build step, sem dependências de framework.

## Estrutura

```
index.html                     # marcação e estrutura das seções
assets/css/style.css           # estilos (tema dark)
assets/js/content.js           # todo o conteúdo textual, em PT e EN
assets/js/main.js              # renderização, troca de idioma e interações
assets/files/                  # currículo em PDF para download
assets/img/                    # favicon
```

## Editar conteúdo

Todo o texto do site (hero, sobre, skills, experiência, formação, projetos, contato) vive em
[`assets/js/content.js`](assets/js/content.js), dentro do objeto `CONTENT`, com uma chave `pt` e uma `en`.
Basta editar os textos ali — o HTML não precisa mudar.

## Adicionar projetos

A seção "Projetos" está com um placeholder de "em construção". Quando tiver projetos para mostrar:

1. Adicione um array `projects.items` em cada idioma dentro de `content.js` (título, descrição, tags, link, imagem).
2. Ajuste `renderProjects` em `assets/js/main.js` para montar os cards a partir desse array.

## Rodar localmente

Não precisa de instalação. Basta abrir `index.html` no navegador, ou servir a pasta com qualquer servidor estático, por exemplo:

```bash
npx serve .
```

## Deploy

Site 100% estático — funciona em GitHub Pages, Vercel ou Netlify sem nenhuma configuração de build.

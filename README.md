# Personal Website (Jekyll, ES/EN)

A Jekyll site — every page is a `.md` file, ready to publish with GitHub Pages
(no custom build step needed; GitHub builds Jekyll sites automatically).

## Structure

```
web/
├── _config.yml         Site settings, the "projects" collection, layout defaults
├── _data/categories.yml Project-type sections shown on the Home page
├── _layouts/           default, home, project, entry (see "How pages fit together")
├── _includes/          header.html, footer.html (nav + language toggle, shared by every page)
├── index.md            Home: hero + About Me summary + generated project sections
├── about.md             Full About Me page
├── contact.md            Contact info + message form
├── _projects/           One folder per project (see below)
├── assets/
│   ├── css/style.css
│   ├── js/main.js       Language switch + mobile nav toggle
│   └── images/
├── Gemfile               Pins the exact gems GitHub Pages builds with
└── .gitignore
```

## Projects: one folder each, with their own blog entries

```
_projects/
├── web-development/
│   ├── index.md                              <- project overview page
│   ├── 2026-01-05-arranque-del-proyecto.md    <- blog entry
│   └── 2026-02-10-primera-actualizacion.md    <- blog entry
├── data-analysis/
│   ├── index.md
│   └── 2026-01-20-primera-entrada.md
└── design-prototyping/
    ├── index.md
    └── 2026-01-25-primera-entrada.md
```

**To add a new project:** create a new folder under `_projects/<slug>/` with an
`index.md` inside. Copy the front matter from an existing `index.md`:

```yaml
---
layout: project
permalink: /projects/<slug>/
category: web-development   # must match a "slug" in _data/categories.yml
title: "Plain fallback title (used only in the browser tab)"
title_es: "Título en Español"
title_en: "Title in English"
summary_es: "Resumen corto en español (se muestra en la tarjeta de Inicio)."
summary_en: "Short summary in English (shown on the Home page card)."
tags: [HTML, CSS, JavaScript]
date: 2026-01-01
---
```
Then write the project's overview in the body, using the bilingual pattern below.
It will automatically show up on the Home page under the matching category, and
get its own page at `/projects/<slug>/`.

**To add a blog entry to a project:** add a new `.md` file inside that project's
folder (filename doesn't matter to Jekyll, but a `YYYY-MM-DD-slug.md` name keeps
them easy to sort by eye). Front matter only needs:

```yaml
---
title: "Plain fallback title"
title_es: "Título de la entrada"
title_en: "Entry title"
summary_es: "Resumen corto para el listado."
summary_en: "Short summary for the listing."
date: 2026-03-01
---
```
No `layout:` needed — entries default to the `entry` layout automatically. The
project's page lists its entries newest-first automatically; nothing else to wire up.

**To add a new category/project type:** add a block to `_data/categories.yml`
with a `slug`, `es`/`en` names and `desc_es`/`desc_en` descriptions, then use
that `slug` as the `category:` value in a project's `index.md`.

## Bilingual content (ES/EN) in one file

Every page is a single `.md` file — not two. Plain text (titles, labels, short
strings) is wrapped in `<span class="es">`/`<span class="en">` pairs:

```html
<h1><span class="es">Hola</span><span class="en">Hello</span></h1>
```

Longer prose (bios, project descriptions, blog entry bodies) uses a `<div
markdown="1">` wrapper instead, so you can keep writing normal Markdown
(headings, lists, bold, links) inside it:

```markdown
<div class="es" markdown="1">
Contenido en **Markdown** normal, con listas, enlaces, etc.

</div>

<div class="en" markdown="1">
Normal **Markdown** content, with lists, links, etc.

</div>
```

**Important:** these `<div markdown="1">` tags must start at the very
beginning of the line (no leading spaces/indentation) and have a blank line
before the closing `</div>`, or Kramdown (Jekyll's Markdown processor) won't
parse the Markdown inside correctly.

CSS hides whichever language isn't active based on `<html lang="...">`, and
`assets/js/main.js` sets that attribute when you click the ES/EN buttons,
remembering your choice in `localStorage`. For non-text attributes (image
`alt`, form `placeholder`), use `data-es`/`data-en` + `data-attr="..."` — see
the `<img>` tags or the contact form for examples.

## How the pages fit together (layouts)

- `_layouts/default.html` — the outer shell: `<head>`, header, `{{ content }}`, footer, scripts. Every layout below chains into this one.
- `_layouts/home.html` — used by `index.md`. Renders the hero/About summary (the page's own Markdown content), then loops over `_data/categories.yml` and `_projects/*/index.md` to build the project-type sections.
- `_layouts/project.html` — used by each project's `index.md`. Renders the overview content, then lists that project's blog entries (found automatically by matching folder name), newest first.
- `_layouts/entry.html` — used by each blog entry. Renders a "back to project" link, the date, and the entry content.

## Running locally

```bash
bundle install    # first time only
bundle exec jekyll serve
```
Then open `http://localhost:4000`. Jekyll rebuilds automatically while `serve`
is running whenever you save a file.

If you don't have Ruby/Jekyll installed yet, see
[jekyllrb.com/docs/installation](https://jekyllrb.com/docs/installation/) for
your OS. On Windows, installing "Ruby+Devkit" via
[RubyInstaller](https://rubyinstaller.org/) is the easiest route.

## Deploying to GitHub Pages

1. Create a new GitHub repository and push this folder to it (commit
   everything except what's in `.gitignore` — `_site/`, `Gemfile.lock`, etc.
   are generated/local-only and shouldn't be committed).
2. In the repo, go to **Settings → Pages**.
3. Under "Build and deployment", set **Source** to "Deploy from a branch",
   pick the `main` branch and `/ (root)` folder.
4. Save — GitHub will run Jekyll automatically and publish at
   `https://<your-username>.github.io/<repo-name>/`.

If the site is published under a repo sub-path (not a `<user>.github.io` root
repo), set `baseurl: "/<repo-name>"` in `_config.yml` first.

## Customizing

- **Name, hero text, contact links:** edit `_config.yml` (`name_es`/`name_en`,
  `social:`) and the content of `index.md`, `about.md`, `contact.md` directly.
- **Photos:** replace `assets/images/profile-placeholder.svg` and
  `avatar-placeholder.svg`, then update the `src` attributes referencing them.
- **Contact form:** currently has no backend (`action="#"`). Point `action` at
  a service like [Formspree](https://formspree.io) or replace it with a
  `mailto:` link.
- **Colors/fonts:** CSS variables at the top of `assets/css/style.css`.

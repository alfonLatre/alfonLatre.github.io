# Personal Website (ES/EN)

A static personal portfolio site — plain HTML, CSS and JavaScript, no build tools, no
frameworks. Ready to publish with GitHub Pages.

## Structure

```
web/
├── index.html      Home: hero, About Me summary, project sections
├── about.html      Full About Me page (bio, skills, timeline)
├── contact.html    Contact info + message form
├── css/style.css   All styles
├── js/main.js      Language switch + mobile nav toggle
└── assets/images/  Photos (replace the placeholders here)
```

## How the ES/EN language switch works

There is **one HTML file per page** (not two). Every piece of text appears twice inside
the same element, wrapped in `<span class="es">…</span>` and `<span class="en">…</span>`:

```html
<h1>
  <span class="es">Tu Título Profesional</span>
  <span class="en">Your Professional Title</span>
</h1>
```

CSS hides whichever language isn't active, based on the `lang` attribute on `<html>`:

```css
html[lang="es"] .en { display: none; }
html[lang="en"] .es { display: none; }
```

`js/main.js` sets `<html lang="...">` when you click the ES/EN buttons, remembers your
choice in `localStorage`, and defaults to the visitor's browser language on first visit.

For things that aren't plain text (image `alt`, input `placeholder`), use `data-es` /
`data-en` + `data-attr="alt"` (or `"placeholder"`) on the element instead — see the photo
`<img>` tags and the contact form for examples.

**To add or edit content:** just edit the `.es` / `.en` spans directly in the HTML. There
is no separate translation file to keep in sync.

## Customizing

- **Name, title, bio, photos:** edit `index.html` and `about.html` directly, and drop your
  own photos into `assets/images/` (replace `profile-placeholder.svg` and
  `avatar-placeholder.svg`, then update the `src` attributes).
- **Projects:** in `index.html`, each project type is a `<div class="project-category">`
  block. Duplicate a whole block to add a new category, or duplicate a
  `<article class="project-card">` to add a project inside an existing category.
- **Contact info:** edit the email/LinkedIn/GitHub links in `contact.html` and in the
  footer of every page.
- **Contact form:** the form currently has no backend (`action="#"`). To make it actually
  send messages, point `action` at a service like
  [Formspree](https://formspree.io) or [Getform](https://getform.io), or replace it with a
  `mailto:` link.
- **Colors/fonts:** all tweakable via the CSS variables at the top of `css/style.css`.

## Running locally

Just open `index.html` in a browser — no server required. If you'd rather preview it via
a local server (closer to how GitHub Pages serves it):

```bash
python -m http.server 8080
```

then open `http://localhost:8080`.

## Deploying to GitHub Pages

1. Create a new GitHub repository and push this folder to it.
2. In the repo, go to **Settings → Pages**.
3. Under "Build and deployment", set **Source** to "Deploy from a branch", pick the
   `main` branch and `/ (root)` folder.
4. Save — your site will be published at `https://<your-username>.github.io/<repo-name>/`.

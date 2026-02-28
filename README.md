Personal portfolio website — Freelance Data & Analytics Engineer.

## Stack

Vanilla HTML/CSS/JS, no framework, no build step. Two language versions:

- `/index.html` — French (root)
- `/en/index.html` — English

Shared assets: `css/styles.css`, `js/main.js`, `js/gtm-init.js`, `images/`, `favicon.svg`.

## Run locally

```bash
npx serve .
# or
python -m http.server 8000
```

## Deploy

Hosted on GitHub Pages with custom domain. Push to `main` → live at [mathieuberthier.com](https://mathieuberthier.com).

## Notes

- CSP is set via `<meta>` tag — update both HTML files when adding external resources.
- Content changes apply to **both** `index.html` and `en/index.html`.
- Google Analytics property: `G-Q8XF270962` (consent-gated via `js/gtm-init.js`).

# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal portfolio website for a freelance Data & Analytics Engineer. Static multi-page site built with vanilla HTML/CSS/JavaScript — no frameworks, no build tools, no package manager.

## Architecture

- **index.html** — French version (root, `lang="fr"`)
- **en/index.html** — English version (`lang="en"`, all asset paths use `../` prefix)
- **css/styles.css** — all styling, shared by both language versions
- **js/gtm-init.js** — Google Tag Manager consent defaults + gtag init, loaded synchronously before GTM script
- **js/main.js** — all interactive behavior (consent banner, navbar scroll, mobile menu, scroll reveal), loaded with `defer`
- **images/** — static assets (profile photo)
- **favicon.svg** — SVG favicon with the brand gradient
- **CNAME, sitemap.xml, robots.txt** — GitHub Pages hosting config and SEO

No build step. Open `index.html` directly or serve with any static file server.

### Page Sections (in order)

Navbar → Hero (`#top`) → Services (`#services`) → Expériences (`#experience`) → Use Cases (`#usecases`) → Contact (`#contact`) → Footer

The navbar includes a language switcher link (`/en/` ↔ `/`).

### JavaScript (js/main.js)

Single IIFE covering:
- **Consent banner**: reads `cookie_consent` from `localStorage`; shows banner after 800ms if no stored value; updates `gtag('consent', 'update', ...)` on accept/deny
- **Navbar scroll**: adds `navbar-scrolled` class, toggles `nav-links-pill` on scroll > 50px (throttled via `requestAnimationFrame`)
- **Mobile menu**: open/close via `#menuToggle` / `#mobileMenuClose`, auto-closes on link click
- **Scroll reveal**: `IntersectionObserver` adds `.revealed` to `.service-card`, `.experience-card`, `.usecase-card` (threshold 0.1, rootMargin bottom -50px), then unobserves

### Hosting & SEO

- Hosted on **GitHub Pages** with custom domain `mathieuberthier.com` (see `CNAME`)
- CSP set via `<meta http-equiv="Content-Security-Policy">` — update both `index.html` and `en/index.html` when adding external resources
- `hreflang` alternate links in both pages for FR/EN
- Open Graph meta tags and JSON-LD structured data (`Person` schema) in `<head>` of both pages
- GTM property ID: `G-Q8XF270962`

## Design System

- **Fonts**: Outfit (body, weights 300–700), Ovo (serif accents) via Google Fonts
- **Colors**: primary gradient `#b820e6` → `#da7d20`, accent `#7c3aed`, highlight `#a3e635`, dark `#1a1a1a`
- **Layout**: CSS Grid for card grids, Flexbox for alignment, glass-morphism navbar
- **Animations**: hover lift (`translateY(-4px)`) on cards, scroll reveal via `.reveal`/`.revealed` classes, `prefers-reduced-motion` respected

## Language

- `index.html` is **French** — maintain French for all user-facing text in this file
- `en/index.html` is **English** — maintain English for all user-facing text in this file
- Content changes typically need to be applied to **both** files

## Current State

Draft version — some Use Cases cards still contain placeholder content. The `temp/` directory contains use case text drafts (untracked).

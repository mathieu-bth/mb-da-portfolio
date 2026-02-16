# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal portfolio website for a freelance Data & Analytics Engineer. Static single-page site built with vanilla HTML/CSS/JavaScript — no frameworks, no build tools, no package manager.

## Architecture

- **index.html** — entire site in one file: HTML structure + inline `<script>` at bottom of `<body>`
- **css/styles.css** — all styling, mobile-first responsive design with breakpoints at 480/768/1024/1280px
- **images/** — static assets (profile photo)
- **favicon.svg** — SVG favicon with the brand gradient
- **CNAME, sitemap.xml, robots.txt** — GitHub Pages hosting config and SEO

No build step. Open `index.html` directly or serve with any static file server.

### Page Sections (in order)

Navbar → Hero (`#top`) → Services (`#services`) → Expériences (`#experience`) → Use Cases (`#usecases`) → Contact (`#contact`) → Footer

### JavaScript Behavior (inline in index.html)

All JS is in a single IIFE at the end of `<body>`:
- **Navbar scroll**: adds `navbar-scrolled` class and toggles `nav-links-pill` class on scroll (throttled via `requestAnimationFrame`)
- **Mobile menu**: open/close via `#menuToggle` / `#mobileMenuClose`, auto-closes on link click
- **Scroll reveal**: `IntersectionObserver` adds `.revealed` to `.service-card`, `.experience-card`, `.usecase-card` elements (threshold 0.1, bottom margin -50px), then unobserves

### Hosting & SEO

- Hosted on **GitHub Pages** with custom domain `mathieuberthier.com` (see `CNAME`)
- Content Security Policy set via `<meta http-equiv="Content-Security-Policy">` — update if adding external scripts/resources
- Open Graph meta tags and JSON-LD structured data (`Person` schema) in `<head>`
- `robots.txt` blocks specific AI/SEO bots while allowing standard crawlers

## Design System

- **Fonts**: Outfit (body, weights 300–700), Ovo (serif accents) via Google Fonts
- **Colors**: primary gradient `#b820e6` → `#da7d20`, accent `#7c3aed`, highlight `#a3e635`, dark `#1a1a1a`
- **Layout**: CSS Grid for card grids, Flexbox for alignment, glass-morphism navbar
- **Animations**: hover lift (`translateY(-4px)`) on cards, scroll reveal via `.reveal`/`.revealed` classes, `prefers-reduced-motion` respected

## Language

All content is in **French**. Maintain French for any user-facing text.

## Current State

Draft version — some Use Cases cards still contain placeholder content. The `temp/` directory contains use case text drafts (untracked).

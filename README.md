# Kacper Grabarczyk Data Specialist

Personal portfolio, technical blog and brand site for Kacper Grabarczyk / DaneDaneTech built with Astro.

## What is this project?

This project is a lightweight static website for a data specialist profile. It includes:

- home page with professional introduction,
- portfolio section driven by content collections,
- technical blog built with Astro Content Collections and Markdown,
- about page based on the professional profile,
- contact page with professional links,
- SEO basics: title, description, canonical, Open Graph, sitemap, RSS,
- responsive and accessible design system based on the DaneDaneTech visual direction.

## Stack

- Astro
- TypeScript
- Markdown / MDX content collections
- CSS custom properties (no heavy CSS framework)
- static site generation

## Requirements

- Node.js 22.12.0 or newer
- npm

## Install dependencies

```bash
npm install
```

## Run development server

```bash
npm run dev
```

The site will be available at http://localhost:4321.

## Production build

```bash
npm run build
```

## Preview production build

```bash
npm run preview
```

## Type check

```bash
npm run typecheck
```

## Project structure

```text
src/
  components/
  content/
    blog/
    projects/
  layouts/
  pages/
  styles/
public/
brand-reference/
```

## Adding a blog post

Create a folder under `src/content/blog/` with an `index.md` file and optional images inside the same folder.

Example:

```text
src/content/blog/
  sql-window-functions/
    index.md
    cover.webp
```

The post frontmatter should include:

```yaml
---
title: "Your title"
description: "Short summary"
date: 2024-01-12
category: dane
tags: ["SQL", "Python"]
cover: ./cover.webp
draft: false
featured: false
---
```

Important rules:

- `draft: true` hides the post from production builds.
- `category` is required: `dane`, `geek` or `ai`. It selects the Dane, Geek or AI section.
- `/blog` lists all published posts. Sections live at `/blog/kategoria/dane/`, `/blog/kategoria/geek/` and `/blog/kategoria/ai/`.
- Category pages exist even when empty. Drafts are excluded from lists, counts, individual pages and RSS.
- place related images next to the article folder.
- prefer local images, not remote placeholders.

## Adding a project

Create a Markdown or MDX file in `src/content/projects/`. You can also use a folder with `index.md` and local images, just like a blog post:

```text
src/content/projects/
  my-project/
    index.md
    cover.webp
```

The existing flat `.md` files still work. Do not create both `my-project.md` and `my-project/index.md`: they share the same URL.

Example:

```yaml
---
title: "Project title"
description: "Short summary"
date: 2024-03-21
tags: ["SQL", "Power BI"]
technologies: ["SQL", "Power BI", "Python"]
featured: true
featuredOrder: 1
draft: false
githubUrl: "https://github.com/your-user/project"
demoUrl: "https://example.com"
---

## Cel projektu

Describe the problem and context.

## Rozwiązanie

Describe your contribution, tools and implementation. Add local images using Markdown with descriptive alt text.

## Efekt i dalszy rozwój

Separate completed features from planned work.
```

A card and a full project page at `/portfolio/my-project/` are generated automatically. `description` is a short summary for the card; the Markdown body is the full project description. Optional `cover: ./cover.webp` adds a cover image. GitHub and demo links are optional; omit them for private projects. `draft: true` hides the project from the listing, landing page and individual routes.

### Wybór projektów na stronie głównej

W metadanych dwóch lub trzech wybranych projektów ustaw:

```yaml
featured: true
featuredOrder: 1
```

- `featured: true` oznacza pokazanie projektu na landing page. `false` pozostawia go wyłącznie w portfolio.
- Ustaw kolejno `featuredOrder: 1`, `2`, `3`. Mniejsza liczba oznacza wcześniejszą pozycję.
- Landing pokazuje maksymalnie 3 opublikowane projekty. Jeśli wyróżnisz tylko 2, pokaże dokładnie 2.
- Gdy wyróżnisz więcej, wybrane zostaną pierwsze 3 według kolejności. Przy remisie decyduje nowsza data, następnie identyfikator.
- Domyślna kolejność to `100`. Brak wyróżnionych projektów ukrywa sekcję na stronie głównej.
- Pełna lista portfolio zawiera wszystkie opublikowane projekty, od najnowszych.

### Podsekcje bloga

W metadanych wpisu ustaw jedną kategorię:

```yaml
category: dane # dane, geek albo ai
```

Kategoria decyduje o podsekcji; `tags` nadal służą do opisu technologii i tematów. Zmiana kategorii nie zmienia adresu artykułu `/blog/<slug>/`. Nie trzeba przenosić plików do katalogów kategorii.

Test wyboru projektów: `npm test` (uruchamiany także w CI).

## Changing contact details

Edit values in `src/consts.ts`.

Update:

- GitHub URL
- LinkedIn URL
- YouTube URL
- email
- site title and description

## Design system and branding

Base styling lives in:

- `src/styles/global.css`
- `src/consts.ts`

The color palette is tuned around DaneDaneTech brand language: warm brown, burgundy, orange, cream, dark neutral text.

## Notes for future updates

- Do not invent biographical details, experience or project claims.
- Prefer simplicity over unnecessary abstraction.
- Do not add backend, database or auth features unless explicitly requested.
- Keep placeholders clearly labeled as TODO where real data is missing.

## Useful commands

```bash
npm run dev
npm run build
npm run preview
npm run typecheck
```

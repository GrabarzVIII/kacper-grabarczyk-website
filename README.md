# Kacper Grabarczyk Data Specialist

Personal portfolio, technical blog and brand site for Kacper Grabarczyk / DaneDaneTech built with Astro.

## What is this project?

This project is a lightweight static website for a data specialist profile. It includes:

- home page with professional introduction,
- portfolio section driven by content collections,
- technical blog built with Astro Content Collections and Markdown,
- about page with placeholders ready for future expansion,
- contact page with placeholder links,
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
tags: ["SQL", "Python"]
cover: ./cover.webp
draft: false
featured: false
---
```

Important rules:

- `draft: true` hides the post from production builds.
- place related images next to the article folder.
- prefer local images, not remote placeholders.

## Adding a project

Create a Markdown file in `src/content/projects/`.

Example:

```yaml
---
title: "Project title"
description: "Short summary"
date: 2024-03-21
tags: ["SQL", "Power BI"]
technologies: ["SQL", "Power BI", "Python"]
featured: true
draft: false
githubUrl: "https://github.com/your-user/project"
demoUrl: "https://example.com"
---
```

A project card will render automatically.

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


# AGENTS.md

## Project goal

Create and maintain a clean personal website for Kacper Grabarczyk / DaneDaneTech. The site should present professional information, technical writing, portfolio work, and a visible brand identity based on the existing DaneDaneTech assets.

## Tech stack

- Astro
- TypeScript
- static site generation
- Astro Content Collections
- Markdown / MDX for blog content
- CSS custom properties, no heavy CSS framework unless there is a clear need

## Project structure

- `src/components/` — reusable UI pieces
- `src/content/blog/` — blog posts and article assets
- `src/content/projects/` — portfolio entries
- `src/layouts/` — page-level layout wrappers
- `src/pages/` — routes
- `src/styles/` — design tokens and global styles
- `public/` — static assets and favicon
- `brand-reference/` — branding source materials; keep original files unchanged

## Design system rules

- Prefer simplicity over unnecessary abstraction.
- Keep the brand warm, professional and technology-oriented.
- Use a restrained custom palette inspired by DaneDaneTech: burgundy, deep brown, orange, cream, muted neutral text.
- Maintain sharp readability and accessible contrast.
- Keep the layout responsive from mobile up.

## Components

- Reuse simple, clear components.
- Favor practical structure over abstract wrappers.
- Keep pages easy to maintain for a non-frontend specialist.

## Blog content rules

- Posts live in `src/content/blog/<slug>/index.md`.
- Add related images beside the article folder.
- Keep `draft: true` posts out of production builds.
- Use local assets, not remote placeholders, where possible.
- Use cover images and responsive images with descriptive alt text.

## Portfolio rules

- Projects live in `src/content/projects/`.
- Use structured frontmatter for title, description, date, tags, technologies, cover, links, and `draft` status.
- Keep placeholder project entries clearly labeled as sample content until real content is added.

## Branding and assets

- Brand reference materials are a guide, not a constraint.
- Do not alter original files under `brand-reference/`.
- If an asset is used, copy it into the project as needed and keep the source unchanged.

## Architectural decisions

- Do not introduce a backend or database unless explicitly requested.
- Do not invent biographical information, professional experience, clients, projects or achievements for Kacper.
- Keep placeholders visible and explicit where data is not yet known.
- Use static generation and minimal JavaScript where possible.

## Development workflow

- Run `npm run dev` when working locally.
- Validate with `npm run typecheck` before ending work.
- Verify with `npm run build` before a release or push.
- Maintain clear, readable code and minimal complexity.


# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
yarn dev      # Dev server at http://localhost:5173 (hot reload)
yarn build    # Production build to /build
yarn test     # Run tests (vitest)
yarn preview  # Preview production build locally
yarn deploy   # Build and deploy to GitHub Pages
```

## Architecture

React 18 SPA (Vite) deployed to GitHub Pages at pechie.dev.

**Routing** (`src/App.jsx`): React Router v6 with four routes:
- `/` → Home (HeroSection + About)
- `/experience` → Experience (Work history)
- `/resume` → Resume (PDF viewer via Document component)
- `/contact` → Contact form

**Component structure** (`src/components/`):
- Page components in `pages/` — each corresponds to a route
- Layout components (Navbar, Footer) render on all pages
- Styling uses Tailwind CSS utility classes inline on JSX elements (no co-located `.css` files)

**Static assets**: Company logos, background videos, and the resume PDF live in `public/` and are referenced by URL path (e.g., `/images/...`, `/videos/...`).

**Testing**: vitest + React Testing Library. Test files are co-located with components as `*.test.jsx`.

**Deployment**: `yarn deploy` runs `gh-pages -d build` to publish the `/build` directory to the `gh-pages` branch.

## Docs & Specs

All design docs, specs, and implementation plans must be written to `/home/pechie/code/specs/`. Never create a `docs/` folder inside this repo.

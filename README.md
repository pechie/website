# pechie.dev

Personal portfolio site for Nikolas Pechie, deployed to GitHub Pages at [pechie.dev](https://pechie.dev).

## Tech Stack

- **React 18** with Vite
- **React Router v6**
- **Tailwind CSS v3**
- **vitest** + React Testing Library
- Deployed via `gh-pages`

## Commands

```bash
yarn dev      # Dev server at http://localhost:5173
yarn build    # Production build to /build
yarn preview  # Preview production build locally
yarn test     # Run tests
yarn deploy   # Build and deploy to GitHub Pages
```

## Project Structure

```
src/
  components/       # Reusable components (Navbar, Footer, etc.)
    pages/          # Page-level components (Home, Experience, Resume, Contact)
  index.jsx         # App entry point
  index.css         # Tailwind directives (@tailwind base/components/utilities)
public/
  images/           # Static images (logos, headshot)
  videos/           # Background and project videos
  *.pdf             # Resume PDF
```

## Development

All styling is done with Tailwind utility classes inline on JSX elements — there are no co-located `.css` files. Static assets (images, videos, PDFs) live in `public/` and are referenced by URL path (e.g. `/images/...`).

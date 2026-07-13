# ITIS 3135 React3 Assignment

React + Vite recreation of four pages from the ITIS 3135 course site:

- Home
- Introduction
- Contract
- About

Live site: [https://nkamiche.github.io/itis3135-react/](https://nkamiche.github.io/itis3135-react/)

## Prerequisites

- [Node.js](https://nodejs.org/) 20 or later
- npm

## Installation

```bash
npm install
```

## Local development

```bash
npm run dev
```

Open the URL shown in the terminal (typically `http://localhost:5173/itis3135-react/`).

## Build

```bash
npm run build
```

Production files are written to the `dist` folder. The build also copies `index.html` to `404.html` for GitHub Pages client-side routing.

## Preview production build

```bash
npm run preview
```

## Deployment

This repository is configured for GitHub Pages with:

- Vite `base` set to `/itis3135-react/`
- GitHub Actions workflow at `.github/workflows/deploy.yml`

### Automatic deployment

1. Create the GitHub repository `itis3135-react`.
2. Push the `main` branch.
3. In GitHub, open **Settings → Pages**.
4. Set **Source** to **GitHub Actions**.
5. Each push to `main` builds and deploys automatically.

### Manual deployment

```bash
npm run deploy
```

This uses the `gh-pages` package to publish the `dist` folder.

## Project structure

```
src/
  components/   Header, Footer, navigation, Layout
  pages/        Home, Introduction, Contract, About
  hooks/        usePageTitle
  styles/       default.css, introduction.css
public/
  images/       favicon and page images
```

## Course site link

After deployment, the React3 link in the ITIS 3135 secondary navigation should point to:

`https://nkamiche.github.io/itis3135-react/`

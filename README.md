# staticts

A small React + TypeScript + Vite application that demonstrates routing, shared context state, and a basic component gallery layout.

## Overview

This project currently includes:
- `Home` page with a local counter and a shared context toggle.
- `Galeria` page showing reusable UI components like cards, a divider, and a dynamic table.
- A collapsible sidebar with navigation between pages.
- Shared state via `MainContext` for toggling the app state between `ligado` and `desligado`.

## Project structure

- `src/App.tsx` — React Router configuration.
- `src/MainLayout.tsx` — shared layout that renders the sidebar and page content.
- `src/MainContext.tsx` — context provider for global app state.
- `src/pages/Home.tsx` — home page view.
- `src/pages/Gallery.tsx` — gallery page with component examples.
- `src/components/` — reusable UI components.

## Run locally

Install dependencies and start the development server using npm:

```bash
npm install
npm run dev
```

Or using Yarn:

```bash
yarn install
yarn dev
```

Open the app in the browser at the URL shown by Vite.

## Scripts

Using npm:
- `npm run dev` — start the Vite development server.
- `npm run build` — build the app for production.
- `npm run preview` — preview the production build.
- `npm run lint` — run ESLint across the project.

Using Yarn:
- `yarn dev` — start the Vite development server.
- `yarn build` — build the app for production.
- `yarn preview` — preview the production build.
- `yarn lint` — run ESLint across the project.

## Goals

The current app is a starting point for a static component showcase or dashboard.

Future improvements may include:
- more gallery components and examples,
- richer styling and responsive layout,
- data filtering / sorting in the table,
- a more complete design system or component library preview.

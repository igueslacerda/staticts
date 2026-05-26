# Project Notes

## Context

This project is a React + TypeScript + Vite proof of concept for a simple component gallery with basic navigation and shared state.

It is currently implemented as a small app with:
- A sidebar navigation for `Home` and `Gallery`.
- A global context state (`ligado` / `desligado`) shared across pages.
- A main layout that renders routed page content via React Router.

## Project Structure

- `src/App.tsx` — app router configuration using `react-router-dom`.
- `src/MainLayout.tsx` — shared layout wrapping page routes and rendering the sidebar.
- `src/MainContext.tsx` — context provider for global state and toggle functionality.
- `src/pages/Home.tsx` — home page with React/Vite logos, a local counter, and a global toggle button.
- `src/pages/Gallery.tsx` — gallery page showing example components, cards, a divider, and a dynamic table.
- `src/components/` — reusable UI pieces:
  - `card/Card.tsx`
  - `divider/Divider.tsx`
  - `dtable/DTable.tsx`
  - `sidebar/Sidebar.tsx`

## Proposal

The project is intended to become a lightweight static UI showcase for reusable components and layout patterns.

Goals:
- Provide a simple sidebar-driven navigation experience.
- Demonstrate context state sharing across pages.
- Display custom components such as cards, dividers, and tables.
- Serve as a base for expanding into a component gallery or dashboard.

## Current Behavior

- `Home` page displays interactive count state and a context toggle button.
- `Gallery` page renders a card-based layout with a dynamic table example.
- The sidebar can collapse and expand, and routes update the main content.

## Next Steps

Potential follow-ups:
- Add more gallery components and examples.
- Improve styling and responsive layout.
- Add data filtering/sorting to the table.
- Convert the app into a component library preview dashboard.

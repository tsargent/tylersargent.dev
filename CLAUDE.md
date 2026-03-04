# CLAUDE.md

## Project

Personal portfolio site for Tyler Sargent — [tylersargent.dev](https://tylersargent.dev)

## Stack

- Next.js 16 (App Router)
- React 19 with React Compiler
- TypeScript
- Tailwind CSS v4 (via PostCSS)

## Commands

- `npm run dev` — Start dev server
- `npm run build` — Production build
- `npm run lint` — Run ESLint

## Structure

- `src/app/` — Pages and layout (App Router)
- `src/components/` — UI components
- `src/data/profile.ts` — All profile content (experience, skills, projects, social links)

## Conventions

- Single-page site; all sections rendered in `src/app/page.tsx`
- Profile data is centralized in `src/data/profile.ts` — update content there
- Tailwind utility classes for styling; no CSS modules
- Light/dark theme support via theme provider and toggle

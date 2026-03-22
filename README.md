# Foodstuffs Calculator

This project is a submission for the Foodstuffs "Software Engineer - Technical Exercise".

It is a retail price calculator for New Zealand regions with tiered discount rates and region-specific tax rates.

## Tech Stack

- React 19 + TypeScript 5.9
- Vite 8 (build tool / dev server)
- Mantine 8 (UI component library)
- Vitest (unit testing)
- ESLint (linting)
- PostCSS (styling with Mantine preset)

## Running Locally

```bash
npm install
npm run dev
```

The app will be available at `http://localhost:5173`.

### Other Scripts

- `npm run build` — compile TypeScript and create a production build
- `npm run preview` — preview the production build locally
- `npm run test` — run unit tests
- `npm run lint` — run ESLint

## Notes

Development notes documenting decisions and progress:

- [note-1](notes/note-1.md) — Initial setup
- [note-2](notes/note-2.md) — Subtotal calculation
- [note-2_5](notes/note-2_5.md) — Removing unused validation
- [note-3](notes/note-3.md) — Discount calculation
- [note-4](notes/note-4.md) — Total (taxed) price calculation
- [note-11](notes/note-11.md) - README update and tests check

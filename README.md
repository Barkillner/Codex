# Portfolio Website

Multi-page portfolio site built with Next.js App Router, Tailwind CSS, CSS Grid, and Sanity CMS integration.

## Routes
- `/` Home
- `/about` About
- `/service` Service
- `/project` Project archive with filter/sort
- `/project/[slug]` Project detail
- `/contact` Contact

## Setup
1. Install dependencies:
   ```bash
   npm install
   ```
2. Copy environment template and set values:
   ```bash
   cp .env.example .env.local
   ```
3. Run dev server:
   ```bash
   npm run dev
   ```
4. Open Studio in-app:
   - Route: `/studio`

## Sanity Studio
- Studio config lives in `sanity.config.ts` and `sanity.cli.ts`.
- Studio is mounted inside this Next.js app at `/studio`.
- To run Studio tooling directly:
  ```bash
  npm run sanity:dev
  ```

## Content model
Sanity schemas are defined under `sanity/schemaTypes`:
- `project`
- `service`
- `siteSettings`

The app has fallback local content in `src/data/fallback.ts`, so pages still render if CMS is not configured.

## Notes
- Replace fallback/placeholder imagery with your provided assets.
- Update typography/color tokens in `src/app/globals.css`.
- Contact page is frontend-only by default.

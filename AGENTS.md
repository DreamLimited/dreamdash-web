# Agent instructions

## Boundaries

- `dreamdash.org`: public product marketing, documentation entry points, pricing, and conversion.
- `app.dreamdash.org`: authenticated SaaS application; source is `DreamLimited/dreamdash-app`.
- `api.dreamdash.org`: programmatic API.
- `dreamlimited.net`: United Dream Limited corporate HQ; do not duplicate corporate content here.

## Technical constraints

- Keep this site static and GitHub Pages-compatible.
- Preserve `CNAME` with `dreamdash.org` and preserve `.nojekyll`.
- Do not add authentication or product backend code to this repository.
- Optimize images and scripts before adding dependencies.
- Maintain WCAG 2.2 AA keyboard, contrast, and semantic HTML standards where practical.

## Content rules

- Describe shipped capabilities accurately; label planned functionality.
- Do not invent customers, testimonials, certifications, performance figures, or prices.
- Direct application calls to action to `https://app.dreamdash.org`.
- Preserve the licensed-template record in `README.md`.

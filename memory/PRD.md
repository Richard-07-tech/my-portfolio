# Richard Allen Doss Portfolio — PRD

## Original problem statement

Build a polished, responsive, accessible single-page personal portfolio for Richard Allen Doss using the attached resume as the single source of truth. Showcase AI/ML and full-stack work for internship recruiters and hiring managers. Include Hero, About, exact resume skill categories, six projects with Canopy first and detail views, leadership/hackathons, education/certifications, coding practice, contact, footer, SEO metadata, favicon, sitemap, README, and `/resume.pdf`. Use React, Tailwind CSS, Framer Motion, Lenis, light/dark mode, smooth scrolling, and a static deployable structure. Do not invent resume facts or links.

## Architecture decisions

- Static React frontend in `/app/frontend`; no backend or database is needed for the portfolio.
- Resume content is centralized in `frontend/src/data/content.js` with all unresolved project links documented in its TODO comment.
- Framer Motion handles reveal animations, modal transitions, and hero entrance; Lenis provides smooth momentum scrolling.
- CSS provides the visual system: obsidian/paper palette, orange accent, acid green highlight, abstract project art, responsive grid, reduced-motion fallback, and custom SVG favicon.
- The resume artifact is served from `frontend/public/resume.pdf`; metadata and sitemap are static public assets.

## Implemented

- Kinetic split-line hero with parallax orb, editorial marquee, original RA logo mark, sticky navigation, active section state, theme toggle, and responsive mobile layout.
- Resume-led sections for About, exact seven skill categories, six projects, leadership, education, NPTEL certifications, coding practice, contact, and footer.
- Canopy is featured first; every project has a detail modal with tags, description, and documented placeholder links where direct URLs were not present in the resume.
- Added SEO title/description/Open Graph metadata, favicon, sitemap, README instructions, Lenis dependency, and the original PDF resume.
- Production build and frontend QA passed; live metadata, mobile overflow, reduced motion, project modal, resume asset, navigation, and theme flows verified.
- Pushed to `https://github.com/Richard-07-tech/my-portfolio` on `main`.

## Prioritized backlog

### P0

- Replace every `#` project GitHub/live URL in `frontend/src/data/content.js` with the direct links supplied by Richard.

### P1

- Add real project screenshots to `frontend/public/` and wire them into the abstract project art blocks.
- Add a production canonical URL and final Open Graph image once the public portfolio URL is known.

### P2

- Add optional project filtering by AI, full-stack, geospatial, fintech, and automation.
- Add a downloadable one-page case-study view for Canopy and FinPilot.
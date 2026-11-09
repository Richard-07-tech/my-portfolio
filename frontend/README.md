# Richard Allen Doss — Portfolio

A resume-led, single-page portfolio for AI/ML and software engineering internship applications.

## Run locally

```bash
yarn install
yarn start
```

The app runs at `http://localhost:3000`.

## Build

```bash
yarn build
```

The production bundle is created in `build/` and can be deployed as a static site.

## Editing content

All resume facts, projects, skills, certifications, hackathons and contact details live in `src/data/content.js`. The first comment in that file lists every placeholder project URL that still needs a direct repository or demo link.

## Adding project screenshots

Project art is intentionally abstract and CSS-based so the portfolio stays fast. To add real screenshots later, place them in `public/` and update the relevant project object with an image path, then render it inside the matching `.project-art` block in `src/App.js`.

## Vercel

Import the repository, choose the `frontend` directory as the root, use `yarn build` as the build command, and `build` as the output directory.
# Muchiri Gatimu Portfolio

Personal portfolio for Muchiri Gatimu, a cybersecurity engineer and aspiring cloud security engineer. The site is styled as a terminal session.

## Built With

- React 19
- TypeScript
- Vite
- Tailwind CSS 4

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the development server on port 3000 |
| `npm run lint` | Type-check with the TypeScript compiler |
| `npm run build` | Create a production build in `dist` |
| `npm run preview` | Preview the production build locally |
| `npm run clean` | Remove generated build files |

## Project Structure

```text
├── index.html
├── package.json
├── vite.config.ts
└── src/
    ├── App.tsx
    ├── index.css           # Terminal colour theme and shared styles
    ├── types.ts
    ├── components/
    │   ├── Terminal.tsx    # Window, Prompt, Section primitives
    │   ├── Navbar.tsx
    │   ├── Hero.tsx
    │   └── Sections.tsx    # About, Projects, Skills, Experience, Contact, Footer
    └── data/
        └── portfolioData.ts
```

All content (profile, projects, skills, experience, links) lives in `src/data/portfolioData.ts`.

## Deployment

Deploy as a static Vite site (Netlify, Vercel, etc.):

- Build command: `npm run build`
- Publish directory: `dist`

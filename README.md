# Muchiri Gatimu Portfolio

Personal portfolio for Muchiri Gatimu, a software engineer focused on secure web applications, full-stack development, and practical product delivery.

## Built With

- React 19
- TypeScript
- Vite
- Tailwind CSS
- Lucide React
- Motion

## Features

- Responsive portfolio layout for desktop and mobile
- Dark and light themes
- About, projects, skills, experience, testimonials, and contact sections
- Searchable and filterable project showcase
- Project case-study modals
- Resume link and contact actions
- Accessible navigation with mobile menu support

## Getting Started

The Vite application is inside the `muchiri.me` directory. Run the commands from that directory:

```bash
cd muchiri.me
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the development server on port 3000 |
| `npm run lint` | Run the TypeScript compiler without emitting files |
| `npm run build` | Create a production build in `dist` |
| `npm run preview` | Preview the production build locally |
| `npm run clean` | Remove generated build files |

## Production Build

```bash
cd muchiri.me
npm run lint
npm run build
npm run preview
```

## Project Structure

```text
muchiri.me/
├── index.html
├── package.json
├── vite.config.ts
└── src/
	├── App.tsx
	├── index.css
	├── types.ts
	├── components/
	├── context/
	└── data/
```

Portfolio content, project details, skills, experience, and testimonials are maintained in `src/data/portfolioData.ts`.

## Deployment

This project can be deployed to Netlify as a Vite site.

- Base directory: `muchiri.me`
- Build command: `npm run build`
- Publish directory: `muchiri.me/dist`

The live portfolio is available at [muchirim.netlify.app](https://muchirim.netlify.app/).

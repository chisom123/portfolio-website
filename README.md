# Chisom Agu — Portfolio

Personal portfolio site built with React, TypeScript, and Vite, deployed on Firebase Hosting at [chisomagu.com](https://chisomagu.com).

A single-page site showcasing selected iOS and full-stack web projects, core skills, and contact info.

## Tech stack

- **React** + **TypeScript** — UI and app logic
- **Vite** — dev server and production build tooling
- **Firebase Hosting** — static site hosting and custom domain
- **lucide-react** — icon set
- **@icons-pack/react-simple-icons** — GitHub brand icon

## Project structure

```
src/
├── App.tsx     # page content and structure
├── App.css     # page styling
├── index.css   # global reset
public/
├── images/
│   ├── profile.jpg
│   └── projects/    # project screenshots
└── resume.pdf
```

## Local development

Install dependencies:

```bash
npm install
```

Start the dev server (with hot reload):

```bash
npm run dev
```

## Build and deploy

Build the production bundle:

```bash
npm run build
```

Deploy to Firebase Hosting:

```bash
firebase deploy
```

The live site is available at:
- https://chisomagu.com
- https://portfolio-44262.web.app
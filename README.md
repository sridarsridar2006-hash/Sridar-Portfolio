# Sridar M — Portfolio

A recruiter-focused personal portfolio built with React, Vite, TypeScript, Tailwind CSS, and Framer Motion.

## What's in here

- Hero, About, Skills, Projects (with case-study modals), How I Think, Experience,
  Education, Achievements/Certifications, and Contact sections
- A floating **Recruiter View** button with a 30-second profile summary
- All content driven from a single file: `src/data/portfolio.ts`
- Resume PDF served from `public/Sridar_M_Resume.pdf` and wired to every "Resume" button
- Scroll reveals and hover animations via Framer Motion, respecting `prefers-reduced-motion`
- Fully responsive from 320px to desktop

## ⚠️ Before you publish — fill in these placeholders

Everything in this portfolio is built strictly from your resume, **except** two projects you
asked to be included that aren't on your resume yet: **House Price Prediction using Machine
Learning** and **Online Blood Bank Management System**. For those two (and for your GitHub
profile, which also isn't on your resume), I used honest fallback content instead of inventing
details — no fake accuracy numbers, no fake repo links.

Open `src/data/portfolio.ts` and update:

| Placeholder | Where | What to put |
|---|---|---|
| `profile.github` | top of file | Your real GitHub profile URL |
| `github: "YOUR_GITHUB_URL"` | each project | That project's real repo link |
| `demo` (optional field) | any project | A live demo URL, if one exists |
| House Price Prediction technologies | `projects` array | Confirm/adjust if your real stack differs |
| Blood Bank System technologies | `projects` array | Confirm/adjust if your real stack differs |
| `metricNote` | ML projects | Replace with your real accuracy / R² / F1 once you have it documented |
| `contactConfig.formspreeEndpoint` or `emailJs` | bottom of file | Optional — makes the contact form send email directly instead of opening the visitor's mail client |

Everything else (name, education, CGPA, internships, certifications, skills, LinkedIn, email)
was taken directly from your uploaded resume.

## Run it locally

```bash
npm install
npm run dev
```

Open the printed local URL (usually `http://localhost:5173`).

## Build for production

```bash
npm run build
npm run preview   # optional: preview the production build locally
```

The build output goes to `dist/`.

## Project structure

```
src/
├── components/       # All UI sections and reusable pieces
├── data/
│   └── portfolio.ts  # ALL editable content lives here
├── App.tsx
├── main.tsx
└── index.css
public/
├── Sridar_M_Resume.pdf
├── favicon.svg
└── og-image.png
```

## Deploy

### Vercel
1. Push this project to a GitHub repository.
2. Go to [vercel.com/new](https://vercel.com/new) and import the repository.
3. Framework preset: **Vite**. Build command: `npm run build`. Output directory: `dist`.
4. Click **Deploy**.

### Netlify
1. Push this project to a GitHub repository.
2. Go to [app.netlify.com](https://app.netlify.com) → **Add new site** → **Import an existing project**.
3. Build command: `npm run build`. Publish directory: `dist`.
4. Click **Deploy site**.

### GitHub Pages
1. Push this project to a GitHub repository.
2. Install the Pages helper: `npm install -D gh-pages`.
3. Add to `package.json` scripts: `"deploy": "npm run build && gh-pages -d dist"`.
4. Run `npm run deploy`.
5. In your repo settings → Pages, set the source to the `gh-pages` branch.

## GitHub push (quick reference)

```bash
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin YOUR_REPO_URL
git push -u origin main
```

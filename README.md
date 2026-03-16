# Muluken Mekuriya — Portfolio Website

> Senior AI Software Engineer · DoD Cleared · 9+ Years Federal Contracting

A production-ready personal portfolio built with Next.js 15, Tailwind CSS v4, and Framer Motion. Designed to communicate senior-level AI engineering expertise, federal domain knowledge, and entrepreneurial range to recruiters, hiring managers, and federal contracting decision-makers.

**Live site:** [mulukenmekuriya.dev](https://mulukenmekuriya.dev) *(update when deployed)*

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 15 (App Router, TypeScript) |
| Styling | Tailwind CSS v4 (CSS-first config) |
| Animations | Framer Motion v12 |
| Fonts | Bebas Neue · Sora · DM Sans · Space Mono |
| Icons | Lucide React |
| Deployment | Vercel (or Netlify / GitHub Pages) |

---

## Project Structure

```
├── app/
│   ├── globals.css          # Tailwind v4 theme + CSS variables
│   ├── layout.tsx           # Root layout (fonts, metadata, OG tags)
│   └── page.tsx             # Main page (section assembly)
├── components/
│   ├── sections/
│   │   ├── Hero.tsx         # Full-viewport hero with terminal animation
│   │   ├── About.tsx        # Bio, photo placeholder, highlight cards
│   │   ├── Projects.tsx     # Featured grid + project cards
│   │   ├── Experience.tsx   # Dual timeline (professional + founder)
│   │   ├── Skills.tsx       # Categorized skill badges
│   │   ├── Education.tsx    # Education + certifications
│   │   └── Contact.tsx      # Contact cards + CTA
│   ├── ui/
│   │   ├── Navigation.tsx   # Sticky header + mobile overlay menu
│   │   ├── Footer.tsx       # Footer with links
│   │   ├── ThemeProvider.tsx # Dark/light theme context
│   │   └── AnimatedSection.tsx # Scroll-reveal wrappers
│   └── KonamiEgg.tsx        # Ethiopian flag easter egg (↑↑↓↓←→←→BA)
├── lib/
│   └── data.ts              # All portfolio content (projects, experience, skills)
├── public/
│   └── resume.pdf           # ← Add your resume PDF here
├── .env.example             # Environment variable documentation
└── README.md
```

---

## Getting Started

### Prerequisites

- Node.js 18.17+ or 20+
- npm or pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/MulukenMekuriya/portfolio.git
cd muluken-portfolio

# Install dependencies
npm install

# Copy environment variables (optional)
cp .env.example .env.local

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Configuration

### Adding Your Resume

Place your resume PDF at `public/resume.pdf`. The "Download Resume" buttons throughout the site link to `/resume.pdf`.

### Updating Content

All portfolio content lives in `lib/data.ts`:

- **Projects** — Edit the `projects` array to update project details, links, and tech stacks
- **Experience** — Edit the `experiences` array for work history
- **Skills** — Edit `skillCategories` to add/remove skills
- **Stats** — Edit the `stats` array for the hero ticker
- **Education** — Edit `education` and `certifications` arrays

### Adding a Real Photo

In `components/sections/About.tsx`, replace the `<div>` placeholder with:

```tsx
import Image from "next/image";

<Image
  src="/photo.jpg"
  alt="Muluken Mekuriya"
  fill
  className="object-cover object-top"
  priority
/>
```

Place your photo at `public/photo.jpg`.

### Analytics

Uncomment the analytics script placeholder in `app/layout.tsx` and configure your provider in `.env.local`.

---

## Deployment

### Vercel (Recommended)

```bash
npm install -g vercel
vercel
```

Or connect your GitHub repo at [vercel.com](https://vercel.com) for automatic deployments.

### Static Export

Add `output: 'export'` to `next.config.ts`, then `npm run build` deploys the `out/` directory to any static host.

---

## Easter Egg

Type the Konami Code anywhere on the site: **↑ ↑ ↓ ↓ ← → ← → B A**

The Ethiopian flag flashes briefly on screen.

---

## License

MIT — free to use as inspiration. Update all personal content in `lib/data.ts` if forking.

---

*Built by Muluken Mekuriya · [mulukenmekuriya@gmail.com](mailto:mulukenmekuriya@gmail.com)*

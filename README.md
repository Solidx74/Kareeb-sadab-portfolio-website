<div align="center">

```
 ██╗  ██╗ █████╗ ██████╗ ███████╗███████╗██████╗
 ██║ ██╔╝██╔══██╗██╔══██╗██╔════╝██╔════╝██╔══██╗
 █████╔╝ ███████║██████╔╝█████╗  █████╗  ██████╔╝
 ██╔═██╗ ██╔══██║██╔══██╗██╔══╝  ██╔══╝  ██╔══██╗
 ██║  ██╗██║  ██║██║  ██║███████╗███████╗██████╔╝
 ╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═╝╚══════╝╚══════╝╚═════╝
                                   SOLIDX74 // CISO COMMAND CENTER
```

[![Live](https://img.shields.io/badge/LIVE-ksportfolio--three.vercel.app-00ff88?style=for-the-badge&labelColor=030508)](https://ksportfolio-three.vercel.app/)
[![Next.js](https://img.shields.io/badge/Next.js-14-ffffff?style=for-the-badge&logo=nextdotjs&labelColor=030508)](https://nextjs.org)
[![Vite](https://img.shields.io/badge/Vite-6-646CFF?style=for-the-badge&logo=vite&logoColor=white&labelColor=030508)](https://vitejs.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript&logoColor=white&labelColor=030508)](https://www.typescriptlang.org)
[![Tailwind](https://img.shields.io/badge/Tailwind-3-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white&labelColor=030508)](https://tailwindcss.com)

</div>

---

## `> whoami`

```yaml
operator : Md. Kareeb Sadab
handle   : Solidx74
role     : Security Engineer & Automation Developer · CISO @ W3D
stack    : Next.js 14 · React 18 · TypeScript · Tailwind CSS · Framer Motion
deploy   : Vercel (Next.js) · GitHub Pages (Vite mirror)
status   : ● All terminals secure
```

Personal portfolio built as a **Matrix command-center SPA** — featuring a cinematic two-stage entry experience, animated bento grid, live system health metrics, Web3 audit disclosures, and a full interactive contact terminal.

---

## `> ls features/`

### Entry Experience
- **Splash Screen** (`/src/components/splash-entry.tsx`) — Full-viewport black screen with `KAREEB · SADAB` in Orbitron display type, matrix-green `SparklesCore` particle burst, scanline CSS overlay, and a blinking `[ CLICK OR TAP TO ENTER TERMINAL ]` prompt
- **Slide-up transition** — Click or swipe-up triggers `translateY(-100vh)` at `cubic-bezier(0.76, 0, 0.24, 1)` over 700ms, revealing the portfolio mounted behind at zero load cost
- **Touch detection** — Swipe delta threshold (28px) distinguishes tap vs. scroll on mobile

### Background Engine
- **Hero Odyssey canvas** (`/src/components/ui/hero-odyssey.tsx`) — Custom WebGL-style `<canvas>` rendering a retro-synth perspective grid, violet orbital ellipses, and star field; animates at 60fps with DPR-aware sizing
- **Matrix Rain** (`MatrixRain.tsx`) — Secondary canvas with violet/cyan character rain at 6% opacity, layered under bento content
- **Grain Overlay** (`GrainOverlay.tsx`) — SVG `fractalNoise` texture at 4.5% opacity, animated with 10-step grain keyframes

### Navigation & Health Bar
- **Navbar** — Framer Motion slide-in, live UTC clock updating every second, `IntersectionObserver`-based active section tracking
- **Health Bar** — Fixed sub-nav strip with animated CPU, MEM, and NET INGEST metrics updating on a 2-second reactive interval with motion bars

### Sections
| Section | Route ID | Description |
|---|---|---|
| Central Command | `#command` | Kinetic parallax title, operator photo, KPI strips, boot console, quick-link relay panel |
| Active Deployments | `#projects` | Filterable bento grid (All / SOC / AI Agents / ML / Analytics / Web3) with AnimatePresence layout |
| Detection Stack | `#stack` | 3-column skill matrix chips, CTF record, certifications, active vectors |
| Web3 Infrastructure | `#web3` | W3D CISO framework, Harold Health audit disclosure + Solidity patch, animated vulnerability matrix table |
| Secure Uplink | `#contact` | Formspree contact form, social relay nodes |

### UI Primitives
- **`BentoCard`** — 3D tilt on hover (rotateX/Y via motion springs), scroll-driven breathe scale + opacity, per-accent shimmer edge animation, 4 accent variants (violet / cyan / green / amber)
- **`KineticTitle`** — Mouse-parallax + scroll-blur/scale title using `useScroll`, `useTransform`, and combined spring motion values
- **`MagneticButton`** — 35% magnetic pull toward cursor on hover, 3 style variants, mechanical click sound via Web Audio API square oscillator
- **`CustomCursor`** — Cyan crosshair dot + violet radial glow halo, spring-tracked to mouse, auto-disabled on touch devices

---

## `> tree src/`

```
src/
├── app/
│   ├── globals.css          # Tailwind base + glass-panel, bento-edge, kpi-strip utilities
│   ├── layout.tsx           # Orbitron + Geist fonts, metadata, dark root
│   └── page.tsx             # Splash gate → PortfolioApp state machine
├── components/
│   ├── ui/
│   │   ├── sparkles.tsx     # Canvas particle engine (SparklesCore)
│   │   └── hero-odyssey.tsx # Perspective grid + orbital canvas background
│   ├── components/
│   │   ├── BentoCard.tsx
│   │   ├── CustomCursor.tsx
│   │   ├── GrainOverlay.tsx
│   │   ├── HealthBar.tsx
│   │   ├── KineticTitle.tsx
│   │   ├── MagneticButton.tsx
│   │   ├── MatrixRain.tsx
│   │   ├── Navbar.tsx
│   │   └── sections/
│   │       ├── HeroSection.tsx
│   │       ├── ProjectsSection.tsx
│   │       ├── StackSection.tsx
│   │       ├── Web3Section.tsx
│   │       └── ContactSection.tsx
│   ├── portfolio-app.tsx    # Root layout: HeroOdyssey bg + all sections
│   └── splash-entry.tsx     # Entry gate component
├── data/
│   └── portfolio.ts         # All content: projects, kpis, skills, social links
└── hooks/
    └── useMechanicalClick.ts  # Web Audio API click sfx hook
```

> **Vite mirror** — `src-vite/` contains a fully equivalent build using Vite + React, with identical component logic but `<img>` instead of `next/image` and relative data imports. Use `package-vite.json` and `tailwind-vite.config.js` to run it.

---

## `> npm run dev`

### Next.js (primary)

```bash
# Install
npm install

# Dev server → localhost:3000
npm run dev

# Production build
npm run build && npm start
```

### Vite mirror

```bash
# Swap package files
cp package-vite.json package.json
cp postcss-vite.config.js postcss.config.js
cp tailwind-vite.config.js tailwind.config.js
cp tsconfig-vite.json tsconfig.json

npm install
npm run dev     # → localhost:5173
```

### Environment

No `.env` required. The only external endpoint is the Formspree form action in `ContactSection.tsx` — already configured to `https://formspree.io/f/xpqeypvd`.

---

## `> cat content-config.md`

All portfolio content lives in a single file — **`src/data/portfolio.ts`**. To update the site, only this file needs editing:

```ts
// Add / remove projects
export const projects: Project[] = [ ... ]

// Update KPI tiles
export const kpis = [ ... ]

// Edit skill chips
export const skillsMatrix = { languages, security, aiData }

// Update social relay nodes
export const socialLinks: SocialLink[] = [ ... ]
```

The `profile` object controls the operator card — name, handle, bio, title, photo path, and all external links.

---

## `> cat deploy.md`

Deployed on **Vercel** via GitHub integration. Push to `main` → auto-deploy in ~25 seconds.

```bash
# One-time Vercel CLI deploy
npx vercel --prod
```

**Framework preset:** Next.js (auto-detected)
**Output directory:** `.next` (default)
**Build command:** `next build`
**Install command:** `npm install`

Profile photo is served from `/public/profile.png` — replace the file to update the operator avatar across the site.

---

## `> cat web3-audit.md`

### Harold Health — Security Report `REF: W3D-CR-79CC`

```
TARGET    : Harold Health v1.0
VECTOR    : Broken Access Control
SEVERITY  : CRITICAL / HIGH
STATUS    : MITIGATED
```

Authorization flaw isolated in the patient-to-provider credential allocation registry. Cross-entitled accounts could intercept data pathways due to missing owner identity matching.

**Remediation patch:**

```solidity
function grantDoctorAccess(bytes32 _recordId, address _doctor) external {
    require(records[_recordId].owner == msg.sender, "Errors: Auth Failed");
    records[_recordId].authorizedProviders[_doctor] = true;
    emit AccessGranted(_recordId, _doctor);
}
```

📄 [Read Full Security Report on Medium →](https://medium.com/@kareebsadab/w3d-security-report-c79cc07ca721)

---

## `> netstat -connect`

<div align="center">

| Node | Link |
|---|---|
| 🌐 Portfolio | [ksportfolio-three.vercel.app](https://ksportfolio-three.vercel.app/) |
| 💻 GitHub | [github.com/Solidx74](https://github.com/Solidx74) |
| 💼 LinkedIn | [linkedin.com/in/karib-sadab-43666a407](https://www.linkedin.com/in/karib-sadab-43666a407/) |
| ✍️ Medium | [medium.com/@kareebsadab](https://medium.com/@kareebsadab) |
| 📧 Email | kareebsadab@gmail.com |

---

![Profile Views](https://komarev.com/ghpvc/?username=Solidx74&color=00ff88&style=flat-square&label=PROFILE+VIEWS)

`// All terminals secure · CUET · Dhaka · BD · 2026`

</div>

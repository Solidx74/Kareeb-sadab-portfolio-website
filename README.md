<div align="center">

```
██╗  ██╗ █████╗ ██████╗ ███████╗███████╗██████╗
██║ ██╔╝██╔══██╗██╔══██╗██╔════╝██╔════╝██╔══██╗
█████╔╝ ███████║██████╔╝█████╗  █████╗  ██████╔╝
██╔═██╗ ██╔══██║██╔══██╗██╔══╝  ██╔══╝  ██╔══██╗
██║  ██╗██║  ██║██║  ██║███████╗███████╗██████╔╝
╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═╝╚══════╝╚══════╝╚═════╝
```

### `SECURITY ENGINEER` × `CISO @ W3D` × `AI/ML DEVELOPER`

[![Status](https://img.shields.io/badge/STATUS-LIVE-00ff88?style=for-the-badge&logo=vercel&logoColor=white)](https://Solidx74.github.io)
[![Built With](https://img.shields.io/badge/BUILT_WITH-WebGL%20%2B%20Vanilla%20JS-00d4ff?style=for-the-badge)](#)
[![License](https://img.shields.io/badge/LICENSE-MIT-8b5cf6?style=for-the-badge)](#)

**[ ⬡ LIVE SITE ⬡ ](https://Solidx74.github.io)** &nbsp;·&nbsp; **[ ⬡ GITHUB ⬡ ](https://github.com/Solidx74)** &nbsp;·&nbsp; **[ ⬡ LINKEDIN ⬡ ](https://www.linkedin.com/in/karib-sadab-43666a407/)**

</div>

<br>

```diff
+ [ OK ] KERNEL :: security-matrix v4.2.1 initialized
+ [ OK ] MODULE :: detection-engine loaded
+ [ OK ] MODULE :: ai-analytics-core loaded
+ [AUTH] profile MD.KAREEB.SADAB verified
+ [ OK ] READY :: awaiting operator input ▌
```

<br>

## ⬡ OVERVIEW

A single-file, terminal/cyberpunk-themed portfolio site — built entirely in vanilla HTML/CSS/JS with custom WebGL shaders, no frameworks, no build step. Designed to feel like a SOC command center rather than a typical resume page.

<br>

## ⬡ SYSTEM MODULES

| Module | Description |
|:------ |:----------- |
| 🪐 **Hero Odyssey Splash** | Full-screen WebGL lightning shader, animated planet sphere, glow orb, and particle sparkle system as the landing intro |
| 🌌 **Nebula Background** | Custom fbm-noise WebGL fragment shader rendering an animated deep-space nebula across the main site |
| 🖱️ **Custom Cursor** | Dual-layer cursor (outer ring + glow dot) with reactive hover states |
| 🌧️ **Matrix Rain** | Canvas 2D animated character rain overlay |
| 📡 **Live Health Bar** | Simulated CPU / MEM / NET / THREAT stats, refreshing every 2s |
| 🗂️ **Filterable Deployments** | Bento-grid project cards across Security, AI Agents, ML, Analytics, Web3 |

<br>

## ⬡ SITE MAP

```
01 ─ COMMAND     → operator profile, KPIs, quick links, boot console
02 ─ OPERATIONS  → active deployments (filterable project grid)
03 ─ STACK       → tech arsenal, certifications, CTF record
04 ─ WEB3        → smart contract security matrix, audit disclosure
05 ─ ANALYTICS   → live-deployed data analytics portfolio
06 ─ UPLINK      → contact form + encrypted relay nodes
```

<br>

## ⬡ TECH STACK

<div align="center">

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![WebGL](https://img.shields.io/badge/WebGL-990000?style=flat-square&logo=webgl&logoColor=white)

</div>

No dependencies, no package.json, no build step — just one `index.html`.

- **Rendering** — vanilla WebGL for shaders (splash lightning, nebula bg), Canvas 2D for matrix rain
- **Interactivity** — IntersectionObserver for nav state, vanilla DOM filtering for the project grid
- **Fonts** — `Orbitron` (display), `JetBrains Mono` (code/labels), `Space Grotesk` (body)
- **Theming** — CSS custom properties (`--green`, `--cyan`, `--violet` accent system)

<br>

## ⬡ QUICKSTART

```bash
git clone https://github.com/Solidx74/Solidx74.github.io
cd Solidx74.github.io
open index.html      # or just double-click it
```

No install. No build. It just runs.

<br>

## ⬡ STRUCTURAL NOTES

> [!IMPORTANT]
> The `#splash` block and its `lt-canvas` WebGL shader are the **Hero Odyssey** landing animation — kept intentionally frozen across edits. Don't touch it.

- The main-site nebula lives in the `#app-bg` WebGL IIFE near the end of the `<script>` block — tune the fragment shader uniforms there for color/motion changes.
- Project cards use `data-cat` attributes on `.bc` elements for filtering — add a card by following the existing pattern and registering its category in the filter bar.

<br>

<div align="center">

```diff
- ALL TERMINALS SECURE
+ © 2026 // CUET · DHAKA · BD
```

</div>
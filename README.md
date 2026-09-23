# EcoLens — Green Consumerism, Eco-Labels & Life-Cycle Thinking

A static, dependency-free educational website covering three pillars:
1. **Green Consumerism** — conscious buying, greenwashing awareness
2. **Eco-Labels** — 12 verified certifications + how to spot misleading claims
3. **Life-Cycle Thinking** — cradle-to-grave vs cradle-to-cradle, 5-stage LCA with a traced cotton t-shirt

Built purely in **HTML, CSS, JavaScript** — no frameworks, no npm, no build step. Works by opening `index.html` directly (`file://`) or from any static host (GitHub Pages, Netlify, Vercel).

## Folder Structure

```
eco-website/
├── index.html
├── pages/
│   ├── green-consumerism.html
│   ├── eco-labels.html
│   └── life-cycle-thinking.html
├── css/
│   ├── base.css          # resets, variables, typography
│   ├── layout.css        # grid/flex, containers, responsive
│   ├── components.css    # cards, buttons, nav, quiz, diagram
│   └── theme.css         # colors, dark/light mode
├── js/
│   ├── main.js           # nav, theme toggle, scroll reveal, directory
│   ├── quiz.js           # spot-the-greenwashing quiz
│   └── labels-data.js    # 12 verified eco-labels as JS objects
├── assets/
│   ├── icons/
│   ├── images/
│   └── favicon.ico
└── README.md
```

## Design

- **Canvas:** `#f5f5f5` off-white, **Ink:** `#0c0a09` near-black
- **Display:** EB Garamond Light 300 (Waldenburg substitute) · **Body/Nav:** Inter 400/500
- **Accent:** Pastel gradient orbs (mint, peach, lavender, sky, rose) — atmospheric only, never as button fills
- **CTAs:** Ink pill (`#292524` → `#0c0a09` active) with `9999px` radius · Cards `16px`, orb cards `24px`
- **Rhythm:** 96px section padding, 1200px max content width
- **Responsive:** Mobile <640px (1-up, hamburger), Tablet 640–1024px (2-up), Desktop >1024px (3-up)

## Run Locally

No install needed. Double-click `index.html` or:

```powershell
# PowerShell — serve locally (optional)
python -m http.server 8000
# then open http://localhost:8000/eco-website/
```

Works offline as `file://` — all paths are relative, no server required.

## Deploy

### GitHub Pages
1. Push `eco-website/` contents to a repo (or keep as subfolder and set Pages source to `/eco-website`).
2. Repo → Settings → Pages → Source: `main` branch / `root` (or `/docs` if you move files).
3. Published at `https://<username>.github.io/<repo>/`.

### Netlify / Vercel / Cloudflare Pages
Drag-and-drop `eco-website/` folder or connect Git repo. No build command, publish directory: `eco-website` (or repo root if contents are at top level).

## Features

- **Persistent navbar** — identical links/order on every page (Home, Green Consumerism, Eco-Labels, Life-Cycle)
- **Footer** — copyright, label registries, ISO standards, references
- **Responsive + Accessible** — semantic HTML5, alt text on all visuals, keyboard-navigable, focus-visible, `prefers-reduced-motion`
- **Dark/Light toggle** — CSS class + `localStorage`, respects `prefers-color-scheme`
- **Searchable label directory** — 12 fact-checked labels (ENERGY STAR, EU Ecolabel, Fairtrade, USDA Organic, FSC, MSC, Rainforest Alliance, EPEAT, Cradle to Cradle, Blue Angel, Leaping Bunny, B Corp) — data lives in `js/labels-data.js`
- **Interactive quiz** — 5 questions (spot the greenwashing) in `js/quiz.js`
- **Lifecycle diagram** — 5 stages with JS hover/click, SVG flow diagrams
- **Scroll reveal** — `IntersectionObserver` soft entrance
- **Valid HTML** — UTF-8 everywhere, 4-space indents, `<!-- Section: ... -->` and `/* Component: ... */` comments

## Fact-Checking

All label names, issuers, years and scopes are real:
- ENERGY STAR (EPA/DOE, 1992) — `energystar.gov/productfinder`
- EU Ecolabel (European Commission, 1992) — `environment.ec.europa.eu/topics/circular-economy/eu-ecolabel-home_en`
- Fairtrade International (1997), FSC (1993), MSC (1997), Rainforest Alliance (1987), EPEAT (2006), etc.
- Standards: ISO 14024 (Type I), ISO 14040/14044 (LCA), EU Green Claims Directive 2024, FTC Green Guides, Ellen MacArthur Foundation, WRAP

No invented statistics; t-shirt footprint (~7 kg CO₂e, ~2,700 L water) cites WRAP UK and Chapagain et al.

## License

Educational / portfolio use. Label trademarks belong to respective owners. Design tokens adapted from the editorial “ink + canvas” brief (Waldenburg 300 / Inter).

— © 2026 EcoLens

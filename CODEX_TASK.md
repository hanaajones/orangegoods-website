# OrangeGoods.co Website Rebuild — Codex Task

## Goal
Build the initial Next.js 15 website for orangegoods.co using real scraped content.

---

## Brand

- **Primary color:** #ff4200 (OG Orange)
- **Font:** Figtree (Google Fonts) — all weights
- **Tone:** Editorial, story-driven, direct. Not fluffy or corporate.
- **Reference site:** mellomfg.com / mellomerch.com (Bespoke vs Quick Custom story structure)
- **Product pages reference:** Reach Headwear (interactive catalog, clickable shapes, fabric swatches, filters)

---

## Tech Stack

- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS v4
- Framer Motion
- Google Fonts (Figtree)

---

## Navigation

```
LOGO  |  CUSTOM ▾  |  BUILD ONLINE ▾  |  DESIGN  |  ABOUT ▾  |  [START A PROJECT]
```

- CUSTOM = OG Crafted pathway (fully custom, ~100 MOQ)
- BUILD ONLINE = Ready Made / Shopify store link (blanks, 50+ MOQ)
- START A PROJECT = primary CTA button (#ff4200)

---

## Pages to Build

### 1. Homepage (`/`)

**Story-driven narrative scroll. Mobile-first.**

Sections (in order):

1. **Hero** — Headline + subhead from scraped copy. Key stats above fold:
   - 100 MOQ minimum
   - 3–6 week timeline
   - 15+ product categories
   Stats styled as bold callouts. Mobile: sticky bottom CTA bar ("Start a Project →").

2. **Problem** — Why merch usually sucks (generic, boring, forgotten). 2–3 punchy lines.

3. **Solution** — OG owns the whole process. No vendor juggling. California team. Idea to delivery.

4. **Two Paths** — Side-by-side or stacked cards:
   - **OG Crafted** — Fully custom, ~100 MOQ, 3–6 weeks, your exact vision
   - **Ready Made** — Premium blanks, faster, lower MOQ, Build Online

5. **Gallery** — Pull real image URLs from scraped hats/goods pages. Horizontal swipe carousel on mobile.

6. **Social Proof** — Real testimonials from scraped index.md:
   - "They brought our project to life in a new and unique way" — Joe K., Field Marketing Manager
   - "Our go-to for giveaways and super creative options" — Robin D., Director, Strategic Initiatives, Stanford Medicine
   - "Truly happy with the turnout" — Sophia P., Marketing Ops Manager, Verve Coffee
   Real client logos from scraped image URLs (Google, Stanford Medicine, 805/Firestone Walker, Verve Coffee).

7. **Process** — How it works (3–4 steps). Brief and visual.

8. **CTA** — Full-width section. "Ready to make something worth keeping?" + Start a Project button.

---

### 2. Custom Hats (`/goods/hats`)

**Template for all product pages. Interactive feel, inspired by Reach Headwear.**

Sections:

1. **Hero** — Product category name + hero image. Subhead with key stats (MOQ, options, timeline).

2. **Product Selector** — Interactive: clickable hat style cards (snapback, trucker, dad hat, beanie, etc.). Use style names and descriptions from scraped hats.md content.

3. **Customization Options** — Fabric swatches or option tiles: embroidery, patch, screen print, etc.

4. **Process Breakdown** — Product-specific steps (submit brief → design proof → sample → production → delivery).

5. **Gallery** — Image grid from scraped hats.md image URLs. Lightbox or expand on click.

6. **CTA** — "Get a quote for custom hats" + inline form or link to contact.

---

## Mobile-First Requirements

- Sticky bottom CTA bar on mobile (homepage + product pages): "Start a Project →"
- Stats above fold on mobile
- Horizontal swipe carousels for gallery/product sections
- Touch-friendly tap targets (min 44px)
- Desktop breakpoints: md (768px) and lg (1024px)

---

## Animations (Framer Motion)

- Scroll-triggered fade-in for sections
- Page transitions (fade or slide)
- Hero text stagger animation
- Card hover effects on product tiles
- Keep it subtle — not flashy

---

## Real Assets to Use

Extract these from the scraped files in `./scraped/`:

**Images (from index.md and hats.md):**
- https://orangegoods.co/wp-content/uploads/2024/06/OrangeGoodsClients_Website_2024-36-3.png
- https://orangegoods.co/wp-content/uploads/2024/07/SM_Web_vert_LG.png
- https://orangegoods.co/wp-content/uploads/2025/04/OrangeGoodsClients_Website_2025_VerveCoffee.avif
- https://orangegoods.co/wp-content/uploads/2025/02/OrangeGoodsClients_Website_2024_Google.png
- https://orangegoods.co/wp-content/uploads/2024/10/OrangeGoodsClients_Website_2024-36.png
- Scan hats.md and goods.md for additional product image URLs and include them

Download images where possible into `public/images/`. Use next/image with remote patterns as fallback.

---

## File Structure

```
orangegoods-website/
├── app/
│   ├── layout.tsx          # Global layout, nav, Figtree font, sticky mobile CTA
│   ├── page.tsx            # Homepage
│   ├── goods/
│   │   └── hats/
│   │       └── page.tsx    # Custom Hats page
│   └── lp/
│       └── [slug]/
│           └── page.tsx    # Landing page template (scaffold only, no content needed)
├── components/
│   ├── Nav.tsx
│   ├── MobileCTABar.tsx
│   ├── Hero.tsx
│   ├── TwoPaths.tsx
│   ├── Gallery.tsx
│   ├── Testimonials.tsx
│   ├── ProductSelector.tsx
│   └── ...
├── public/
│   └── images/
├── scraped/                # Already populated — read these for copy + image URLs
├── tailwind.config.ts
├── next.config.ts
└── package.json
```

---

## Git + GitHub

1. `git init` in ~/Projects/orangegoods-website (if not already)
2. Create initial commit with all scaffolded + built code
3. Push to: `https://github.com/hanaajones/orangegoods-website`
   - Create the repo if it doesn't exist: `gh repo create hanaajones/orangegoods-website --public --source=. --remote=origin --push`
4. Open a PR from main (or a feature branch like `feat/initial-build`) to main
   - Title: "feat: initial Next.js 15 scaffold — homepage + custom hats"
   - Body: brief summary of what's built
5. **DO NOT merge the PR. Open it and stop.**

---

## Slack Notification

After the PR is open, run this exact command to notify Jenna:

```bash
openclaw message send --channel C0AV6PMMFD3 --message "🟠 Website rebuild PR is open and ready for Hana's review.\n\n*PR:* <PR_URL_HERE>\n\n*What's built:*\n• Next.js 15 + TypeScript + Tailwind v4 + Framer Motion scaffold\n• Homepage — story-driven narrative scroll with real OG copy\n• Custom Hats page — interactive product template\n• Mobile-first with sticky bottom CTA bar\n• Real images + testimonials from current site\n\nVercel preview will auto-deploy once the PR is open. Tag Hana to review when ready."
```

Replace `<PR_URL_HERE>` with the actual PR URL.

---

## Important Notes

- Read `./scraped/index.md`, `./scraped/hats.md`, `./scraped/goods.md` for real copy and image URLs
- Don't invent copy — pull from scraped content where available, fill gaps with brand-consistent writing
- Don't use placeholder images (gray boxes) — use real OG image URLs
- The /lp/[slug] landing page is scaffold only — just the route and a basic template component
- Sanity CMS is planned for later — hardcode content for now, structure it so it's easy to extract later

---

## Done Signal

When completely finished (PR open, Slack notified), run:
```bash
openclaw system event --text "Done: orangegoods.co website rebuild PR is open on GitHub" --mode now
```

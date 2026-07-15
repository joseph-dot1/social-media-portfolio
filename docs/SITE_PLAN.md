# Eshenake Joseph — Portfolio Site Plan

Working spec for the portfolio build. **Status: awaiting approval — no implementation code until this plan is approved.**

---

## 0. Locked decisions

| Decision | Choice |
|---|---|
| Positioning | Person-first: **Eshenake Joseph** / @socialmediajoe_. No agency branding anywhere (Digital J is history — role-based credit only: "Led social growth for [client]"). |
| Audiences | One page, shared spine. **Persona toggle** in hero (`brand` / `recruiter`) swaps hero subline, persistent CTA, and closing section. No separate routes. Persona persists in `localStorage` and is deep-linkable via `?for=recruiters` / `?for=brands`. |
| Case studies | **Chibest = flagship** (deepest treatment). **MJI, Winx, Richland = featured** (standard deep blocks). **A New Song, DataFluent, Hanging Garden = compact cards.** None cut. |
| 3D moment | ONE scene, in the **hero**: procedural particle field that organizes from chaos into an ascending growth curve across the first ~1.5 viewports, handing off into the metrics band, then unmounting. Everything else is Framer Motion + CSS. |
| Mobile motion | **Full desktop, calm mobile.** Desktop: 3D hero + pinned scroll scenes. Mobile: poster hero, animated counters, fade/slide reveals only — no pinning, no parallax. Motion intensity is a single config flag so both modes can be compared during review. |
| Content | **Hardcoded typed data** — `content/case-studies.ts` etc. No CMS. |
| Blog | **None.** Footer links to @socialmediajoe_ for live content proof. |
| CTA | **Persona-aware**: brands → "WhatsApp me" (primary) + "Book a call"; recruiters → "Download resume" (primary) + "Email me". Closing section shows both audiences' options regardless of toggle. |

## 1. Design system (locked, restated for the build)

- **Colors:** navy `#1E3A8A` · blue `#1D4ED8` · **orange `#EA580C` exclusively for metrics + CTAs** · tint `#EFF4FF` · text `#111827` · gray `#4B5563`. Generous white space; alternating white / tint section backgrounds; navy reserved for hero + closing bookends.
- **Typography:** Inter only (via `next/font`, latin subset). Hierarchy by weight + color, never by typeface.

| Role | Size (mobile / desktop) | Weight | Color |
|---|---|---|---|
| Display (hero H1) | 40px / 64px | 700 | white on navy |
| Metric numerals | 56px / 88px | 600 | orange |
| H2 (section) | 32px / 44px | 700 | text |
| H3 (card/case title) | 22px / 28px | 600 | text |
| Eyebrow/label | 13px / 14px, tracking +0.08em, uppercase | 600 | blue |
| Body | 16px / 18px, 1.65 line-height | 400 | gray |
| Body emphasis | 16px / 18px | 500–600 | text |

- **Spacing scale:** 8pt grid. Section padding `py-24 md:py-32 lg:py-40`. Content container `max-w-6xl`, prose blocks `max-w-2xl`. Card gap `gap-6 md:gap-8`. Between heading and body: 16–24px. Whitespace is the layout's primary tool — no borders where spacing can separate.

## 2. Page architecture (single route `/`)

```
① Nav (fixed, minimal)
② Hero + 3D scene  ──────┐  the ONE 3D moment
③ Metrics band  ◄────────┘  (scene resolves into these numbers)
④ Case studies
     ④a Flagship: Chibest (scroll-pinned narrative)
     ④b Featured: MJI · Winx · Richland (alternating deep blocks)
     ④c Compact grid: A New Song · DataFluent · Hanging Garden
⑤ Services & AI capabilities
⑥ Process — "How working with me works"
⑦ Testimonials
⑧ About (short, person-first)
⑨ Closing CTA (persona-aware) + Footer
```

### Section-by-section: content + interaction pattern

**① Nav** — Name left; anchors (Work · Services · About · Contact); persona-aware CTA button right (orange). Transparent over hero → solid white with shadow after scroll (backdrop blur). Mobile: name + CTA + hamburger sheet.

**② Hero** — Renders as HTML instantly: H1 positioning line, persona subline, persona toggle (two chips), CTA, scroll cue.
- H1 (shared): *"I turn attention into measurable growth."* [PLACEHOLDER — final headline to approve]
- Subline `brand`: *"Social media growth and AI-powered marketing for brands that want numbers, not noise."*
- Subline `recruiter`: *"Social media growth specialist — [X] clients, [X]+ followers grown, open to full-time roles."*
- **3D scene (desktop only):** full-bleed canvas behind/around the text. ~15–20k point particle field, one custom shader material, one draw call. Scroll progress (0 → 1.5 viewports) drives a noise→order morph: scattered particles converge into an ascending curve. At handoff the curve's endpoints align with the metrics band positions, canvas fades and unmounts (GPU cost → 0 for the rest of the session).
- **Poster fallback (mobile / reduced-motion / low-end):** navy gradient + static inline-SVG ascending curve with subtle CSS shimmer. Zero JS cost. This IS the "calm mobile" hero.
- Gating: canvas mounts only if `viewport ≥ 1024px` **and** `prefers-reduced-motion: no-preference` **and** `hardwareConcurrency ≥ 4`, loaded via `next/dynamic` after first paint.

**③ Metrics band** — 3–4 headline numbers, orange, `Counter` animation (count-up once on 40% in-view, 1.4s, easeOut). Label below each in gray. Numbers are the aggregate proof: e.g. `[X]+ followers grown` · `[X]× avg engagement lift` · `[X] brands served` · `[X] yrs`. **[PLACEHOLDER — real aggregate numbers needed.]** Navy background continues from hero so the 3D handoff reads as one scene.

**④a Flagship — Chibest** — Scroll-pinned narrative (desktop): section pins for ~150vh while three panels sequence Problem → Action → Results; a progress rail on the left ticks through the phases; the Results panel lands with orange counter metrics and [SCREENSHOT PLACEHOLDER: analytics]. Mobile: same three panels stacked, simple fade-up reveals, no pin.
Copy structure (maps to your existing problem→action→results copy):
- Eyebrow: `CASE STUDY — CHIBEST`
- Problem: 2–3 sentences, the stakes. **[PASTE EXISTING COPY]**
- Action: what *I* did — strategy, content system, AI leverage. **[PASTE EXISTING COPY]**
- Results: headline metric huge in orange + 2 supporting metrics + timeframe. **[REAL NUMBERS NEEDED]**

**④b Featured — MJI, Winx, Richland** — Alternating two-column blocks (image left/right swaps): [SCREENSHOT/VISUAL PLACEHOLDER] one side, Problem→Action→Results copy the other, results metric in orange with counter. Desktop: staggered reveal + slight parallax drift on the visual (±16px). Mobile: stacked, fade-up only.

**④c Compact grid — A New Song, DataFluent, Hanging Garden** — 3-up card grid (1-col mobile): client name, one-line problem→result, single orange metric, [LOGO PLACEHOLDER]. Hover: lift + tint border. One stagger-in animation for the row.

**⑤ Services & AI capabilities** — Reads as *services* to brands and *skills/tooling* to recruiters without changing copy. 4 service cards: Social media growth · Content systems · AI-powered marketing & automation · Web builds. **[CONFIRM SERVICE LIST]** Below, an "AI in my workflow" strip — 3–4 concrete items (e.g. "AI content pipelines", "automated reporting", "AI-assisted web builds") as icon + one-liner. Cards: fade-up stagger; hover raises card, eyebrow shifts blue→orange. Tint background.

**⑥ Process** — 4 steps: Audit → Strategy → Execution → Reporting **[CONFIRM]**, numbered horizontal steps (vertical on mobile) with a draw-in connector line (SVG pathLength animation on desktop, static on mobile). Trust-builder for brands; reads as "how I work" for recruiters.

**⑦ Testimonials** — 3–5 quote cards, staggered masonry (no marquee — respects calm-mobile). Name, role, company, [HEADSHOT/LOGO PLACEHOLDER]. **[REAL TESTIMONIALS NEEDED.]**

**⑧ About** — Two-column: [HEADSHOT PLACEHOLDER] + ~120 words, first person, Warri-based, tools list. Final line swaps by persona: availability for roles (recruiter) vs engagement availability (brand). Single fade-in.

**⑨ Closing CTA + Footer** — Navy bookend. H2 swaps by persona (*"Let's grow your brand."* / *"Let's talk about your team."*). Both CTA pairs visible here regardless of toggle, persona's pair emphasized: WhatsApp (orange) + Book a call · Download resume (orange) + Email. Footer: name, @socialmediajoe_ → Instagram/TikTok/X **[CONFIRM HANDLED PLATFORMS]**, LinkedIn, email. No blog link.

## 3. Motion system (global)

- **Easing:** `cubic-bezier(0.22, 1, 0.36, 1)` for all entrances; `easeOut` for counters.
- **Durations:** reveals 0.6s · counters 1.4s · hovers 0.2s · nav transition 0.3s.
- **Stagger:** 90ms between siblings, max 5 staggered items per group.
- **Reveal trigger:** 25–40% in-view, animate once (no re-trigger on scroll-up).
- **Distance:** fade-up translates 24px max — motion should be felt, not watched.
- **Pinning:** flagship case study only, desktop only, ~150vh.
- **Reduced motion:** every animated component checks `useReducedMotion` → opacity-only or none; counters render final value instantly; 3D never mounts.
- **Mode flag:** `content/site.ts` exposes `motionProfile: 'full' | 'calm'` — forced `calm` under 1024px; toggleable during review to compare.

## 4. Performance budget (hard limits, enforced in build)

| Budget | Target |
|---|---|
| Initial load (mobile) | < 1MB (hard cap 2MB) — mobile never downloads the 3D chunk |
| Initial load (desktop) | < 2MB including deferred R3F chunk (~150KB target) |
| First render | Meaningful HTML (hero text + CTA) before any 3D JS — R3F via `next/dynamic`, `ssr: false`, mounted post-first-paint |
| FPS | 60fps mid-range Android: no canvas, no pinning, transform/opacity-only animations |
| 3D scene | 1 draw call, ≤20k particles, one shader pair, zero textures, zero models |
| Fonts | Inter latin subset, 3 weights (400/600/700), `display: swap` |
| Images | `next/image`, AVIF/WebP, lazy below fold |

## 5. Build structure (Step 4 handoff — for implementation after approval)

Next.js (App Router) + Tailwind + Framer Motion + React Three Fiber + drei. TypeScript.

```
app/
  layout.tsx              # Inter font, metadata, PersonaProvider
  page.tsx                # section sequence (server component shell)
  globals.css             # Tailwind, CSS vars for palette
components/
  layout/  Nav.tsx · Footer.tsx
  hero/    Hero.tsx · PersonaToggle.tsx · HeroPoster.tsx
           HeroScene.tsx        # R3F canvas — ONLY file importing three/r3f/drei
           useSceneGate.ts      # viewport + reduced-motion + hardware gating
  metrics/ MetricsBand.tsx · Counter.tsx
  work/    CaseStudyFlagship.tsx · CaseStudyFeatured.tsx · CaseStudyCard.tsx
  services/ ServicesGrid.tsx · AiCapabilities.tsx
  process/ ProcessSteps.tsx
  social/  Testimonials.tsx
  about/   About.tsx
  cta/     ClosingCta.tsx · PersonaCtaButtons.tsx
lib/
  persona.tsx             # context + localStorage + ?for= param
  motion.ts               # shared variants, easing, durations, stagger
content/                  # ALL copy/data lives here — no strings in components
  site.ts                 # name, links, WhatsApp number, booking URL, motionProfile
  case-studies.ts         # typed CaseStudy[] (tier: flagship|featured|compact)
  services.ts · testimonials.ts · metrics.ts
public/
  resume.pdf              # [PLACEHOLDER]
  images/headshot.jpg     # [PLACEHOLDER]
  images/clients/*        # logos ×7 [PLACEHOLDER]
  images/case-studies/*   # screenshots [PLACEHOLDER]
```

Placeholder convention: every unreal asset/number renders with a visible `[PLACEHOLDER]` badge in dev so nothing fake ships silently.

## 6. Needed from Eshenake before/while building

1. **Real numbers**: headline + 2 supporting metrics and timeframe per case study (Chibest, MJI, Winx, Richland minimum), plus 3–4 aggregate numbers for the metrics band.
2. Existing problem→action→results copy for all 7 case studies (paste as-is; I'll edit into the structure).
3. Headshot, client logos, analytics screenshots, resume PDF.
4. WhatsApp number, booking link (Calendly/Cal.com?), email, social links.
5. 3–5 testimonials (name, role, permission).
6. Confirm services list and process steps.

*(Build can start with placeholders — none of this blocks approval.)*

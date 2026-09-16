---
name: impeccable-design
description: Production-grade frontend design system with anti-AI-slop enforcement, comprehensive design references (typography, color, spatial, motion, interaction, responsive, UX writing), 20 design commands, critique framework, and 60-component library. Use when building web components, pages, applications, dashboards, or any UI work — or when reviewing, auditing, or improving existing designs.
license: Apache 2.0. Based on Anthropic's frontend-design skill and pbakaus/impeccable. See NOTICE.
---

# Impeccable Design System

Production-grade frontend design. Distinctive interfaces that avoid generic AI aesthetics. This skill consolidates design principles, 7 reference domains, 20 design commands, a critique framework, and a 60-component library into one system.

---

## Companion skills (use these together)

This skill is the visual and typographic theory. Pair it with:

- **`frontend-craft`** for code-level interaction and motion craft.
- **`design-tokens`** for OKLCH/DTCG token systems.
- **`accessibility-audit`** for WCAG 2.2 AA and EAA.
- Open-source anti-slop tooling: `pbakaus/impeccable` (a rule-based detector plus git hooks) and `leonxlnx/taste-skill` (mechanical pre-flight checks).

**Two upgrades to apply by default now:**
1. **Anti-slop is a checklist, not a vibe.** Run output against the common tells (Inter-default, centered-hero + 3 icon cards, purple-gradient reflex, colored left-border cards, all-caps labels, etc.). For AI-generated UI, run a deterministic anti-slop pre-filter such as `pbakaus/impeccable`'s detector.
2. **APCA for dark-mode readability.** Keep WCAG 2 (4.5:1 / 3:1) for any compliance claim, but use APCA Lc as a quality check where WCAG 2 misleads (dark mode especially). Never claim conformance via APCA.

---

## Anti-Monoculture Hardening (backported from impeccable v3.1.0 + taste-skill)

These are the strongest anti-slop mechanisms from the maintained upstreams (`pbakaus/impeccable`, `leonxlnx/taste-skill`). They make "avoid AI slop" enforceable instead of aspirational. Their repos ship the runnable deterministic detectors; this is the judgment layer.

### The two-order slop test (apply before committing to a direction)
- **First order:** if you can guess the theme + palette from the *category alone* ("AI tool → dark + purple", "finance → navy + serif"), you took the training reflex. Rework.
- **Second order:** if you can guess the aesthetic from *category + the obvious anti-reference* ("AI tool that's NOT SaaS-cream → editorial-typographic with display-italic serif"), you fell into the trap one tier deeper. Rework until **both** are non-obvious.

### Reflex-reject lists (refuse these defaults by name)
- **Banned-by-default fonts** (saturated AI tells): Inter, Roboto, Open Sans, Lato, DM Sans/Serif, Outfit, Plus Jakarta, Space Grotesk/Mono, IBM Plex *, Instrument Serif, Fraunces, Newsreader, Lora, Crimson, Playfair, Cormorant, Syne. Using one is allowed only with a stated reason that beats the alternatives. Rotate: do not reuse the last project's signature face.
- **Banned aesthetic lanes** (the current over-rotation): "editorial-typographic = display italic serif + mono labels + ruled separators." Treat saturated lanes as off-limits, not as the safe choice.
- **2026 cream/beige ban:** the cream/sand/beige body background (OKLCH L 0.84–0.97, C < 0.06, hue 40–100) is *the* saturated default of 2026. Token names `--paper/--cream/--sand/--bone/--linen` are tells in themselves. Tinted neutrals add only 0.005–0.015 chroma toward the brand hue.

### Theme choice by physical scene (not by default)
Dark vs light is never a reflex. Write one sentence of physical scene: *who* uses this, *where*, under *what ambient light*, in *what mood*. If that sentence does not force the answer, it is not concrete enough. Color-commitment axis: Restrained → Committed → Full-palette → **Drenched** (the surface *is* the color). Pick a point deliberately.

### Absolute bans (match-and-refuse, rewrite the element)
- Side-stripe / colored left-border cards > 1px · gradient text (`background-clip: text`) · default glassmorphism · the hero-metric template · grids of identical icon-top cards · an eyebrow/kicker on every section (appears on 55–95% of AI generations) · numbered section markers `01 / 02 / 03` · text overflow/clipping · AI-purple or AI-cyan accent · colored drop-shadow "glows."

### "Jane Doe" content ban
No placeholder slop: fake names ("John Doe", "Sarah Chen"), fake-perfect numbers (`99.99%`, `10,000+`), startup-slop brand names ("Acme", "Nexus", "SmartFlow"), filler verbs ("Elevate", "Seamless", "Unleash", "Revolutionize"). Use real, specific, branded content. **Never use em-dashes** (also Tigran's standing rule).

### Imagery is required for image-led work
"Zero images is a bug, not a design choice" for any image-led brief. Search for the brand's *physical object*, not the category ("handmade pasta on a scratched wooden table" > "Italian food"). Alt text is part of the voice. Fake `<div>` rectangles standing in for a product preview is a tell.

### The 3 Dials (infer from the brief, state them before coding)
- `DESIGN_VARIANCE` 1–10 (symmetrical → asymmetric) · `MOTION_INTENSITY` 1–10 (static → cinematic) · `VISUAL_DENSITY` 1–10 (gallery → cockpit). Public-sector/trust → ~3/2/5; agency/playful → ~9/8/4; SaaS dashboard → ~4/4/7. These set the build's character and feed the `/site` pipeline.

> Deeper reference: `pbakaus/impeccable` (detector plus git hooks and commands) and `leonxlnx/taste-skill` (mechanical pre-flight checks).

---

## Context Gathering Protocol

Design skills produce generic output without project context. You MUST have confirmed design context before doing any design work.

**Required context** (every design task needs at minimum):
- **Target audience**: Who uses this product and in what context?
- **Use cases**: What jobs are they trying to get done?
- **Brand personality/tone**: How should the interface feel?

**CRITICAL**: You cannot infer this from code. Code tells you what was built, not who it's for.

**Gathering order:**
1. **Check loaded instructions**: If CLAUDE.md or current instructions contain design context, proceed.
2. **Check .impeccable.md**: Read from project root. If it exists with required context, proceed.
3. **Ask the user**: If neither source has context, ask for audience, use cases, and brand personality before designing.

---

## Design Direction

Commit to a BOLD aesthetic direction before writing any code:

- **Purpose**: What problem does this interface solve? Who uses it?
- **Tone**: Pick an extreme — brutally minimal, maximalist chaos, retro-futuristic, organic/natural, luxury/refined, playful/toy-like, editorial/magazine, brutalist/raw, art deco/geometric, soft/pastel, industrial/utilitarian. Use these for inspiration but design one true to the aesthetic.
- **Constraints**: Technical requirements (framework, performance, accessibility).
- **Differentiation**: What makes this UNFORGETTABLE? What's the one thing someone will remember?

**CRITICAL**: Choose a clear conceptual direction and execute with precision. Bold maximalism and refined minimalism both work — the key is intentionality, not intensity.

Then implement working code that is:
- Production-grade and functional
- Visually striking and memorable
- Cohesive with a clear aesthetic point-of-view
- Meticulously refined in every detail

---

## The AI Slop Test

**Critical quality check**: If you showed this interface to someone and said "AI made this," would they believe you immediately? If yes, that's the problem.

A distinctive interface should make someone ask "how was this made?" not "which AI made this?"

Review the DON'T guidelines throughout this skill — they are the fingerprints of AI-generated work from 2024-2025.

---

# REFERENCE: Typography

## Vertical Rhythm

Line-height should be the base unit for ALL vertical spacing. If body text has `line-height: 1.5` on 16px (= 24px), spacing values should be multiples of 24px.

## Modular Scale & Hierarchy

Use fewer sizes with more contrast. A 5-size system covers most needs:

| Role | Typical Ratio | Use Case |
|------|---------------|----------|
| xs | 0.75rem | Captions, legal |
| sm | 0.875rem | Secondary UI, metadata |
| base | 1rem | Body text |
| lg | 1.25-1.5rem | Subheadings, lead text |
| xl+ | 2-4rem | Headlines, hero text |

Popular ratios: 1.25 (major third), 1.333 (perfect fourth), 1.5 (perfect fifth). Pick one and commit.

## Readability & Measure

Use `ch` units for character-based measure (`max-width: 65ch`). Line-height scales inversely with line length. Increase line-height 0.05-0.1 for light text on dark backgrounds.

## Font Selection

**Avoid invisible defaults**: Inter, Roboto, Open Sans, Lato, Montserrat.

**Better Google Fonts alternatives**:
- Instead of Inter → **Instrument Sans**, **Plus Jakarta Sans**, **Outfit**
- Instead of Roboto → **Onest**, **Figtree**, **Urbanist**
- Instead of Open Sans → **Source Sans 3**, **Nunito Sans**, **DM Sans**
- For editorial/premium → **Fraunces**, **Newsreader**, **Lora**

**You often don't need a second font.** One well-chosen family in multiple weights creates cleaner hierarchy than two competing typefaces.

When pairing, contrast on multiple axes: Serif + Sans, Geometric + Humanist, Condensed display + Wide body. **Never pair similar-but-not-identical fonts.**

## Web Font Loading

```css
@font-face {
  font-family: 'CustomFont';
  src: url('font.woff2') format('woff2');
  font-display: swap;
}
@font-face {
  font-family: 'CustomFont-Fallback';
  src: local('Arial');
  size-adjust: 105%;
  ascent-override: 90%;
  descent-override: 20%;
  line-gap-override: 10%;
}
body { font-family: 'CustomFont', 'CustomFont-Fallback', sans-serif; }
```

## Fluid Type

Use `clamp(min, preferred, max)` for headings on marketing/content pages. Use fixed `rem` scales for app UIs, dashboards, data-dense interfaces. Body text should always be fixed.

## OpenType Features

```css
.data-table { font-variant-numeric: tabular-nums; }
.recipe-amount { font-variant-numeric: diagonal-fractions; }
abbr { font-variant-caps: all-small-caps; }
code { font-variant-ligatures: none; }
body { font-kerning: normal; }
```

## Typography Rules

- **DO**: Modular type scale with fluid sizing (clamp), vary weights/sizes for hierarchy
- **DON'T**: Use Inter/Roboto/Arial/Open Sans/system defaults
- **DON'T**: Use monospace as lazy shorthand for "technical"
- **DON'T**: Put large icons with rounded corners above every heading
- **DON'T**: Use more than 2-3 font families
- **DON'T**: Set body text below 16px
- **DON'T**: Use `px` for font sizes — use `rem`
- **DON'T**: Disable zoom (`user-scalable=no`)
- Name tokens semantically (`--text-body`, `--text-heading`), not by value

---

# REFERENCE: Color & Contrast

## Use OKLCH, Not HSL

OKLCH is perceptually uniform — equal steps in lightness *look* equal.

```css
--color-primary: oklch(60% 0.15 250);
--color-primary-light: oklch(85% 0.08 250);
--color-primary-dark: oklch(35% 0.12 250);
```

**Key**: As you move toward white/black, reduce chroma. High chroma at extreme lightness looks garish.

## Tinted Neutrals

**Pure gray is dead.** Add brand hue hint to all neutrals:

```css
/* Warm-tinted (brand warmth) */
--gray-100: oklch(95% 0.01 60);
--gray-900: oklch(15% 0.01 60);
/* Cool-tinted (tech, professional) */
--gray-100: oklch(95% 0.01 250);
--gray-900: oklch(15% 0.01 250);
```

Chroma 0.01 is tiny but perceptible — creates subconscious cohesion.

## Palette Structure

| Role | Purpose | Example |
|------|---------|---------|
| **Primary** | Brand, CTAs, key actions | 1 color, 3-5 shades |
| **Neutral** | Text, backgrounds, borders | 9-11 shade scale |
| **Semantic** | Success, error, warning, info | 4 colors, 2-3 shades each |
| **Surface** | Cards, modals, overlays | 2-3 elevation levels |

Skip secondary/tertiary unless needed. Most apps work with one accent.

## The 60-30-10 Rule (Visual Weight)

- **60%**: Neutral backgrounds, white space, base surfaces
- **30%**: Secondary — text, borders, inactive states
- **10%**: Accent — CTAs, highlights, focus states

Accent colors work *because* they're rare. Overuse kills their power.

## Contrast & Accessibility

| Content Type | AA Minimum | AAA Target |
|-------------|-----------|-----------|
| Body text | 4.5:1 | 7:1 |
| Large text (18px+) | 3:1 | 4.5:1 |
| UI components, icons | 3:1 | 4.5:1 |

**Dangerous combinations**: Light gray on white, gray on colored backgrounds, red on green, blue on red, yellow on white.

## Dark Mode

Dark mode is NOT inverted light mode:
- Depth via lighter surfaces, not shadows
- Reduce font weight slightly (400 → 350)
- Desaturate accents slightly
- Never pure black — use dark gray (oklch 12-18%)
- Use semantic token layers: primitive (`--blue-500`) + semantic (`--color-primary: var(--blue-500)`)

## Alpha Is A Design Smell

Heavy transparency usually means incomplete palette. Define explicit overlay colors instead. Exception: focus rings and interactive states.

## Color Rules

- **DO**: OKLCH, tint neutrals toward brand, commit to cohesive palette
- **DON'T**: Gray text on colored backgrounds — use shade of background color
- **DON'T**: Pure black (#000) or pure white (#fff)
- **DON'T**: Cyan-on-dark, purple-to-blue gradients, neon accents on dark
- **DON'T**: Gradient text on metrics/headings
- **DON'T**: Dark mode with glowing accents as default

---

# REFERENCE: Spatial Design

## Spacing System

Use **4pt base, not 8pt** — 8pt is too coarse. Scale: 4, 8, 12, 16, 24, 32, 48, 64, 96px. Name semantically (`--space-sm`, not `--spacing-8`). Use `gap` instead of margins for siblings.

## Grid Systems

`repeat(auto-fit, minmax(280px, 1fr))` for responsive grids without breakpoints. Named grid areas (`grid-template-areas`) for complex layouts.

## Visual Hierarchy — The Squint Test

Blur your eyes. Can you identify: most important element, second most important, clear groupings? If everything looks same weight, hierarchy problem.

| Tool | Strong | Weak |
|------|--------|------|
| Size | 3:1+ ratio | <2:1 |
| Weight | Bold vs Regular | Medium vs Regular |
| Color | High contrast | Similar tones |
| Position | Top/left | Bottom/right |
| Space | Surrounded by whitespace | Crowded |

Best hierarchy uses 2-3 dimensions at once.

## Cards Are Not Required

Use cards only when content is truly distinct and actionable. Spacing and alignment create grouping naturally. **Never nest cards inside cards.**

## Container Queries

Viewport queries for pages. Container queries for components:

```css
.card-container { container-type: inline-size; }
@container (min-width: 400px) {
  .card { grid-template-columns: 120px 1fr; }
}
```

## Touch Targets

Buttons can look small but need 44px minimum targets. Use pseudo-elements:

```css
.icon-button { width: 24px; height: 24px; position: relative; }
.icon-button::before { content: ''; position: absolute; inset: -10px; }
```

## Spatial Rules

- **DO**: Varied spacing (tight groupings + generous separations), fluid spacing with `clamp()`
- **DO**: Asymmetry and unexpected compositions, break grid intentionally
- **DON'T**: Same spacing everywhere, wrap everything in cards, nest cards
- **DON'T**: Identical card grids (icon + heading + text, repeated)
- **DON'T**: Hero metric layout template (big number, small label, gradient accent)
- **DON'T**: Center everything — left-aligned with asymmetric layouts feels more designed

---

# REFERENCE: Motion Design

## Duration: The 100/300/500 Rule

| Duration | Use Case |
|----------|----------|
| 100-150ms | Instant feedback (button press, toggle) |
| 200-300ms | State changes (menu open, tooltip, hover) |
| 300-500ms | Layout changes (accordion, modal, drawer) |
| 500-800ms | Entrance animations (page load, hero reveals) |

**Exit animations at ~75% of enter duration.**

## Easing

**Don't use `ease`.** Use exponential curves:

```css
--ease-out-quart: cubic-bezier(0.25, 1, 0.5, 1);   /* Smooth, refined (default) */
--ease-out-quint: cubic-bezier(0.22, 1, 0.36, 1);   /* Slightly snappier */
--ease-out-expo: cubic-bezier(0.16, 1, 0.3, 1);     /* Confident, decisive */
```

**Avoid bounce and elastic curves.** They're dated and tacky. Real objects decelerate smoothly.

## Only Animate transform + opacity

Everything else causes layout recalculation. For height: `grid-template-rows: 0fr → 1fr`.

## Staggered Animations

`animation-delay: calc(var(--i, 0) * 50ms)`. Cap total stagger — 10 items × 50ms = 500ms max.

## Reduced Motion (Non-Optional)

Vestibular disorders affect ~35% of adults over 40.

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

Preserve: progress bars, loading spinners (slowed), focus indicators — just without spatial movement.

## Perceived Performance

- **80ms threshold**: Under 80ms feels instant
- **Optimistic UI**: Update immediately, sync later (for low-stakes actions)
- **Preemptive start**: Begin transitions while loading
- **Ease-in toward completion** compresses perceived time
- Faster spinners make loading *feel* faster
- `ease-out` at 200ms feels faster than `ease-in` at 200ms

## Animation Decision Framework

Before adding any animation, run this decision tree:

**Step 1 — Should this animate at all?**
| Frequency | Animate? |
|-----------|----------|
| Every few seconds (typing, scrolling) | Never |
| Every few minutes (tab switch, filter) | Subtle only |
| Occasionally (modal open, page nav) | Yes, purposeful |
| Rarely (onboarding, first action) | Yes, delightful |

**Never animate keyboard-initiated actions** — high-frequency actions should feel instant.

**Step 2 — What easing?**
| Context | Easing |
|---------|--------|
| Element entering | `ease-out` — fast start, gentle land |
| Element exiting | `ease-in` — gentle start, fast exit |
| Morphing/resizing | `ease-in-out` — smooth both ends |
| Hover/micro-interaction | `ease-out`, very short duration |

**Custom easing curves (production-tested):**
```css
--ease-out-smooth: cubic-bezier(0.23, 1, 0.32, 1);     /* General ease-out */
--ease-in-out-smooth: cubic-bezier(0.77, 0, 0.175, 1);  /* Symmetric morph */
--ease-ios-drawer: cubic-bezier(0.32, 0.72, 0, 1);      /* iOS sheet/drawer */
```

**Step 3 — Spring or duration-based?**
Use springs when: element responds to user gesture, dragging, interruptible animations (user can change direction mid-animation). Use duration-based when: fire-and-forget entrance/exit, non-interactive decorative motion.

---

# REFERENCE: Micro-Polish

Small details that separate polished interfaces from generic ones.

## Concentric Border Radius

When nesting rounded elements (e.g., card with rounded button inside), the outer radius must account for padding:

```
outerRadius = innerRadius + padding
```

Example: Button has `border-radius: 8px`, card padding is `16px` → card needs `border-radius: 24px`. This creates visually concentric curves.

## Optical vs Geometric Alignment

Geometric center ≠ visual center. Adjust manually:
- **Play buttons/triangles**: Shift right ~2px to appear centered
- **Icons next to text**: Align to optical center, not bounding box
- **Circular elements**: Often need 1-2px nudge to *look* centered

## Shadows Over Borders

Layer multiple transparent box-shadows instead of solid borders for depth:

```css
.card {
  box-shadow:
    0 1px 2px rgba(0,0,0,0.04),
    0 4px 8px rgba(0,0,0,0.04),
    0 8px 16px rgba(0,0,0,0.02);
}
```

This creates natural depth. Solid borders feel flat and dated.

## Image Outlines

Add subtle outline for consistent depth on images with varying backgrounds:

```css
img { outline: 1px solid rgba(0,0,0,0.06); outline-offset: -1px; }
```

## Text Wrapping

```css
h1, h2, h3 { text-wrap: balance; }  /* Even line lengths for headings */
p { text-wrap: pretty; }             /* Avoids orphans in paragraphs */
```

## Scale on Press

For tactile button feedback: `transform: scale(0.96)` on `:active`. Never go below `0.95` — it feels broken.

```css
button:active { transform: scale(0.96); }
```

## Animation Specifics

- **Never `transition: all`** — specify exact properties: `transition: transform 200ms, opacity 200ms`
- **Skip animation on page load** — use `initial={false}` on AnimatePresence (Framer Motion) or delay first paint
- **Icon micro-animation recipe**: scale 0.25→1, opacity 0→1, blur 4px→0, spring `{ duration: 0.3, bounce: 0 }`

## Micro-Polish Checklist

Before shipping, verify:
- [ ] Concentric border radii on nested rounded elements
- [ ] Optical alignment on icons and asymmetric shapes
- [ ] Layered shadows instead of solid borders for depth
- [ ] `text-wrap: balance` on headings
- [ ] Scale-on-press for interactive elements
- [ ] No `transition: all` anywhere
- [ ] Image outlines for consistent depth
- [ ] Specific transition properties listed (not `all`)

---

# REFERENCE: Interaction Design

## The Eight Interactive States

Every interactive element needs: Default, Hover, Focus, Active, Disabled, Loading, Error, Success.

**Common miss**: Designing hover without focus. Keyboard users never see hover states.

## Focus Rings

```css
button:focus { outline: none; }
button:focus-visible {
  outline: 2px solid var(--color-accent);
  outline-offset: 2px;
}
```

Never `outline: none` without replacement.

## Form Design

- Placeholders aren't labels — always use visible `<label>`
- Validate on blur, not every keystroke
- Errors below fields with `aria-describedby`
- Skeleton screens > spinners

## Dropdown Positioning

Dropdowns inside `overflow: hidden` get clipped. Solutions:
1. **CSS Anchor Positioning** (Chrome 125+): `position: fixed` + `position-anchor`
2. **Popover API**: `popover` attribute puts element in top layer
3. **Portal pattern**: `createPortal(dropdown, document.body)` in React
4. **Fixed positioning fallback**: `position: fixed` with JS coordinates

## Destructive Actions: Undo > Confirm

Users click through confirmations mindlessly. Remove from UI immediately, show undo toast, delete after expiry.

## Keyboard Navigation

Roving tabindex for component groups (tabs, menus). One item tabbable, arrow keys move within. Skip links for keyboard users.

## Interaction Rules

- **DO**: Progressive disclosure, optimistic UI, design empty states that teach
- **DO**: Make every interactive surface feel intentional and responsive
- **DON'T**: Repeat same information, make every button primary
- **DON'T**: Use modals unless truly no better alternative
- **DON'T**: Touch targets <44×44px, custom controls without ARIA/keyboard

---

# REFERENCE: Responsive Design

## Mobile-First

Start with base styles for mobile, layer complexity with `min-width` queries. Three breakpoints usually suffice (640, 768, 1024px). Let content tell you where to break.

## Detect Input Method

```css
@media (pointer: fine) { .button { padding: 8px 16px; } }
@media (pointer: coarse) { .button { padding: 12px 20px; } }
@media (hover: hover) { .card:hover { transform: translateY(-2px); } }
```

Don't rely on hover for functionality.

## Safe Areas

```css
body {
  padding-top: env(safe-area-inset-top);
  padding-bottom: env(safe-area-inset-bottom);
}
```

Enable: `<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">`

## Responsive Images

```html
<img src="hero-800.jpg"
  srcset="hero-400.jpg 400w, hero-800.jpg 800w, hero-1200.jpg 1200w"
  sizes="(max-width: 768px) 100vw, 50vw" alt="Hero image">
```

Use `<picture>` for art direction (different crops).

## Layout Adaptation

- **Navigation**: Hamburger on mobile → horizontal on tablet → full on desktop
- **Tables**: Transform to cards on mobile
- **Content**: `<details>/<summary>` for collapsible on mobile
- Test on real devices, not just DevTools

---

# REFERENCE: UX Writing

## Button Labels

Never "OK", "Submit", "Yes/No". Use verb + object: "Save changes", "Create account", "Delete message".

For destructive actions: "Delete" (permanent) not "Remove" (recoverable). Show counts: "Delete 5 items".

## Error Messages

Every error answers: (1) What happened? (2) Why? (3) How to fix?

| Situation | Template |
|-----------|----------|
| Format error | "[Field] needs to be [format]. Example: [example]" |
| Missing required | "Please enter [what's missing]" |
| Permission | "You don't have access to [thing]. [What to do]" |
| Network | "Couldn't reach [thing]. Check connection and [action]." |
| Server | "Something went wrong on our end. [Alternative action]" |

Never blame the user.

## Empty States

Acknowledge briefly → explain value → provide clear action. "No projects yet. Create your first one to get started." Not just "No items".

## Voice vs Tone

Voice = consistent personality. Tone adapts: celebratory for success, empathetic for error, reassuring for loading, serious for destructive confirm. **Never humor for errors.**

## Writing Rules

- Link text with standalone meaning ("View pricing plans" not "Click here")
- Alt text describes information ("Revenue up 40% in Q4" not "Chart")
- Icon buttons need `aria-label`
- Pick one term and stick with it (Delete/Remove/Trash → pick one)

---

# REFERENCE: Cognitive Load

## Working Memory Rule

Humans hold ≤4 items at once. At any decision point, count options:
- ≤4: Manageable
- 5-7: Consider grouping
- 8+: Overloaded — users skip, misclick, or abandon

**Practical**: Nav ≤5 top-level, form ≤4 fields per group, action buttons 1 primary + 1-2 secondary, pricing ≤3 tiers.

## Cognitive Load Checklist

- [ ] Single focus: primary task without distraction?
- [ ] Chunking: info in groups ≤4?
- [ ] Grouping: related items visually grouped?
- [ ] Visual hierarchy: immediately clear what's most important?
- [ ] One thing at a time: single decision before next?
- [ ] Minimal choices: ≤4 visible options per decision?
- [ ] Working memory: no need to remember from previous screen?
- [ ] Progressive disclosure: complexity only when needed?

0-1 failures = good. 2-3 = moderate. 4+ = critical fix needed.

---

# DESIGN COMMANDS

These are the 20 design operations available. Each can be invoked as a workflow step.

## /teach-impeccable
One-time setup. Explore codebase for existing design context, ask user UX-focused questions (audience, brand personality, aesthetic preferences, accessibility), write results to `.impeccable.md`.

## /audit
Technical quality checks across 5 dimensions (accessibility, performance, theming, responsive, anti-patterns). Generates scored report with P0-P3 severity and action plan.

## /critique
Holistic UX evaluation: AI slop detection, visual hierarchy, information architecture, emotional journey, discoverability, composition, typography, color, states, microcopy. Nielsen's 10 heuristics scored 0-4. Persona-based testing with 5 archetypes.

## /polish
Final quality pass: alignment, spacing, consistency, interaction states, transitions, copy, icons, forms, edge cases, responsiveness, performance, code quality. The 20-item polish checklist.

## /bolder
Amplify safe/boring designs. Typography amplification (extreme scale jumps, weight contrast), color intensification, spatial drama (grid-breaking, overlap, asymmetry), visual effects, motion choreography.

## /quieter
Reduce overstimulating designs. Color refinement (desaturate, soften), visual weight reduction, simplification, motion reduction, composition refinement. Quiet ≠ boring — it means refined.

## /animate
Add purposeful motion. Entrance animations, micro-interactions, state transitions, navigation flow, feedback guidance, delight moments. Hero moment strategy + systematic implementation.

## /arrange
Fix layout and spacing. Establish spacing system, create visual rhythm, choose right layout tool (Flexbox vs Grid), break card grid monotony, strengthen hierarchy, manage depth.

## /typeset
Fix typography. Font selection, hierarchy establishment, readability fixes, detail refinement (tabular-nums, letter-spacing, kerning), weight consistency.

## /colorize
Add strategic color to monochromatic designs. Semantic color, accent application, background/surface tinting, data visualization, borders/accents, typography color.

## /adapt
Responsive adaptation. Mobile/tablet/desktop/print/email strategies. Layout, interaction, content, and navigation adaptation per context.

## /clarify
Improve UX copy. Error messages, form labels, button text, help text, empty states, success messages, loading states, confirmation dialogs, navigation labels.

## /distill
Strip to essence. Remove unnecessary complexity, consolidate repetition, simplify navigation, reduce visual noise.

## /extract
Extract reusable design tokens and patterns from existing code into a systematic design system.

## /harden
Strengthen error handling, edge cases, loading states, offline handling, data validation.

## /normalize
Unify inconsistent patterns into a consistent system. Consolidate spacing, typography, color, interaction patterns.

## /onboard
Design first-time user experience. Progressive onboarding, empty states, guided discovery.

## /optimize
Performance optimization. Image optimization, lazy loading, animation performance, bundle size, render performance.

## /delight
Add moments of joy. Micro-interactions, personality in copy, custom illustrations, satisfying interactions, easter eggs. Delight amplifies, never blocks.

## /overdrive
Push to technically extraordinary. WebGL, 3D, scroll-driven animations, generative art, real-time data visualization, audio-reactive interfaces.

---

# CRITIQUE FRAMEWORK

## UI Review Format

When reviewing or suggesting design changes, use this structure for clarity:

| Before | After | Why |
|--------|-------|-----|
| Current state | Proposed change | Reasoning |

This forces specificity — no vague "make it better" suggestions.

## Nielsen's 10 Heuristics (Score 0-4 Each)

1. **Visibility of System Status** — Loading indicators, confirmations, progress, current location
2. **Match System / Real World** — Familiar terminology, logical order, recognizable icons
3. **User Control and Freedom** — Undo/redo, cancel, clear navigation back
4. **Consistency and Standards** — Same words/actions mean same things, platform conventions
5. **Error Prevention** — Confirmation before destructive, constraints, smart defaults
6. **Recognition Over Recall** — Visible options, contextual help, labels on icons
7. **Flexibility and Efficiency** — Keyboard shortcuts, customization, bulk actions
8. **Aesthetic and Minimalist Design** — Only necessary info, clear hierarchy, purposeful color
9. **Error Recovery** — Plain language, specific problem, actionable suggestion
10. **Help and Documentation** — Searchable, contextual, task-focused, concise

**Total: /40.** 36-40 Excellent, 28-35 Good, 20-27 Acceptable, 12-19 Poor, 0-11 Critical.

## 5 Test Personas

1. **Alex (Power User)** — Expects efficiency, keyboard shortcuts, batch operations. Red flags: forced tutorials, no keyboard nav, slow animations
2. **Jordan (First-Timer)** — Needs guidance at every step. Red flags: icon-only nav, jargon, no help, ambiguous next steps
3. **Sam (Accessibility)** — Screen reader, keyboard-only. Red flags: no focus indicators, color-only meaning, unlabeled buttons
4. **Riley (Stress Tester)** — Tests edge cases, unexpected input. Red flags: silent failures, broken error states, data loss on refresh
5. **Casey (Mobile)** — One-handed, interrupted, slow connection. Red flags: top-of-screen actions, no state persistence, tiny targets

## AI-Era Critique: Build the Judge, Not the Spec (NN/g)

When the thing you are designing is AI-driven (nondeterministic output: chat, generated copy, generated media, agent behavior), you cannot spec exact behavior. Your authorship moves to **defining what "good" looks like**, then running a loop:

1. **Define a Judge** — objective-but-not-arbitrary criteria grounded in user research. Classify the output *type* first, then apply type-specific criteria.
2. **Evaluate** — manual review first, then LLM-as-judge at scale, **calibrated to ~0.8 F1** against human-annotated examples.
3. **Iterate both** — fix the system AND the rubric. Decompose into specialized sub-judges (typography, color, contrast, verbosity, relevance). Monitor for regressions after every change.

Apply this whenever a design produces dynamic or generated output rather than fixed pixels. (Reference: NN/g, "Build the Judge, Not the Spec.")

---

# COMPONENT QUICK REFERENCE

15 most common components (the essentials from a larger component library).

| Component | When | Key Rule |
|-----------|------|----------|
| **Button** | Trigger actions | Verb-first labels; one primary per section |
| **Card** | Represent entity | Media → title → meta → action; shadow OR border, not both |
| **Modal** | Focused attention | Trap focus; X + Cancel + Escape to close |
| **Navigation** | Page/section links | 5-7 items max; clear active state |
| **Table** | Structured data | Sticky header; right-align numbers; sortable |
| **Tabs** | Switch panels | 2-7 tabs; active indicator; accordion on mobile |
| **Form** | Collect input | Single column; labels above; inline validation on blur |
| **Toast** | Brief confirmation | Auto-dismiss 4-6s; undo for destructive ops |
| **Alert** | Important status | Semantic colors + icon; max 2 sentences |
| **Drawer** | Secondary panel | Right for detail, left for nav; 320-480px |
| **Search** | Find content | Cmd/Ctrl+K shortcut; debounce 200-300ms |
| **Empty State** | No data | Illustration + headline + CTA; positive framing |
| **Skeleton** | Loading | Match actual layout; shimmer animation |
| **Badge** | Status/metadata | 1-2 words; pill shape; limited palette |
| **Dropdown** | Action/nav options | 7±2 items; destructive last in red |

---

# ANTI-PATTERNS (NEVER Generate These)

## AI Slop Tells
- Inter/Roboto/Arial/Open Sans/system defaults
- Purple-to-blue gradients, cyan-on-dark, neon accents
- Gradient text on metrics/headings
- Dark mode with glowing accents as default
- Glassmorphism everywhere (blur, glass cards, glow borders)
- Hero metric layout (big number, small label, gradient accent)
- Identical card grids (icon + heading + text, repeated)
- Monospace as lazy "technical/developer" vibe
- Rounded rectangles with generic drop shadows
- Large icons with rounded corners above every heading

## UX Anti-Patterns
- Cards nested inside cards
- Gray text on colored backgrounds
- Pure black (#000) or pure white (#fff)
- Bounce/elastic easing (dated, tacky)
- Everything centered with same spacing everywhere
- Rounded elements with thick colored border on one side
- Sparklines as decoration (no meaning)
- Modals unless truly necessary
- Rainbow badges with no semantic meaning
- Modal inside modal
- Disabled submit with no explanation
- "Click here" links
- Hamburger menu on desktop
- Auto-advancing carousels
- Placeholder-only form fields
- Equal-weight buttons (no hierarchy)
- Animating layout properties (width, height, padding, margin)

---

# IMPLEMENTATION

## Tech Stack (Default)

```
Framework:     React + Tailwind CSS (unless user specifies)
Spacing:       4pt base scale (4, 8, 12, 16, 24, 32, 48, 64, 96)
Colors:        OKLCH via CSS custom properties
Typography:    Tailwind text utilities; distinctive Google Fonts
States:        Hover, focus-visible, active, disabled for all interactive elements
Responsive:    Mobile-first; test at 375, 768, 1440px
Accessibility: Semantic HTML, ARIA, focus management, WCAG AA
Motion:        transform + opacity only, ease-out-quart default
```

## Implementation Principles

Match complexity to aesthetic vision. Maximalist needs elaborate code. Minimalist needs restraint and precision.

Interpret creatively. No design should be the same. Vary themes, fonts, aesthetics. **NEVER converge on common choices across generations.**

---
name: Shreyas Deshpande Portfolio
description: A minimalist glassmorphic personal portfolio with a cobalt accent and dual light/dark themes.
colors:
  bg-dark: "#0a0b10"
  bg-elevated-dark: "#101219"
  text-primary-dark: "#f3f4f8"
  text-secondary-dark: "#a8adba"
  text-tertiary-dark: "#6d7280"
  bg-light: "#f2f3f6"
  bg-elevated-light: "#ffffff"
  text-primary-light: "#14161c"
  text-secondary-light: "#52565f"
  text-tertiary-light: "#7b7f89"
  accent-dark: "#5b7fff"
  accent-light: "#2b4de0"
  orb-cobalt: "#3d5cff"
  orb-neutral: "#6c7280"
typography:
  display:
    fontFamily: "Bricolage Grotesque, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2.6rem, 1.7rem + 4vw, 4.6rem)"
    fontWeight: 600
    lineHeight: 1.02
    letterSpacing: "-0.02em"
  body:
    fontFamily: "Hanken Grotesk, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.5
  label:
    fontFamily: "JetBrains Mono, ui-monospace, SFMono-Regular, monospace"
    fontSize: "0.75rem"
    fontWeight: 500
    letterSpacing: "0.08em"
rounded:
  sm: "10px"
  md: "16px"
  lg: "22px"
  xl: "30px"
  pill: "999px"
spacing:
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "48px"
components:
  button-primary:
    backgroundColor: "{colors.accent-dark}"
    textColor: "#ffffff"
    rounded: "{rounded.pill}"
    padding: "0.85rem 1.4rem"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.text-primary-dark}"
    rounded: "{rounded.pill}"
    padding: "0.85rem 1.4rem"
---

# Design System: Shreyas Deshpande Portfolio

## Overview

**Creative North Star: "The Frosted Instrument Panel"**

The system reads as a single sheet of frosted glass laid over a quiet, near-black (or paper-light) field, lit from behind by one cobalt glow. Nothing else competes with it: no gradients, no second accent, no decorative iconography beyond what content requires. Every panel — nav, hero card, timeline entry, project tile, contact block — is cut from the same material, so the page feels like one instrument rather than a stack of unrelated sections.

The palette stays restrained by design: near-neutral grounds, glass surfaces built from transparency and blur rather than color, and a single cobalt accent reserved for action and emphasis. Motion is quiet and physical — exponential ease-out, no bounce, no elastic overshoot — so the glass feels like a real material settling into place, not a UI trick announcing itself.

Confirmed visual rejections: no gradients anywhere (backgrounds, text, or buttons), no bounce/elastic easing, no stock photography, no decorative eyebrows or eyebrow labels above headings, no colored border-left accent bars.

**Key Characteristics:**
- One material (frosted glass) reused for every container, never decoration layered on top of a different surface.
- One accent color (cobalt), used sparingly — action, emphasis, and status only.
- Dual themes (dark and light) built as equally-finished siblings, not a dimmed inverse of one another.
- Monospace reserved for genuine data: dates, tech tags, percentages, coordinates.
- Ambient depth from blurred solid-color fields behind the glass, never from a gradient fill.

## Colors

The palette is a near-neutral dark or light field, glass built from transparency rather than added color, and exactly one accent hue.

### Primary
- **Cobalt Signal** (`#5b7fff` dark / `#2b4de0` light): the single accent. Used for the primary CTA, active nav state, links on hover, tag borders/backgrounds at low opacity, the timeline dot, and the ambient glow behind the hero identity card.

### Neutral
- **Void** (`#0a0b10`): the dark-theme page background.
- **Paper Mist** (`#f2f3f6`): the light-theme page background.
- **Ink** (`#f3f4f8` on dark / `#14161c` on light): primary text.
- **Fog** (`#a8adba` on dark / `#52565f` on light): secondary text — body copy, descriptions.
- **Smoke** (`#6d7280` on dark / `#7b7f89` on light): tertiary text — timestamps, footer, micro-labels.
- **Glass White** (`rgba(255,255,255,0.045–0.75)` depending on theme and elevation): the frosted panel fill, always paired with `backdrop-filter: blur(18px) saturate(122%)`.

### Named Rules
**The One Accent Rule.** Cobalt is the only saturated color in the system. It never gets a second hue partner — no purple-to-blue gradient, no secondary teal. Rarity is what keeps it legible as "action."

**The No-Added-Color Glass Rule.** Glass panels never carry a tinted background color of their own. Any color a panel shows (the blue cast on the hero card, for example) comes from the ambient cobalt orb refracting through the backdrop-filter, never from a background-color choice.

## Typography

**Display Font:** Bricolage Grotesque (with ui-sans-serif, system-ui fallback)
**Body Font:** Hanken Grotesk (with ui-sans-serif, system-ui fallback)
**Label/Mono Font:** JetBrains Mono (with ui-monospace, SFMono-Regular fallback)

**Character:** Bricolage Grotesque carries a slight structural quirk in its display weights that keeps headlines from reading as generic — paired with Hanken Grotesk's clean, humanist body letterforms and JetBrains Mono's precise, code-native numerals for anything measured (dates, percentages, tech tags).

### Hierarchy
- **Display** (600, `clamp(2.6rem, 1.7rem + 4vw, 4.6rem)`, 1.02 line-height): the hero name only.
- **Headline** (600, `clamp(1.9rem, 1.5rem + 1.6vw, 2.6rem)`, tight): section titles (Experience, Selected projects, contact panel heading).
- **Title** (600, 1.2–1.25rem): card-level headings (job role, project name, education school name).
- **Body** (400, 0.9–1.05rem, 1.5–1.6 line-height, ~58–65ch max measure): bio paragraphs, summaries, descriptions.
- **Label** (500, 0.68–0.75rem, 0.08em tracking, uppercase where used): dates, status text, "based in / currently / reach" field labels — always monospace, always tied to a real data value.

### Named Rules
**The Measured-Mono Rule.** JetBrains Mono only appears next to a value that is dated, counted, or tagged (dates, percentages, tech-stack chips). It never stands in as a generic "technical" label on its own.

## Layout

Single-page scroll, one centered content column per section (max-width 880–1180px depending on section density), generous vertical rhythm (~7rem top padding per major section). The hero is the exception: a two-column grid (copy left, floating identity card right) that collapses to a single stacked column under 860px. The nav is a floating pill, centered and fixed to the viewport top, never a full-width bar — it reinforces the "instrument panel" idea of a compact control floating over the content rather than framing it.

Responsive behavior: the hero card fixed range in a single column below 860px; the nav collapses its links into a hamburger-triggered glass overlay below 760px; the project grid steps from 1 → 2 → 3 columns (700px / 1040px breakpoints), with the featured project always spanning the full row width.

## Elevation & Depth

Hybrid: flat neutral grounds carry no shadow, but every glass panel sits on a soft, blurred, offset shadow (never a flat/zero-offset halo) plus an inset top highlight that reads as a light catching the panel's top edge. Depth beyond the panel itself comes from two large, heavily blurred solid-color fields (cobalt + a neutral gray) fixed behind all content — never a gradient fill — that the glass panels partially refract via `backdrop-filter`.

### Shadow Vocabulary
- **shadow-sm** (`0 1px 2px rgba(0,0,0,0.4)` dark / `0 1px 2px rgba(20,22,28,0.06)` light): small controls (theme toggle thumb).
- **shadow-md** (`0 12px 32px -14px rgba(0,0,0,0.6), 0 4px 12px -6px rgba(0,0,0,0.5)`): the default glass panel shadow.
- **shadow-lg** (`0 30px 70px -24px rgba(0,0,0,0.7), 0 10px 28px -12px rgba(61,92,255,0.18)`): the loader card and hovered project cards — carries a faint cobalt cast in its second layer.

### Named Rules
**The Blurred-Not-Flat Rule.** Every shadow in this system has both offset and blur. A flat, zero-offset colored halo is never used as a substitute for a real shadow.

## Shapes

Rounded throughout, scaling with the container's importance: small controls use 10px, cards and panels use 16–22px, the loader card and hero identity card use 22–30px, and every pill-shaped control (buttons, nav, tags, the theme toggle track) uses a full 999px radius. Borders are always a single 1px hairline at low opacity (`rgba(255,255,255,0.1)` dark / `rgba(15,17,25,0.08)` light) — never a heavier or colored border, and never a colored `border-left` accent bar.

## Components

### Buttons
- **Shape:** full pill (999px radius).
- **Primary:** solid cobalt fill, white text, soft cobalt-tinted shadow; lifts 2px and deepens its shadow on hover, scales to 0.96 on press.
- **Ghost:** glass fill (same material as panels) with a hairline border; border and text shift to cobalt on hover.
- **Icon buttons:** circular, glass fill, muted icon color at rest, cobalt icon + cobalt-tinted background ring on hover.

### Chips / Tags
- **Style:** monospace label, pill shape, low-opacity cobalt background, hairline border, secondary text color. Used only for tech-stack tags and focus-area pills — never as a generic label.

### Cards / Containers
- **Corner style:** 16–22px radius.
- **Background:** glass fill (transparent white/black tint + blur), never a solid opaque color.
- **Shadow strategy:** shadow-md at rest; shadow-lg + border brightens on hover for interactive cards (projects).
- **Border:** 1px hairline, brightens to `border-strong` on project-card hover.
- **Internal padding:** 1.6–2rem depending on card size.

### Navigation
- **Style:** floating glass pill, centered, fixed to viewport top. Links get a soft cobalt-tinted pill background on hover/active, sliding in via opacity + scale rather than a layout shift. Active section is tracked via scroll position and reflected in real time.
- **Mobile:** links and résumé button collapse behind a hamburger icon; opens a full-width glass panel below the pill with the same link set stacked vertically.

### Theme Toggle
- **Style:** a physical pill-track switch with a circular thumb that slides between a sun and moon icon; the track and thumb both use the glass/neutral vocabulary, not the accent color, so it reads as a control rather than a call to action.

## Do's and Don'ts

### Do:
- **Do** keep cobalt to a single hue across both themes — only its lightness/saturation shifts to stay legible against a dark or light ground.
- **Do** build every panel from the same glass recipe (`backdrop-filter: blur(18px) saturate(122%)` + hairline border + inset top highlight).
- **Do** use JetBrains Mono only next to a real dated, counted, or tagged value.
- **Do** give both themes equal finish — light mode is not a dimmed inverse of dark mode; it has its own tuned neutral and accent values.
- **Do** use exponential ease-out (`cubic-bezier(0.16,1,0.3,1)` or `cubic-bezier(0.22,1,0.36,1)`) for all transitions.

### Don't:
- **Don't** introduce a second accent color or a gradient anywhere, including text, buttons, or backgrounds.
- **Don't** use bounce or elastic easing (overshoot cubic-beziers) — motion stays physical and settles smoothly.
- **Don't** add a kicker/eyebrow label above section headings.
- **Don't** use a colored `border-left`/`border-right` accent bar on any card, list item, or callout.
- **Don't** give a glass panel an opaque or solid-color background — the material is always transparency + blur.

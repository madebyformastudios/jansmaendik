# Jansma & Dik — Design System

> Schoonmaakbedrijf Jansma & Dik B.V. | Vlissingen, Zeeland | Since 1983
> B2B cleaning company. Family business. 80 employees. 300+ locations. Keurmerk Schoon certified.

---

## 1. Brand Identity

**Name:** Jansma & Dik
**Tagline:** Betrokken, betrouwbaar en professioneel
**Voice:** Direct, reliable, no-nonsense. Zeeland pragmatism. Speaks to facility managers and business owners, not consumers.
**Personality:** Trustworthy family business. Professional but approachable. Experienced but not arrogant.

**Anti-patterns:**
- Never use startup/tech language ("disrupting", "innovative", "cutting-edge")
- Never use decorative gradients or neon accents
- Never use playful or casual illustration styles
- Never deviate from the brand colors — they appear on vehicles, uniforms and print materials
- Never use more than 2 fonts
- Never use ALL CAPS for body text

---

## 2. Color

### Primary Palette

| Role | Name | Hex | RGB | Usage |
|------|------|-----|-----|-------|
| Primary | Navy Blue | `#004998` | rgb(0, 73, 152) | Navigation, hero backgrounds, headers, CTAs |
| Accent | Burnt Orange | `#EA5E1D` | rgb(234, 94, 29) | Primary buttons, highlights, badges, links |
| Body text | Near Black | `#303030` | rgb(48, 48, 48) | All body copy |

### Secondary Palette

| Role | Name | Hex | Usage |
|------|------|-----|-------|
| Dark blue | Deep Navy | `#003a7a` | Footer, dark sections |
| Light blue tint | `#E6F1FB` | Backgrounds behind blue sections |
| Off-white | `#F8F9FA` | Page backgrounds, section alternates |
| Border | `#E2E8F0` | Dividers, card borders |
| Muted text | `#6B7280` | Secondary copy, captions |

### Color Rules
- Blue is the dominant color. Orange is the accent, used sparingly for maximum impact.
- Never use orange as a background for large sections (only for buttons, badges, CTA strips).
- White text on blue backgrounds only. Dark text (#303030) on white/light backgrounds.
- The navy-and-orange combination must always feel professional, never sporty or playful.

---

## 3. Typography

### Font Stack (Redesign — DM Sans + Inter)

| Role | Font | Weight | Size | Usage |
|------|------|--------|------|-------|
| Display heading | DM Sans | 600 | 40–56px | Hero titles, page titles |
| Section heading | DM Sans | 500 | 28–36px | Section titles |
| Card heading | DM Sans | 500 | 20–24px | Card titles, service names |
| Body | Inter | 400 | 16px | All body copy, descriptions |
| Small / caption | Inter | 400 | 14px | Meta, captions, labels |
| Button | Inter | 500 | 14–16px | All CTAs |

### Google Fonts Import
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600&family=Inter:wght@400;500&display=swap" rel="stylesheet">
```

### Legacy Font (current site — do not use for redesign)
- Body: Montserrat Light
- Headings: Montserrat Regular

### Typography Rules
- Line height: 1.6 for body, 1.2 for headings
- Max line length: 680px (65 characters)
- Never center-align body paragraphs
- Headings always sentence case, never ALL CAPS

---

## 4. Spacing & Layout

### Grid
- Max content width: 1200px
- Column gutter: 24px
- Section padding: 80px vertical (48px on mobile)
- Card padding: 24px

### Spacing Scale (px)
4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 · 80 · 96

### Layout Rules
- Navigation: sticky, full-width, white/blue background
- Hero: full-width, blue background, left-aligned text
- Sections alternate: white → light gray (#F8F9FA) → white
- Footer: dark navy (#003a7a), full-width
- No sidebar layouts — single column content with full-width sections

---

## 5. Components

### Navigation
- Background: `#004998` (blue)
- Logo: white wordmark left-aligned
- Links: white, 14px Inter 400, hover underline
- Primary CTA in nav: orange button ("Offerte aanvragen")
- Mobile: hamburger, full-screen blue overlay

### Hero
- Background: `#004998`
- Eyebrow badge: orange dot + orange text on semi-transparent dark blue pill
- H1: DM Sans 600, white, 48px desktop / 32px mobile
- Subtext: Inter 400, rgba(255,255,255,0.75), 16px
- Primary CTA: orange filled button
- Secondary CTA: white outline button
- Stats bar directly below hero: darker blue (#003a7a), 4 columns

### Buttons
- Primary: `#EA5E1D` background, white text, 6px border-radius, 10px 20px padding
- Secondary: transparent, white border, white text (on dark backgrounds)
- Outline: white background, `#004998` border, `#004998` text (on light backgrounds)
- Hover: darken 10% on primary, fill on secondary/outline

### Cards (Service Cards)
- White background
- 0.5px border: `#E2E8F0`
- 12px border-radius
- Top accent border: 3px solid `#004998` (or `#EA5E1D` for featured/maatwerk)
- Icon: 20px, `#004998`
- Title: DM Sans 500, 15px
- Body: Inter 400, 13px, `#6B7280`

### Stats Bar
- Background: `#003a7a`
- 4 columns, centered text
- Number: DM Sans 500, white, 22px
- Label: Inter 400, rgba(255,255,255,0.6), 11px
- Vertical dividers between columns: rgba(255,255,255,0.1)

### Badges / Pills
- Category badge: light blue background (`#E6F1FB`), dark blue text (`#004998`), 99px border-radius
- Keurmerk badge: white background, `#004998` text, border `#004998`
- Orange pill: `#EA5E1D` + white text (for "40+ jaar" type callouts)

### Footer
- Background: `#003a7a`
- 4-column grid: brand info · services · company · keurmerken
- Text: rgba(255,255,255,0.6), 12px
- Headings: rgba(255,255,255,0.5), 11px, uppercase, letter-spacing 0.06em
- Keurmerk block: white background, `#004998` text
- Bottom bar: border-top rgba(255,255,255,0.1), copyright left, links right

---

## 6. Motion & Animation

- Minimal animation philosophy — this is a B2B services company, not a consumer app
- Transitions: 150–200ms ease-in-out only
- Hover states: subtle background color change, no movement or scale
- No hero video backgrounds
- No entrance animations on scroll (avoid anything that feels "startup-y")
- Allowed: smooth scroll, sticky navigation on scroll, CTA button hover state

---

## 7. Imagery & Icons

### Photography Style
- Real photos of cleaning work, professional environments, team members
- Avoid generic stock photos of smiling people in suits
- Blue and white color tones preferred (complements brand)
- Before/after shots of clean spaces work well

### Icons
- Use Tabler Icons (outline style only) — consistent with professional B2B feel
- Size: 20px in cards, 24px in feature sections
- Color: `#004998` on light backgrounds, white on dark backgrounds

---

## 8. Voice & Copy Guidelines

**Tone:** Direct, no-nonsense, trustworthy. Zeeland pragmatism.

**Do:**
- Use "wij" and "u" (formal but warm)
- Mention concrete numbers: 40 jaar, 80 medewerkers, 300+ locaties
- Lead with outcomes, not features ("een schone werkomgeving" not "dagelijkse schoonmaak")
- Short sentences. One idea per sentence.
- Active voice always

**Don't:**
- "Wij zijn een dynamisch bedrijf" — generic, says nothing
- Long paragraphs without structure
- Jargon that B2B buyers don't use
- Exclamation marks (except sparingly in headings)

**CTAs:**
- Primary: "Vrijblijvende offerte aanvragen"
- Secondary: "Bel 0118 - 461892"
- Inline: "Meer over [dienst]" or "Bekijk onze werkwijze"

---

## 9. Anti-patterns

- ❌ Gradients on buttons or backgrounds
- ❌ Drop shadows on cards (use borders instead)
- ❌ More than 2 font families
- ❌ Orange as a primary background color for large sections
- ❌ Serif fonts anywhere
- ❌ Carousel/slider hero (use static hero instead)
- ❌ Centering body text
- ❌ Generic stock photography
- ❌ Animations that feel "techy" or startup-like
- ❌ Blue that deviates from #004998 (must match vehicles and print materials)
- ❌ Orange that deviates from #EA5E1D

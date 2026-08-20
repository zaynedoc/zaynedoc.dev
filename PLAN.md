# zaynedoc.dev — Incremental Next.js Implementation Guide

## Summary

Implement the site as a static, art-directed Next.js portfolio using App Router, TypeScript, CSS Modules, local assets, and CSS custom properties. Build exactly one component or visual section at a time. After every step, stop, render the result, and wait for user review before touching the next step.

The background system is a first-class implementation unit. Do not flatten page backgrounds into screenshots or single PNGs.

## Architecture and data contracts

Use these shared code-level concepts:

```text
SiteHeader
PortfolioHero
HeroBackground
HeroDecorations
HeroTitle
SocialLinks
SectionBackground
DecorativeLayer
SectionHeading
ExperienceCard
ProjectCard
StickerCluster
```

Use typed local data for repeated content:

```text
HeroConfig
NavigationLink
ExperienceItem
ProjectItem
StickerAsset
```

Keep page content in local TypeScript data modules. Do not add a CMS, database, authentication, or API layer.

### Required visual-layer rule

Every art-directed section uses this DOM order:

```text
<section class="section">
  <SectionBackground />     // absolute, fills section
  <DecorativeLayer />       // absolute, section-owned art
  <div class="content">…</div> // normal document flow
</section>
```

`section` is `position: relative; overflow: clip` or `hidden`. Background blobs, stripes, illustrations, and stickers are independent siblings. Never nest section decoration inside the blob group merely because it is visually “background-like.”

## Background implementation contract

Implement backgrounds before any complex page content.

### Rules

- Build blurred blobs as separate CSS layers: absolutely positioned ellipses/divs using gradients, opacity, blur, and transforms.
- Keep hue, opacity, size, blur, and position in CSS custom properties so they can be adjusted without rebuilding assets.
- Use a repeatable small noise/dot asset only for texture; do not use a full-page raster background.
- Export unusual geometry and masked decoration as individual Figma SVG/image assets; do not redraw detailed vectors from memory.
- Keep the following as separate layers:
  - `Background` / blob field
  - dot or noise texture
  - `deco/stripes`
  - `deco/illustrations`
  - `deco/stickers`
  - semantic content
- Decorative assets are `aria-hidden="true"` unless they are actual links/content.
- Background work is accepted only after comparison against the Figma reference at the target viewport.

## Implementation sequence and mandatory review gates

### 0. Project foundation — stop for review

Set up only:

- App Router routes: `/home` (root), `/expro`, `/about`
- global font loading, reset, design tokens, and page background
- CSS variables for lavender palette, text colors, z-index layers, spacing, and breakpoints
- asset folders for logos, stickers, social icons, and decorative exports
- empty route shells

Do not build page visuals yet.

**Review gate:** confirm typography loads, routes work, and no Figma artwork has been flattened into section screenshots.

### 1. Shared `SiteHeader` — stop for review

Reference: [Navigation variants](https://www.figma.com/design/4iqj9uRYyApiS2qvhFmYzB/zaynedoc.dev--01?node-id=113-282)

Implement:

- semantic `<header>` and `<nav>`
- zaynedoc.dev wordmark/home link
- `/home`, `/expro`, `/about` links
- active-route styling only if visible in the design
- Desktop, Tablet, and Phone spacing behavior from the Figma variants

**Review gate:** verify at 1920px, 1024px, and 440px. Do not proceed to the hero until header spacing and link behavior are approved.

### 2. Shared hero background — stop for review

Reference: [Desktop Home](https://www.figma.com/design/4iqj9uRYyApiS2qvhFmYzB/zaynedoc.dev--01?node-id=72-634)

Implement only `HeroBackground`:

- separate blob ellipses/gradients
- dot texture
- blur and opacity layering
- section clipping
- no title, social links, or geometric foreground art yet

Use a normal sized background coordinate system: do not copy Figma’s giant off-canvas group dimensions literally.

**Review gate:** compare only the empty background against Figma. Tune blob placement, blur, and color before proceeding.

### 3. Shared hero decoration — stop for review

Implement `HeroDecorations`:

- lower-left and lower-right geometric/masked art
- independent absolute anchors
- no linkage to blob background bounds
- SVG/image assets sized from their own containers

**Review gate:** resize through desktop/tablet/phone widths. Confirm decoration remains attached to intended screen/section edges.

### 4. Shared hero content — stop for review

Reference: [Hero variants](https://www.figma.com/design/4iqj9uRYyApiS2qvhFmYzB/zaynedoc.dev--01?node-id=106-2207)

Implement:

- blurred title shadow
- visible wordmark, star/letterform, and underline/bar
- roles text
- social link list with accessible labels
- `PortfolioHero` composition of background, decoration, and content

Implement the Home layouts intentionally:

- Desktop: horizontal large logo and large socials
- Tablet: vertical large logo and compact socials
- Phone: vertical small logo and compact socials

Use CSS breakpoints; do not attempt to make Figma variants automatically control production breakpoints.

**Review gate:** Home hero must match the Desktop, Tablet, and Phone Figma frames before any Expro work begins.

### 5. Home route integration — stop for review

Reference: [Home source](https://www.figma.com/design/4iqj9uRYyApiS2qvhFmYzB/zaynedoc.dev--01?node-id=101-538)

Compose only:

```text
HomePage
  SiteHeader
  PortfolioHero
```

**Review gate:** QA the full Home route at 1920×1080, 1024×1366, and 440×956. Resolve all background and hero issues before reusing the system elsewhere.

### 6. Expro desktop shell and hero — stop for review

Reference: [Expro](https://www.figma.com/design/4iqj9uRYyApiS2qvhFmYzB/zaynedoc.dev--01?node-id=123-950)

Reuse `SiteHeader` and `PortfolioHero`; supply Expro-specific roles/social content through `HeroConfig`.

Do not duplicate hero markup or background logic.

**Review gate:** approve the Expro header/hero at 1920px wide before adding scroll sections.

### 7. Expro Experience background and art — stop for review

Reference: [Experience](https://www.figma.com/design/4iqj9uRYyApiS2qvhFmYzB/zaynedoc.dev--01?node-id=123-1002)

Implement only:

```text
ExperienceSection
  SectionBackground
  deco/stripes
  deco/illustrations
  deco/stickers
```

Specific requirements:

- `SectionBackground` fills the Experience section, independent of all art.
- Upper-right illustration strip stays anchored to Experience’s upper-right corner.
- Stripes and stickers are separate siblings with their own anchors.
- Sticker assets remain images; preserve their approved white outline/rotation treatment.
- No experience text list yet.

**Review gate:** resize the Desktop Expro frame vertically and horizontally. Confirm no art drifts because of another art group’s bounds.

### 8. Expro Experience content — stop for review

Implement:

- semantic `<section>` heading “Experience”
- data-driven `ExperienceCard` list
- role, organization, and external link semantics
- normal document flow and accessible heading hierarchy

Do not use absolute positioning for the list/cards.

**Review gate:** verify list spacing against Figma and confirm longer copy would not collide with decorative art.

### 9. Expro Projects background and art — stop for review

Reference: [Projects](https://www.figma.com/design/4iqj9uRYyApiS2qvhFmYzB/zaynedoc.dev--01?node-id=123-1043)

Implement only:

```text
ProjectsSection
  SectionBackground
  deco/stripes
  deco/illustrations
```

Keep left-side illustration and stripes section-owned and independently anchored. Do not inherit Experience decoration positioning.

**Review gate:** validate the section’s edges and background behavior at the approved desktop width.

### 10. Expro Projects content — stop for review

Implement:

- semantic “Projects” heading
- data-driven `ProjectCard` list
- project title, descriptor/tag, and external-link behavior
- right-aligned desktop composition from Figma

**Review gate:** approve the complete Desktop Expro route at 1920px wide and its full designed scroll height.

### 11. About route — stop for review

Reference: [About](https://www.figma.com/design/4iqj9uRYyApiS2qvhFmYzB/zaynedoc.dev--01?node-id=137-1819)

Implement only the currently designed content:

```text
AboutPage
  SiteHeader
  PortfolioHero
```

Use About’s hero text: “UCF Undergrad · Lifter · Car Enthusiast.”

Do not invent lower About sections. The current Figma file has hero artwork but no finished lower-page content to translate.

**Review gate:** approve About hero at desktop before designing or coding further About content.

### 12. Expro responsive design — later, after desktop approval

Only begin after Step 10 is approved.

Because Expro has no finished tablet/mobile Figma layouts, the coding chat should propose responsive layouts section by section:

- Tablet target: 1024px-wide reference space
- Phone target: 440px-wide reference space
- stack or reorder text content before reducing font size
- keep content readable before preserving every decorative asset
- reduce, reposition, or hide nonessential stickers/art when they collide
- preserve the same section hierarchy and data
- never change the approved Desktop composition without user approval

**Review gate:** stop after each responsive section—Expro hero, Experience, then Projects—before continuing.

## Verification requirements

After every review gate:

- capture a local browser screenshot at the stated viewport
- compare side-by-side with the linked Figma frame/section
- report intentional differences and unresolved assumptions
- test navigation and external links
- check keyboard focus visibility and readable text contrast
- confirm decorative images are hidden from screen readers
- confirm backgrounds remain layered CSS/assets, not flattened screenshots

## Handoff instruction for every new coding-chat message

> Implement only the Figma scope linked below in my existing Next.js App Router + TypeScript + CSS Modules project. Inspect the current implementation before changing it. Preserve the shared visual-layer contract: `SectionBackground`, independent decoration siblings, then normal-flow content. Do not flatten backgrounds into a full-section image. Stop immediately after this component/section is implemented, render it at the specified viewport, summarize the implementation and assumptions, and wait for my review before working on anything else.

## Assumptions

- The existing repository is an initialized Next.js App Router project.
- CSS Modules and CSS custom properties are the styling system.
- The site is static; no CMS, database, or authentication is required.
- Home has approved Desktop/Tablet/Phone visual references.
- Expro and About are Desktop-first; Expro responsive design is intentionally deferred.
- Logo permissions and final public-use decisions remain the site owner’s responsibility.

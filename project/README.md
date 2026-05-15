# Supply Design System

**Supply** is the design system created by WiseTech Global that powers the CargoWise ecosystem. This project is a distilled reference containing the core tokens, typography, iconography and UI components needed to design and prototype Supply-branded interfaces.

> CargoWise is WiseTech Global's end-to-end logistics execution platform for freight forwarders and customs brokers. Its user interface is built on the Supply design system via `@wtg/wtg-components` (a Vue 3 component library on top of Vuetify).

## Sources

This design system was compiled from the following sources:

- **`WiseTechGlobal/WTG.WebComponents`** (the canonical Vue 3 component library — `@wtg/wtg-components`). Packages used:
  - `src/packages/supply-tokens` — CSS custom properties for color, type, spacing, radii, and elevation.
  - `src/packages/supply-icons` — a framework-agnostic icon font (~250 icons, `supply-icon` font family).
  - `src/packages/wtg-components` — Vue 3 component sources (buttons, fields, chips, data tables, navigation, etc.).
  - `src/packages/cargowise` — CargoWise-branded theme.
- **`wrnsnng/wtg-supply`** — design-token export from Figma (Style Dictionary → SCSS/JSON).
- **Supply Storybook** — `https://design.wtg.zone/` (component docs — external).

## Products represented

The `wtg-components` library is a single library that ships multiple **brand themes** (`supply`, `wisetech`, `cargowise`, `wta`) and **appearances** (`light`, `dark`, `muted`). For this design system we recreate:

- **CargoWise Desktop Web App** — the flagship logistics execution product. Dense data tables, long forms, file/shipment/customs workflows, a persistent app bar, and drawers. (`ui_kits/cargowise/`)

## Content fundamentals

Supply/CargoWise copy is written for logistics professionals — customs brokers, forwarders, warehouse staff — who use the product all day. It is a tool, not a consumer app, so the voice is:

- **Direct and factual.** Labels and actions use the minimum number of words: *"Save"*, *"Add item"*, *"Attach document"*. Not *"Let's save that"* or *"Click here to attach a document"*.
- **Second person, imperative.** Empty states, tooltips and hints address the user with "you" and give clear next steps: *"You don't have any shipments yet. Create one to get started."*
- **Title case for headings; sentence case for labels, buttons, menu items and tooltips.** *"Shipment Overview"* (heading), *"Add consolidation"* (button), *"This field is required"* (helper).
- **No marketing fluff in-product.** No exclamation points, no emoji, no emoji-style bullets. "Success!" is not a pattern — the toast just says *"Shipment created."*
- **Numbers are first-class citizens.** Every product screen shows reference IDs, dates, weights, currencies. Typography has a dedicated "-num" variant so tabular numbers stay aligned. Copy leans on precise values over adjectives — *"14 errors"* beats *"some errors"*.
- **Domain terminology is preferred over generic terms.** Use *"consol"*, *"HAWB"*, *"customs declaration"*, *"forwarding"*, *"clearance"* — CargoWise users expect industry language.
- **Error messages are specific and actionable.** *"Weight exceeds container limit (21,000 kg)"*, not *"Invalid input"*.
- **No emoji, ever, in product UI.** Status is communicated with the `sentiment` colors and Supply icons.

## Visual foundations

### Colors
Supply is a **warm-neutral + indigo-blue** system. The canvas is stone-white (`#f7f7f4`), surfaces are pure white, text is charcoal (`#383836`), and the brand is a saturated indigo (`#371ee1`). Everything else — cells, rows, borders, dividers — lives on a carefully tuned stone scale. Semantic colors:

| Role      | Base      | Use                                       |
|-----------|-----------|-------------------------------------------|
| Primary   | `#371ee1` | Brand actions, focus, selection, links    |
| Neutral   | `#383836` | Body text, structural borders             |
| Success   | `#00795d` | Positive state, confirmations             |
| Error     | `#d50047` | Destructive, validation, critical         |
| Warning   | `#ece68c` | Caution (pale chartreuse — unusual!)      |
| Info      | `#8351c2` | Neutral info/callouts (violet)            |

Every semantic ramp has `-default`, `-hover`, `-active` (three tones), `-weak-*` (backgrounds), `-tonal-*` (alpha backgrounds), and `-inv-*` (inverted / on-color).

### Typography
Type primitives are t-shirt-scaled: `fontsize-100`…`-800` (10/12/13/16/20/28/32/40). Line heights move in lockstep. Font stack is **Inter** (variable font, loaded from `fonts/`). Compositions are semantic: `display-lg/md/sm`, `title-lg/md/sm`, `text-md/sm/xs` each with `default`/`strong`/`link`/`num` variants.

### Spacing
Also t-shirt sized: `null`/`xs`/`s`/`m`/`l`/`xl`/`xxl` = `0`/`2`/`4`/`8`/`12`/`16`/`24` px. Applied via design tokens OR via utility classes (`.pa-m`, `.mx-l`, `.g-s`, etc. — same scale as Vuetify).

### Corner radii
`null`/`xs`/`s`/`m`/`l`/`xl`/`xxl` = `0`/`2`/`4`/`8`/`12`/`16`/`24` px. **Buttons use `radius-s` (4px)** — tight, not pill. Cards use `radius-m` (8px). Sheets and dialogs `radius-l`/`xl`.

### Elevation
Three top-level elevation tokens (`elevation-100/200/300`). Each combines a **drop shadow** and an **inset bottom line** — Supply elevation is subtle; the inset line defines the edge of every surface without needing an outer border. Buttons have their own elevation tokens with a pressed state (inset shadow, slight shrink of visual weight).

### Backgrounds & imagery
- Canvas is always `#f7f7f4` — warm, not cool.
- No gradients on product surfaces. Gradients appear only in the login-page illustration.
- No textures, no repeating patterns.
- Imagery is restricted to **line-art illustrations** for empty states and the login page (see `src/packages/wtg-components/src/assets/WtgEmptyState/`). Photographs are rare.

### Animation
- **Duration 0.28s**, easing `cubic-bezier(0.4, 0, 0.2, 1)` (Material standard). Used on buttons, drawers, sheets, toasts.
- No bounces, no elastic, no scale-from-zero. Slide + fade only.

### Hover states
- **Neutral buttons** → background shifts from white to weak-hover stone (`#efeeeb`).
- **Primary fill** → background deepens one step (`#371ee1` → `#221098`).
- **Outline/ghost** → tonal overlay (currentColor at 12% opacity).
- Never opacity-fade the whole element.

### Press/active states
- **Fill** → background drops to `-active` shade (deepest).
- **Outline/ghost** → overlay opacity rises to 24%.
- Buttons get a **pressed inset shadow** (`elevation-button-pressed`) — feels physically depressed.

### Focus
- **2px solid `--s-primary-border-default` with 1px offset** — always high-contrast, never dashed.

### Borders
- Default borders use `--s-neutral-border-weak-default` (`#bfbeb9`) — 1px solid, warm stone.
- Structural dividers use a 12%-alpha neutral divider line.

### Cards / surfaces
- White background, 1px weak border, 8px radius, `elevation-100` (very soft drop + inset bottom edge).
- No emphasis gradients, no colored left-border accents, no rounded-corner-only treatments.

### Transparency + blur
- Used sparingly. `-alpha-*` tokens exist for datatable action columns (so sticky actions dim row content beneath them). **No acrylic/frosted-glass blur** in product.

### Layout rules
- Desktop app is fluid with a **fixed 64px app bar** (top) and a **persistent left navigation rail**.
- Drawers slide from the right; dialogs are centered.
- Data tables dominate; they use zebra rows via `--s-datatable-row-bg-zebra-default`.

## Iconography

- **Supply Icon Font** (~250 icons) is the canonical system. Font family `supply-icon`, class pattern `s-icon-<name>` (e.g. `s-icon-add`, `s-icon-ai-sparkle`, `s-icon-barge`, `s-icon-anchor`, `s-icon-bell`). Icons are applied as `<i class="supply-icon s-icon-search" aria-hidden="true"></i>`.
- Stroke weight is **medium-light**, rounded joins, **outline-first** (filled variants exist for status/alerts).
- **No emoji in product UI** — ever.
- **No inline SVG for iconography in production** — everything routes through the icon font so it scales cleanly and inherits `color: currentColor`.
- **Logos** are SVG — CargoWise wordmark + icon at `assets/cargowise-logo-*.svg`.
- Domain icons to be aware of: `s-icon-anchor`, `s-icon-barge`, and other shipping-themed glyphs reflect CargoWise's logistics focus.

Files in this project:
- `fonts/supply.woff`, `fonts/supply.ttf` — the icon font.
- `fonts/fonts.css` — loads the icon font + Inter.
- `assets/cargowise-logo-dark.svg`, `assets/cargowise-logo-with-icon-dark.svg` — brand logos.

## Index

- `colors_and_type.css` — all tokens + semantic element styles. Import this to start.
- `fonts/fonts.css` — font loader.
- `fonts/supply.woff`, `supply.ttf` — Supply icon font.
- `assets/` — CargoWise logos (SVG).
- `preview/` — design-system reference cards (colors, type, spacing, components).
- `ui_kits/cargowise/` — click-through recreation of the CargoWise web app.
- `SKILL.md` — this system as a portable Claude Skill.

## Caveats & substitutions

- **Font family:** The production Supply font is **Inter** (variable font, loaded locally from `fonts/Inter-VariableFont_opsz_wght.ttf` + italic companion).
- **Icon coverage:** We imported the Supply icon font (~250 glyphs). If a needed glyph is missing, extend the font — do not fall back to Lucide/Heroicons (visual weight will clash).
- **Dark + muted appearances + WTA/Supply brand themes:** Not included; we focused on `cargowise + light`. The token file can be extended with the other variants from `supply-tokens/src/css/*.css`.
- **Empty-state illustrations:** These are Vue SFCs containing hand-drawn SVG. They were not imported to save context; fetch them from `src/packages/wtg-components/src/assets/WtgEmptyState/` if needed.

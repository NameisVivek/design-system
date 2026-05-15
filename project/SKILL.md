---
name: supply-design
description: Use this skill to generate well-branded interfaces and assets for Supply / CargoWise (WiseTech Global), either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the `README.md` file within this skill, and explore the other available files.

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand.

If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.

## Quick map

- `colors_and_type.css` — Supply design tokens (CSS custom properties): color, typography, spacing, radii, elevation. Import this first.
- `fonts/fonts.css` — font-face loader for Inter (variable, local) and the Supply icon font.
- `fonts/supply.woff`, `fonts/supply.ttf` — the Supply icon font (~250 glyphs).
- `assets/` — CargoWise SVG logos.
- `preview/` — one HTML card per design-system concept (colors, type, spacing, components).
- `ui_kits/cargowise/` — click-through CargoWise web app recreation.

## Core rules

- Canvas is **`#f7f7f4`** (warm stone), not white and not cool-gray.
- Brand action color is **`#371ee1`** (indigo). Use for primary buttons, links, selection, focus rings.
- Button radius is **4px** — tight, never pill. Card radius is **8px**. Sheets/dialogs are **12–16px**.
- **No gradients in product UI.** No emoji. No left-border-accent cards.
- Copy: title case headings, sentence case for buttons/labels, second person + imperative, direct and factual.
- Icons ship as an **icon font** (`supply-icon`), not SVGs. Use `<i class="supply-icon s-icon-<name>"></i>`.
- Motion: `0.28s cubic-bezier(0.4, 0, 0.2, 1)`. Slide + fade only — no bounces.

When in doubt, consult the card files in `preview/` or copy a component directly out of `ui_kits/cargowise/index.html`.

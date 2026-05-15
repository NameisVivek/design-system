# CargoWise Framework — UI kit reference

A faithful implementation of the **CargoWise Framework shell** for record-centric screens, based directly on the `@wtg/wtg-components` Vue library and the Supply design tokens.

**This kit models the framework itself** — the chrome common to every screen — not any one shipment or entity type.

## Anatomy

- **Inset sidebar** on an indigo page background; primary content floats as a rounded, elevated card on the right (`border-radius: var(--s-radius-l)`, `var(--s-elevation-200)`).
- **Masthead** (`WtgMasthead`-equivalent) with:
  - Toolbar row: breadcrumbs on the left; ghost icon-buttons (search, help) on the right. No bottom stroke.
  - Record row: back button + record ID on the left, entity-actions cluster (`Workflow`, `eDocs`, `Documents`, `Related items`, `Notes`, `Messages`, `Logs`) on the right.
  - Tab strip: slider-color active indicator per `WtgTab.vue`; no bottom stroke on the strip.
- **Floating action bar** (`Cancel` / `Secondary actions` / `Save changes`) docked at the bottom of the content card, separated from the body by a visible gap and its own elevation.

## Component fidelity

Button, icon-button, tab, and entity-actions rules are direct ports of:
- `src/packages/wtg-components/src/components/WtgButton/WtgButton.vue`
- `src/packages/wtg-components/src/components/WtgIconButton/WtgIconButton.vue`
- `src/packages/wtg-components/src/components/WtgTabs/WtgTab.vue` + `WtgTabs.vue`
- `src/packages/wtg-components/src/components/WtgEntityActions/WtgEntityActions.vue`

All colors, radii, shadows and spacing pull from the canonical Supply tokens in `/colors_and_type.css`.

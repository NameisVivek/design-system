# Supply Design System — Reference for Claude

> Drop this file into Claude Desktop as a project knowledge document to make Claude an expert in Supply / CargoWise design.

**Supply** is the design system created by WiseTech Global that powers the CargoWise ecosystem. CargoWise is WiseTech Global's end-to-end logistics execution platform for freight forwarders and customs brokers. Its UI is built on the Supply design system via `@wtg/wtg-components` (a Vue 3 + Vuetify component library).

When asked to design or build something "in Supply" or "for CargoWise", follow this document.

---

## Brand vocabulary

- **Warm-neutral + indigo-blue** system. Stone-white canvas, charcoal text, saturated indigo for brand actions.
- **No gradients.** No emoji. No textures. No left-border accent cards. No purple haloes, no neon, no glass blur.
- **Subtle elevation.** Each surface gets a soft drop shadow + a 1px inset bottom edge — that's it.
- **Motion is restrained.** 0.28s `cubic-bezier(0.4, 0, 0.2, 1)`, slide + fade only.
- **Density is high.** This is a tool for power users, not a marketing site. Tight padding, small radii, dense data tables.

---

## Content fundamentals

Copy is written for logistics professionals — customs brokers, forwarders, warehouse staff — who use the product all day.

- **Direct and factual.** Minimum number of words: *"Save"*, *"Add item"*, *"Attach document"*. Never *"Let's save that"*.
- **Second person, imperative.** *"You don't have any shipments yet. Create one to get started."*
- **Title case for headings; sentence case for buttons, labels, menu items, tooltips.** *"Shipment Overview"* (heading), *"Add consolidation"* (button), *"This field is required"* (helper).
- **No marketing fluff in-product.** No exclamation points, no emoji. Success toasts say *"Shipment created."* not *"Success!"*.
- **Numbers are first-class.** Use the `-num` typography variants for tabular alignment. *"14 errors"* beats *"some errors"*.
- **Domain language preferred.** *"consol"*, *"HAWB"*, *"customs declaration"*, *"forwarding"*, *"clearance"*.
- **Errors are specific and actionable.** *"Weight exceeds container limit (21,000 kg)"*, not *"Invalid input"*.

---

## Tokens

All Supply tokens are CSS custom properties prefixed `--s-`. Token names follow `--s-<scope>-<role>-<state>` where state is `default` / `hover` / `active` (and `weak-` / `tonal-` / `inv-` prefixes for variants). Drop this block into the `:root` of any HTML file to start.

```css
:root {
  /* ----- Type primitives (desktop) ----- */
  --s-fontsize-100: 10px;  --s-lineheight-100: 10px;
  --s-fontsize-200: 12px;  --s-lineheight-200: 16px;
  --s-fontsize-300: 13px;  --s-lineheight-300: 20px;   /* body default */
  --s-fontsize-400: 16px;  --s-lineheight-400: 24px;
  --s-fontsize-500: 20px;  --s-lineheight-500: 28px;
  --s-fontsize-600: 28px;  --s-lineheight-600: 34px;
  --s-fontsize-700: 32px;  --s-lineheight-700: 38px;
  --s-fontsize-800: 40px;  --s-lineheight-800: 48px;
  --s-fontweight-400: 400; --s-fontweight-500: 500;
  --s-fontweight-600: 600; --s-fontweight-700: 700;
  --s-fontfamily-primary: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;

  /* ----- Spacing / padding (t-shirt scale) ----- */
  --s-spacing-null: 0;   --s-padding-null: 0;
  --s-spacing-xs: 2px;   --s-padding-xs: 2px;
  --s-spacing-s: 4px;    --s-padding-s: 4px;
  --s-spacing-m: 8px;    --s-padding-m: 8px;
  --s-spacing-l: 12px;   --s-padding-l: 12px;
  --s-spacing-xl: 16px;  --s-padding-xl: 16px;
  --s-spacing-xxl: 24px; --s-padding-xxl: 24px;

  /* ----- Radii (same scale) ----- */
  --s-radius-null: 0;
  --s-radius-xs: 2px;
  --s-radius-s: 4px;   /* buttons, inputs */
  --s-radius-m: 8px;   /* cards, panels */
  --s-radius-l: 12px;  /* sheets, dialogs */
  --s-radius-xl: 16px;
  --s-radius-xxl: 24px;

  /* ----- Icon sizes ----- */
  --s-sizing-icon-sm: 16px;  /* default in dense rows */
  --s-sizing-icon-md: 20px;  /* default in buttons */
  --s-sizing-icon-lg: 28px;
  --s-sizing-icon-xl: 34px;
  --s-sizing-icon-2xl: 38px;
  --s-sizing-icon-3xl: 48px;

  /* ----- Typography compositions ----- */
  --s-display-lg-default: var(--s-fontweight-700) var(--s-fontsize-800) / var(--s-lineheight-800) var(--s-fontfamily-primary);
  --s-display-md-default: var(--s-fontweight-700) var(--s-fontsize-700) / var(--s-lineheight-700) var(--s-fontfamily-primary);
  --s-display-sm-default: var(--s-fontweight-700) var(--s-fontsize-600) / var(--s-lineheight-600) var(--s-fontfamily-primary);
  --s-title-lg-default:   var(--s-fontweight-600) var(--s-fontsize-500) / var(--s-lineheight-500) var(--s-fontfamily-primary);
  --s-title-md-default:   var(--s-fontweight-600) var(--s-fontsize-400) / var(--s-lineheight-400) var(--s-fontfamily-primary);
  --s-title-sm-default:   var(--s-fontweight-600) var(--s-fontsize-300) / var(--s-lineheight-300) var(--s-fontfamily-primary);
  --s-text-md-default:    var(--s-fontweight-400) var(--s-fontsize-300) / var(--s-lineheight-300) var(--s-fontfamily-primary);
  --s-text-md-strong:     var(--s-fontweight-600) var(--s-fontsize-300) / var(--s-lineheight-300) var(--s-fontfamily-primary);
  --s-text-sm-default:    var(--s-fontweight-400) var(--s-fontsize-200) / var(--s-lineheight-200) var(--s-fontfamily-primary);
  --s-text-sm-strong:     var(--s-fontweight-600) var(--s-fontsize-200) / var(--s-lineheight-200) var(--s-fontfamily-primary);
  --s-text-xs-default:    var(--s-fontweight-400) var(--s-fontsize-100) / var(--s-lineheight-100) var(--s-fontfamily-primary);
  --s-text-xs-strong:     var(--s-fontweight-600) var(--s-fontsize-100) / var(--s-lineheight-100) var(--s-fontfamily-primary);

  /* ----- Primary / Brand (indigo) ----- */
  --s-primary-bg-default: #371ee1;       --s-primary-txt-default: #371ee1;
  --s-primary-bg-hover:   #221098;       --s-primary-txt-hover:   #221098;
  --s-primary-bg-active:  #110662;       --s-primary-txt-active:  #110662;
  --s-primary-bg-weak-default: #f6f8ff;
  --s-primary-bg-weak-hover:   #ecf1ff;
  --s-primary-bg-weak-active:  #dae2fe;
  --s-primary-bg-tonal-default: rgba(55, 30, 225, 0.06);
  --s-primary-bg-tonal-hover:   rgba(55, 30, 225, 0.12);
  --s-primary-bg-tonal-active:  rgba(55, 30, 225, 0.15);
  --s-primary-border-default: #371ee1;
  --s-primary-border-hover:   #221098;
  --s-primary-border-active:  #110662;
  --s-primary-border-weak-default: rgba(0, 38, 229, 0.5);
  --s-primary-border-weak-hover:   rgba(0, 24, 162, 0.5);
  --s-primary-border-weak-active:  rgba(34, 16, 152, 0.5);
  --s-primary-txt-inv-default: #f6f8ff;
  --s-primary-icon-default:   #371ee1;

  /* ----- Neutral (warm stone) ----- */
  --s-neutral-canvas-default: #f7f7f4;   /* page bg */
  --s-neutral-bg-default:     #ffffff;   /* surface */
  --s-neutral-bg-weak-default:#f7f7f4;
  --s-neutral-bg-weak-hover:  #efeeeb;
  --s-neutral-bg-weak-active: #e8e7e3;
  --s-neutral-bg-disabled:    #f7f7f4;
  --s-neutral-bg-hover:       #383836;
  --s-neutral-bg-active:      #1b1b1a;
  --s-neutral-bg-tonal-default: rgba(27, 27, 26, 0.06);
  --s-neutral-bg-tonal-hover:   rgba(27, 27, 26, 0.12);
  --s-neutral-bg-tonal-active:  rgba(27, 27, 26, 0.15);
  --s-neutral-border-default:        #5c5b57;
  --s-neutral-border-hover:          #383836;
  --s-neutral-border-active:         #1b1b1a;
  --s-neutral-border-weak-default:   #bfbeb9;
  --s-neutral-border-weak-hover:     #8d8c88;
  --s-neutral-border-weak-active:    #5c5b57;
  --s-neutral-border-disabled:       #dad9d5;
  --s-neutral-txt-default:    #383836;
  --s-neutral-txt-hover:      #1b1b1a;
  --s-neutral-txt-active:     #000000;
  --s-neutral-txt-disabled:   #8d8c88;
  --s-neutral-txt-weak-default: #5c5b57;
  --s-neutral-txt-inv-default:  #f7f7f4;
  --s-neutral-icon-default:    #383836;
  --s-neutral-icon-hover:      #1b1b1a;
  --s-neutral-icon-weak-default: #5c5b57;
  --s-neutral-icon-disabled:   #8d8c88;

  /* ----- Success (forest teal) ----- */
  --s-success-bg-default:   #00795d;
  --s-success-bg-hover:     #00513e;
  --s-success-bg-active:    #00382b;
  --s-success-bg-weak-default: #f2f9f8;
  --s-success-bg-weak-hover:   #e6f4f0;
  --s-success-bg-weak-active:  #cce8e2;
  --s-success-bg-tonal-default: rgba(0, 121, 93, 0.06);
  --s-success-bg-tonal-hover:   rgba(0, 121, 93, 0.12);
  --s-success-bg-tonal-active:  rgba(0, 121, 93, 0.15);
  --s-success-border-default: #00795d;
  --s-success-txt-default:    #00795d;
  --s-success-txt-hover:      #00513e;
  --s-success-txt-inv-default: #f2f9f8;

  /* ----- Error / Critical (crimson) ----- */
  --s-error-bg-default:   #d50047;
  --s-error-bg-hover:     #910031;
  --s-error-bg-active:    #670022;
  --s-error-bg-weak-default: #fef6f9;
  --s-error-bg-weak-hover:   #fdedf2;
  --s-error-bg-weak-active:  #fbdae5;
  --s-error-bg-tonal-default: rgba(213, 0, 71, 0.06);
  --s-error-bg-tonal-hover:   rgba(213, 0, 71, 0.12);
  --s-error-bg-tonal-active:  rgba(213, 0, 71, 0.15);
  --s-error-border-default: #d50047;
  --s-error-txt-default:    #d50047;
  --s-error-txt-hover:      #910031;
  --s-error-txt-inv-default: #fef6f9;

  /* ----- Warning (ochre / pale chartreuse — unusual!) ----- */
  --s-warning-bg-default:   #ece68c;
  --s-warning-bg-hover:     #c4bc45;
  --s-warning-bg-active:    #9a9336;
  --s-warning-bg-weak-default: #faf9e3;
  --s-warning-bg-weak-hover:   #f6f3c7;
  --s-warning-bg-weak-active:  #ece68c;
  --s-warning-border-default: #716d28;
  --s-warning-txt-default:    #716d28;
  --s-warning-txt-hover:      #4b481b;
  --s-warning-txt-inv-default: #4b481b;

  /* ----- Info (violet) ----- */
  --s-info-bg-default:   #8351c2;
  --s-info-bg-hover:     #583583;
  --s-info-bg-active:    #3c245a;
  --s-info-bg-weak-default: #f9f7fc;
  --s-info-bg-weak-hover:   #f3eff9;
  --s-info-bg-weak-active:  #e8dff4;
  --s-info-border-default: #8351c2;
  --s-info-txt-default:    #8351c2;
  --s-info-txt-hover:      #583583;
  --s-info-txt-inv-default: #f9f7fc;

  /* ----- Elevation ----- */
  --s-elevation-100: 0 1px 1px 0 rgba(27, 27, 26, 0.06), inset 0 -1px 1px 0 rgba(27, 27, 26, 0.12);
  --s-elevation-200: 0 2px 4px 0 rgba(27, 27, 26, 0.12), inset 0 -1px 1px 0 rgba(27, 27, 26, 0.12);
  --s-elevation-300: 0 4px 8px 0 rgba(27, 27, 26, 0.16), inset 0 -1px 1px 0 rgba(27, 27, 26, 0.12);
  --s-elevation-button-default: 0 1px 1px 0 rgba(27, 27, 26, 0.06), inset 0 -1px 1px 1px #efeeeb, inset 0 0 2px 0 #f7f7f4;
  --s-elevation-button-pressed: inset 0 1px 2px 1px #bfbeb9, inset 0 -1px 1px 0 rgba(191, 190, 185, 0.4);
}

html, body {
  margin: 0; padding: 0;
  background: var(--s-neutral-canvas-default);
  color: var(--s-neutral-txt-default);
  font: var(--s-text-md-default);
  -webkit-font-smoothing: antialiased;
}
```

---

## Components — direct ports from `@wtg/wtg-components`

These are simplified plain-HTML implementations of the real Vue components. They use the same class names and tokens, so they look and behave identically.

### WtgButton

Four variants (`fill`, `ghost`, `tonal`, `outline`) × four sentiments (default, `primary`, `success`, `critical`). Default variant is `outline`. Padding driven by size class (`xs` / `s` / `m` / `l` / `xl`).

```html
<button class="wtg-button wtg-button--outline">Cancel</button>
<button class="wtg-button wtg-button--fill wtg-button--primary">Save changes</button>
<button class="wtg-button wtg-button--fill wtg-button--critical">Delete</button>
<button class="wtg-button wtg-button--ghost wtg-button--primary">Learn more</button>
<button class="wtg-button wtg-button--tonal">Filter</button>
```

```css
.wtg-button {
  align-items: center;
  border-radius: var(--s-radius-s);
  border: 1px solid;
  cursor: pointer;
  display: inline-flex;
  font: var(--s-text-md-strong);
  justify-content: center;
  padding: var(--s-padding-s);
  position: relative;
  text-decoration: none;
  transition: transform 0.28s cubic-bezier(0.4, 0, 0.2, 1);
  user-select: none;
  background: transparent;
  white-space: nowrap;
}
.wtg-button:disabled {
  background: var(--s-neutral-bg-disabled);
  border-color: var(--s-neutral-bg-disabled);
  color: var(--s-neutral-txt-disabled);
  cursor: default;
}
.wtg-button:focus-visible {
  outline: 2px solid var(--s-primary-border-default);
  outline-offset: 1px; z-index: 1;
}

/* --- OUTLINE (default) --- */
.wtg-button--outline {
  background: var(--s-neutral-bg-default);
  border-color: var(--s-neutral-border-weak-default);
  color: var(--s-neutral-txt-default);
  box-shadow: var(--s-elevation-button-default);
}
.wtg-button--outline:hover:not(:disabled):not(:active) {
  background: var(--s-neutral-bg-weak-hover);
  border-color: var(--s-neutral-border-weak-hover);
  color: var(--s-neutral-txt-hover);
}
.wtg-button--outline:active:not(:disabled) {
  border-color: var(--s-neutral-border-weak-active);
  color: var(--s-neutral-txt-active);
  box-shadow: var(--s-elevation-button-pressed);
}

/* --- FILL --- */
.wtg-button--fill {
  background: var(--s-neutral-bg-weak-default);
  border-color: var(--s-neutral-bg-weak-default);
  color: var(--s-neutral-txt-default);
}
.wtg-button--fill.wtg-button--primary {
  background: var(--s-primary-bg-default);
  border-color: var(--s-primary-border-default);
  color: var(--s-primary-txt-inv-default);
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.12);
}
.wtg-button--fill.wtg-button--primary:hover:not(:disabled) {
  background: var(--s-primary-bg-hover);
  border-color: var(--s-primary-border-hover);
}
.wtg-button--fill.wtg-button--primary:active:not(:disabled) {
  background: var(--s-primary-bg-active);
  box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.25);
}
.wtg-button--fill.wtg-button--critical {
  background: var(--s-error-bg-default);
  border-color: var(--s-error-border-default);
  color: var(--s-error-txt-inv-default);
}
.wtg-button--fill.wtg-button--success {
  background: var(--s-success-bg-default);
  border-color: var(--s-success-border-default);
  color: var(--s-success-txt-inv-default);
}

/* --- GHOST: transparent, currentColor overlay on hover/active --- */
.wtg-button--ghost {
  background: transparent;
  border-color: transparent;
  color: var(--s-neutral-txt-default);
}
.wtg-button--ghost.wtg-button--primary  { color: var(--s-primary-txt-default); }
.wtg-button--ghost.wtg-button--critical { color: var(--s-error-txt-default); }
.wtg-button--ghost.wtg-button--success  { color: var(--s-success-txt-default); }
.wtg-button--ghost:hover:not(:disabled)::before,
.wtg-button--ghost:active:not(:disabled)::before {
  content: ""; position: absolute; inset: 0; border-radius: inherit;
  background: currentColor; opacity: 0.12; pointer-events: none;
}
.wtg-button--ghost:active:not(:disabled)::before { opacity: 0.24; }

/* --- TONAL --- */
.wtg-button--tonal {
  background: var(--s-neutral-bg-tonal-default);
  border-color: transparent;
  color: var(--s-neutral-txt-default);
}
.wtg-button--tonal:hover:not(:disabled) { background: var(--s-neutral-bg-tonal-hover); }
.wtg-button--tonal:active:not(:disabled) { background: var(--s-neutral-bg-tonal-active); }
.wtg-button--tonal.wtg-button--primary {
  background: var(--s-primary-bg-tonal-default);
  color: var(--s-primary-txt-default);
}

/* --- Sizes --- */
.wtg-button--xs { padding: var(--s-padding-xs); font: var(--s-text-sm-strong); }
.wtg-button--s  { padding: var(--s-padding-s); }
.wtg-button--m  { padding: var(--s-padding-m); }
.wtg-button--l  { padding: var(--s-padding-l); }
.wtg-button--xl { padding: var(--s-padding-xl); }
```

### WtgIconButton

`WtgButton` with `padding: var(--s-padding-s)` and centered icon. Default size **30 × 30** (4px padding + 20px md-icon + 2 × 1px border). Compact size **22 × 22** (`icon-btn--s`).

```html
<button class="wtg-icon-button" aria-label="Search">
  <i class="s-icon-search"></i>
</button>
<button class="wtg-icon-button wtg-icon-button--ghost" aria-label="Back">
  <i class="s-icon-arrow-left"></i>
</button>
```

```css
.wtg-icon-button {
  display: inline-flex; justify-content: center; align-items: center;
  padding: var(--s-padding-s);
  border-radius: var(--s-radius-s);
  border: 1px solid var(--s-neutral-border-weak-default);
  background: var(--s-neutral-bg-default);
  color: var(--s-neutral-txt-default);
  cursor: pointer; position: relative;
  transition: transform 0.28s cubic-bezier(0.4, 0, 0.2, 1);
}
.wtg-icon-button > i { font-size: var(--s-sizing-icon-md); line-height: 1; }
.wtg-icon-button--s { padding: var(--s-padding-xs); }
.wtg-icon-button--s > i { font-size: var(--s-sizing-icon-sm); }
.wtg-icon-button:hover:not(:active) {
  background: var(--s-neutral-bg-weak-hover);
  border-color: var(--s-neutral-border-weak-hover);
}
.wtg-icon-button--ghost {
  background: transparent; border-color: transparent;
}
.wtg-icon-button--ghost:hover::before {
  content: ""; position: absolute; inset: 0; border-radius: inherit;
  background: currentColor; opacity: 0.12; pointer-events: none;
}
```

### WtgStatus

The Supply equivalent of chips / status badges. **Two variants** (`fill` default, `outline`) × **six sentiments** (`neutral` default, `primary`, `info`, `success`, `warning`, `critical`). No leading dot, no icon — purely typographic. Pill-shaped (`radius-xl`).

```html
<span class="wtg-status"><span class="wtg-status__content">Neutral</span></span>
<span class="wtg-status wtg-status--success"><span class="wtg-status__content">Cleared</span></span>
<span class="wtg-status wtg-status--outline wtg-status--critical"><span class="wtg-status__content">Hold</span></span>
```

```css
.wtg-status {
  display: inline-flex;
  align-items: center; justify-content: center;
  padding: var(--s-padding-xs) var(--s-padding-s);
  font: var(--s-text-sm-strong);
  border-radius: var(--s-radius-xl);
  color: var(--s-neutral-bg-weak-default);
  background: #5c5b57;  /* neutral dark fill */
}
.wtg-status > .wtg-status__content { padding: 0 var(--s-padding-xs); }

/* Fill variant — sentiment bg + inverse text */
.wtg-status--primary  { background: var(--s-primary-bg-default);  color: var(--s-primary-txt-inv-default); }
.wtg-status--info     { background: var(--s-info-bg-default);     color: var(--s-info-txt-inv-default); }
.wtg-status--success  { background: var(--s-success-bg-default);  color: var(--s-success-txt-inv-default); }
.wtg-status--warning  { background: var(--s-warning-bg-default);  color: var(--s-warning-txt-inv-default); }
.wtg-status--critical { background: var(--s-error-bg-default);    color: var(--s-error-txt-inv-default); }

/* Outline variant — weak bg + sentiment border/text */
.wtg-status--outline {
  border: 1px solid var(--s-neutral-border-weak-default);
  background: var(--s-neutral-bg-weak-default);
  color: var(--s-neutral-txt-default);
}
.wtg-status--outline.wtg-status--primary  { border-color: var(--s-primary-txt-default);   color: var(--s-primary-txt-default);   background: var(--s-primary-bg-weak-default); }
.wtg-status--outline.wtg-status--info     { border-color: var(--s-info-txt-default);      color: var(--s-info-txt-default);      background: var(--s-info-bg-weak-default); }
.wtg-status--outline.wtg-status--success  { border-color: var(--s-success-border-default); color: var(--s-success-txt-default);  background: var(--s-success-bg-weak-default); }
.wtg-status--outline.wtg-status--warning  { border-color: var(--s-warning-border-default); color: var(--s-warning-txt-default);  background: var(--s-warning-bg-weak-default); }
.wtg-status--outline.wtg-status--critical { border-color: var(--s-error-txt-default);     color: var(--s-error-txt-default);     background: var(--s-error-bg-weak-default); }
```

### WtgTextField

Anatomy: label row · control row (prefix · input · suffix) · hint row. Variants: default (outlined), filled, readonly, error, disabled.

```html
<label class="wtg-field">
  <span class="wtg-field__label">Shipment ID <span class="wtg-field__required">*</span></span>
  <span class="wtg-field__control">
    <input class="wtg-field__input" value="S00412-AUSYD">
  </span>
  <span class="wtg-field__hint">Unique reference</span>
</label>

<label class="wtg-field wtg-field--error">
  <span class="wtg-field__label">Gross weight</span>
  <span class="wtg-field__control">
    <input class="wtg-field__input" value="28,500">
    <span class="wtg-field__affix">kg</span>
  </span>
  <span class="wtg-field__hint">Exceeds container limit (21,000 kg)</span>
</label>
```

```css
.wtg-field { display: flex; flex-direction: column; gap: var(--s-spacing-xs); width: 240px; }
.wtg-field__label { font: var(--s-text-sm-strong); color: var(--s-neutral-txt-default); }
.wtg-field__required { color: var(--s-error-txt-default); }
.wtg-field__control {
  display: flex; align-items: center; min-height: 32px;
  background: var(--s-neutral-bg-default);
  border: 1px solid var(--s-neutral-border-weak-default);
  border-radius: var(--s-radius-s);
  padding: 0 var(--s-padding-s);
  transition: border-color 0.15s, box-shadow 0.15s;
}
.wtg-field__control:hover { border-color: var(--s-neutral-border-weak-hover); }
.wtg-field__control:focus-within {
  border-color: var(--s-primary-border-default);
  box-shadow: 0 0 0 2px var(--s-primary-border-weak-default);
}
.wtg-field__input {
  flex: 1; min-width: 0;
  border: 0; background: transparent; outline: none;
  padding: var(--s-padding-s) var(--s-padding-xs);
  font: var(--s-text-md-default);
  color: var(--s-neutral-txt-active);
}
.wtg-field__input::placeholder { color: var(--s-neutral-txt-weak-default); }
.wtg-field__affix {
  color: var(--s-neutral-icon-weak-default);
  display: inline-flex; align-items: center; flex: none;
}
.wtg-field__hint {
  font: var(--s-text-sm-default);
  color: var(--s-neutral-txt-weak-default);
  min-height: 16px;
}
.wtg-field--error .wtg-field__control { border-color: var(--s-error-border-default); }
.wtg-field--error .wtg-field__control:focus-within { box-shadow: 0 0 0 2px var(--s-error-bg-weak-active); }
.wtg-field--error .wtg-field__hint { color: var(--s-error-txt-default); }
.wtg-field--disabled .wtg-field__control {
  background: var(--s-neutral-bg-disabled);
  cursor: not-allowed;
}
.wtg-field--disabled .wtg-field__input { color: var(--s-neutral-txt-disabled); }
.wtg-field--filled .wtg-field__control {
  background: var(--s-neutral-bg-weak-default);
  border-color: transparent;
}
.wtg-field--readonly .wtg-field__control {
  background: transparent; border-color: transparent; padding-left: 0;
}
```

### WtgTabs

```html
<div class="wtg-tabs" role="tablist">
  <button class="wtg-tab wtg-tab--active" role="tab" aria-selected="true"><span class="wtg-tab-content">Workflow</span></button>
  <button class="wtg-tab" role="tab"><span class="wtg-tab-content">eDocs</span></button>
  <button class="wtg-tab" role="tab"><span class="wtg-tab-content">Documents</span></button>
</div>
```

```css
.wtg-tabs { display: flex; align-items: stretch; flex-grow: 1; flex-shrink: 0; position: relative; }
.wtg-tab {
  padding: 0; min-width: unset; height: min-content;
  background: transparent; border: 0; cursor: pointer;
  color: var(--s-neutral-txt-default);
  font: var(--s-text-md-strong);
  letter-spacing: normal; text-transform: none;
  position: relative;
}
.wtg-tab > .wtg-tab-content {
  display: inline-flex; align-items: center;
  padding: var(--s-padding-s) var(--s-padding-s);
}
.wtg-tab:hover { background: var(--s-primary-bg-weak-hover); color: var(--s-primary-txt-hover); }
.wtg-tab--active { color: var(--s-primary-txt-default); }
.wtg-tab--active::after {
  content: ""; position: absolute; left: 0; right: 0; bottom: 0;
  height: 2px; background: var(--s-primary-border-default);
}
```

### WtgEntityActions

Just a bordered cluster wrapper. Gap `xs`, 1px weak border, radius `s`, no fill, no inner padding. Children are ghost WtgButtons.

```html
<div class="wtg-entity-actions">
  <button class="wtg-button wtg-button--ghost"><i class="s-icon-workflow"></i> Workflow</button>
  <button class="wtg-button wtg-button--ghost"><i class="s-icon-edocs"></i> eDocs</button>
  <button class="wtg-button wtg-button--ghost"><i class="s-icon-documentation"></i> Documents</button>
</div>
```

```css
.wtg-entity-actions {
  display: flex; flex-direction: row;
  align-items: center; justify-content: center;
  gap: var(--s-spacing-xs);
  border: 1px solid var(--s-neutral-border-weak-default);
  border-radius: var(--s-radius-s);
}
```

### WtgBreadcrumbs

```html
<nav class="wtg-breadcrumbs" aria-label="Breadcrumbs">
  <a class="wtg-breadcrumbs__item" href="#">Portal name</a>
  <i class="s-icon-forward-slash" aria-hidden="true"></i>
  <span class="wtg-breadcrumbs__current-item">Page name</span>
</nav>
```

```css
.wtg-breadcrumbs { display: inline-flex; align-items: center; gap: var(--s-spacing-s); }
.wtg-breadcrumbs__item {
  cursor: pointer;
  text-decoration: underline;
  font-weight: var(--s-fontweight-500);
  color: var(--s-primary-txt-default);
}
.wtg-breadcrumbs__current-item {
  font-weight: var(--s-fontweight-600);
  color: var(--s-neutral-txt-default);
}
```

### WtgMasthead

The top-of-page chrome on every CargoWise screen. Anatomy:

- **Toolbar row** (`.v-toolbar__content`): breadcrumbs on the left, append slot on the right (icon buttons like search, warnings, notifications). `padding-top: 8px; padding-right: 16px;`
- **WtgDivider** between toolbar row and extension (a 1px hairline).
- **Extension** (`.v-toolbar__extension`): column-flex, `padding-right: 16px`. Typical content: a record header row (back button + record ID on the left, entity-actions cluster on the right) and below that the tab strip.
- Outer padding-left: `var(--s-padding-xl)`. Background: `var(--s-neutral-canvas-default)`.

### WtgActionBar

A floating action bar at the bottom of a form. Rounded white card, elevation-200, inset from the canvas with a visible gap. Buttons right-aligned.

```html
<footer style="padding: var(--s-padding-xl); background: var(--s-neutral-canvas-default);">
  <div class="wtg-action-bar" role="toolbar" aria-label="Form actions">
    <button class="wtg-button wtg-button--outline">Cancel</button>
    <button class="wtg-button wtg-button--outline">Secondary actions</button>
    <button class="wtg-button wtg-button--fill wtg-button--primary">Save changes</button>
  </div>
</footer>
```

```css
.wtg-action-bar {
  display: flex; align-items: center; justify-content: flex-end;
  gap: var(--s-spacing-xl);
  padding: var(--s-padding-xl);
  border: 1px solid var(--s-neutral-border-weak-default);
  border-radius: var(--s-radius-m);
  background: var(--s-neutral-bg-default);
  box-shadow: var(--s-elevation-200);
}
```

### CargoWise app shell (high-level)

The shell is two columns: a permanent indigo sidebar on the left, a white content card on the right (the masthead + content + action bar).

- **Sidebar**: full-height indigo column (`var(--s-primary-bg-default)`), ~216px wide, white text at 92% opacity for inactive items. Contains: logo + collapse button, portal card, primary nav, bottom items (Favorites, Recently viewed, Help, Settings, user).
- **Content card**: white/canvas-bg column flush to the sidebar, containing the WtgMasthead, scrollable body, and WtgActionBar footer.
- No floating sidebar, no rounded outer container on the shell.

---

## Iconography

**Supply Icon Font** (~250 icons). Font family `supply-icon`, class pattern `s-icon-<name>`.

```html
<!-- Load font -->
<style>
  @font-face {
    font-family: 'supply-icon';
    src: url('/path/to/supply.woff') format('woff');
    font-display: block;
  }
  [class^='s-icon-'], [class*=' s-icon-'] {
    font-family: 'supply-icon' !important;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
  }
</style>

<i class="s-icon-search" aria-hidden="true"></i>
<i class="s-icon-edit"></i>
<i class="s-icon-delete"></i>
```

### Common icon names (selected)

```
Navigation:  arrow-up, arrow-down, arrow-left, arrow-right, arrow-right-split,
             caret-up, caret-down, caret-left, caret-right, caret-switch,
             chevron, first, last, history, drawer-open, drawer-close,
             menu-hamburger, menu-kebab, menu-meatballs

Actions:     add, edit, delete, remove, copy, copy-headers, paste, clone,
             save, refresh, download-file, upload-file, upload-cloud,
             attach, link, print, share, hide, show, lock, unlock,
             sign-in, sign-out, full-screen, drag, reorder, swap

Editing:     filter, filter-sliders, sorting, group, group-by, group-screening,
             search, lookup, list-search, list-bullet, asterisk

Status:      status-success, status-success-filled,
             status-warning, status-warning-filled,
             status-critical, status-critical-filled,
             status-inprogress, status-inprogress-filled,
             info-circle, check, close, close-circle, pause, play, stop, minus, plus

Comms:       at-email, email, phone, chat, message-alert, notes, notifications,
             bell, flag, flag-filled, star-empty, star-filled, pin-empty, pin-filled,
             bookmark-empty, bookmark-filled, thumbs-up, thumbs-down

Logistics:   anchor, barge, vessel, plane, container, container-crane-lift,
             shipment-crane, truck, truck-completed, truck-loading, truck-pending,
             package, package-check, package-cross, package-cycle,
             package-down, package-up, package-movement, packing-consolidation,
             person-custom-officer, person-delivery-a, person-delivery-b,
             warehouse, warehouse-storage, location, earth, forwarding,
             standalone-screening, supplier-bookings, group-screening, register

CargoWise:   cargowise, wisetech-global, workflow, edocs, documentation, related-records,
             notes, logs, record, invoice, currency-dollar, currency-dollar-circle,
             reporting, pulse, mobile, building, home, calculator, password

System:      help, settings, system-preferences, accessibility, color,
             toggle-light-dark, density-compact, density-relaxed, density-tight,
             user, user-shield, user (full names)

Text editor: text-bold, text-italic, text-underline, text-link,
             text-leftalign, text-centeralign, text-rightalign, text-hrule

Misc:        loading, spinner, time, hourglass, calendar-blank, calendar-range,
             camera, car, barcode, boxes, clipboard, file, file-rotate, folder,
             flash, popup, new-window, right-panel, cursor-move,
             move-up, move-down, move-left, move-right, move-top, move-bottom,
             placeholder, figma, vue, pt-devtools, pt-incident, pt-issue-manager,
             pt-networkdiagram, pt-projects, pt-releasesequencing,
             pt-visualboard, pt-workitem
```

If a needed glyph is missing, extend the font — **do not** fall back to Lucide, Heroicons, or inline SVGs. Visual weight will clash.

---

## Quick rules of thumb

- **Canvas** is `#f7f7f4` (warm stone), not white and not cool-gray. Surfaces (cards, dialogs) are pure white on top.
- **Brand action** is `#371ee1`. Use for primary CTAs, links, focus rings, active states, selections.
- **Button radius**: 4px. **Card radius**: 8px. **Sheet/dialog radius**: 12–16px. **Status pills**: 16px (`radius-xl`).
- **Borders**: `--s-neutral-border-weak-default` (`#bfbeb9`) 1px solid for all standard borders.
- **Focus**: 2px solid `--s-primary-border-default`, 1px offset. Never dashed.
- **Motion**: `0.28s cubic-bezier(0.4, 0, 0.2, 1)`. Slide + fade only.
- **Hover**:
  - Neutral buttons → white → `#efeeeb`
  - Primary fill → `#371ee1` → `#221098`
  - Outline/ghost → tonal overlay (currentColor at 12%)
  - Never opacity-fade the whole element.
- **Press/active**:
  - Fill → deepest sentiment shade
  - Outline/ghost → tonal overlay at 24%
  - Add `elevation-button-pressed` for a tactile inset.
- **Disabled**: `--s-neutral-bg-disabled` + `--s-neutral-txt-disabled` + `cursor: default; pointer-events: none`. No box-shadow.
- **Numbers**: use the `-num` typography variant (`font-variant-numeric: tabular-nums`) for any column of figures.
- **No emoji.** Status is communicated with the `sentiment` colors and Supply icons (`s-icon-status-*`).
- **No inline SVG for iconography.** Use the icon font.
- **No gradients.** Anywhere in product UI.

---

## When asked to design

1. Start from the canvas: `#f7f7f4` body bg, white surfaces, charcoal text.
2. Pick one primary action per screen — use the `primary` fill button. Destructive uses `critical` fill.
3. Use **WtgStatus** for status, never custom pills or dots.
4. Use **WtgTextField** for inputs — outlined by default, filled where the field is part of a chrome row.
5. Reach for **WtgIconButton ghost** for any toolbar icon. Reach for outline only when it sits in a heavy chrome row that needs visual weight.
6. Tables are dense — `--s-fontsize-300`, zebra rows via `--s-neutral-bg-weak-default`, tabular numerics.
7. Imagery? Restrict to line-art illustrations. Photographs are rare. **No stock photos, no gradients.**

---

## Don't

- Don't invent token values. If you need a shade, pick from the existing scale.
- Don't make up icon names. Use the list above or check the actual font.
- Don't add emoji to product UI.
- Don't use Lucide, Heroicons, or inline SVGs for iconography — the icon font is the system.
- Don't make buttons pill-shaped, big-radius, or gradient-filled.
- Don't add bouncy / elastic / scale-from-zero animations.
- Don't pad the masthead with logos, hero images, or marketing copy. It's a working surface.

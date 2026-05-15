# @wtg/supply-tokens

Framework-agnostic design tokens for the Supply Design System. This package provides CSS variables for colors, spacing, typography, elevation, and more that can be used across any web framework or vanilla CSS/JavaScript project.

## Installation

```bash
npm install @wtg/supply-tokens
```

## Quick Start

```css
/* Import the core light theme tokens */
@import '@wtg/supply-tokens/css/supply-light-core.css';
@import '@wtg/supply-tokens/css/supply-typography-core.css';
@import '@wtg/supply-tokens/css/supply-desktop-core.css';

/* Use design tokens in your CSS */
.my-component {
  background-color: var(--s-primary-bg-default);
  color: var(--s-primary-txt-inv-default);
  padding: var(--s-spacing-m);
  border-radius: var(--s-border-radius-medium);
}
```

## Available Token Files

### Core Theme Files
- `supply-light-core.css` - Light theme color tokens
- `supply-dark-core.css` - Dark theme color tokens  
- `supply-muted-core.css` - Muted theme color tokens

### Typography & Layout
- `supply-typography-core.css` - Font sizes, weights, and line heights
- `supply-elevation.css` - Box shadow tokens for elevation
- `supply-desktop-core.css` - Desktop-specific tokens
- `supply-mobile-core.css` - Mobile-specific tokens

### Complete Styles
- `supply-styles.css` - Complete style utilities and base styles

## Usage Examples

### React/Next.js

```jsx
// Import in your main CSS file or component
import '@wtg/supply-tokens/css/supply-light-core.css';
import '@wtg/supply-tokens/css/supply-typography-core.css';

// Use tokens in CSS modules or styled-components
const Button = styled.button`
  background-color: var(--s-primary-bg-default);
  color: var(--s-primary-txt-default);
  padding: var(--s-spacing-s) var(--s-spacing-m);
  border: 1px solid var(--s-primary-border-default);
  border-radius: var(--s-border-radius-small);
  font-size: var(--s-fontsize-400);
`;
```

### Vue.js

> **Note for Vue users:** If you're building with Vue 3, we recommend using [`@wtg/wtg-components`](https://github.com/WiseTechGlobal/WTG.WebComponents) instead. It provides the complete Supply design system experience with pre-built components, built-in accessibility features, and seamless design token integration. This standalone package is primarily intended for React, Angular, and other non-Vue frameworks.

```vue
<template>
  <div class="card">
    <h2 class="title">Card Title</h2>
    <p class="content">Card content goes here</p>
  </div>
</template>

<style>
/* Import tokens globally in main.css */
@import '@wtg/supply-tokens/css/supply-light-core.css';
@import '@wtg/supply-tokens/css/supply-typography-core.css';
@import '@wtg/supply-tokens/css/supply-desktop-core.css';

.card {
  background-color: var(--s-surface-bg-default);
  border: 1px solid var(--s-neutral-border-default);
  border-radius: var(--s-border-radius-medium);
  padding: var(--s-spacing-l);
  box-shadow: var(--s-elevation-low);
}

.title {
  color: var(--s-primary-txt-default);
  font-size: var(--s-text-heading-small-font-size);
  font-weight: var(--s-text-heading-small-font-weight);
  margin-bottom: var(--s-spacing-m);
}

.content {
  color: var(--s-neutral-txt-default);
  font-size: var(--s-fontsize-400);
  line-height: var(--s-lineheight-300);
}
</style>
```

### Angular

```scss
// In your styles.scss
@import '@wtg/supply-tokens/css/supply-light-core.css';
@import '@wtg/supply-tokens/css/supply-typography-core.css';
@import '@wtg/supply-tokens/css/supply-desktop-core.css';

// Component styles
.notification {
  background-color: var(--s-info-bg-default);
  color: var(--s-info-txt-default);
  border-left: 4px solid var(--s-info-border-default);
  padding: var(--s-spacing-m);
  margin-bottom: var(--s-spacing-s);
  
  &.warning {
    background-color: var(--s-warning-bg-default);
    color: var(--s-warning-txt-default);
    border-left-color: var(--s-warning-border-default);
  }
  
  &.error {
    background-color: var(--s-critical-bg-default);
    color: var(--s-critical-txt-default);
    border-left-color: var(--s-critical-border-default);
  }
}
```

### Vanilla CSS/HTML

```html
<!DOCTYPE html>
<html>
<head>
  <!-- Import tokens via CDN or local file -->
  <link rel="stylesheet" href="node_modules/@wtg/supply-tokens/css/supply-light-core.css">
  <link rel="stylesheet" href="node_modules/@wtg/supply-tokens/css/supply-typography-core.css">
</head>
<body>
  <div class="app">
    <header class="header">Supply Design System</header>
    <main class="main">Content goes here</main>
  </div>
  
  <style>
    .app {
      font-family: var(--s-font-family-default);
      background-color: var(--s-surface-bg-default);
      color: var(--s-neutral-txt-default);
      min-height: 100vh;
    }
    
    .header {
      background-color: var(--s-primary-bg-default);
      color: var(--s-primary-txt-default);
      padding: var(--s-spacing-l);
      font-size: var(--s-title-md-default);
      font-weight: var(--s-fontweight-500);
    }
    
    .main {
      padding: var(--s-spacing-l);
    }
  </style>
</body>
</html>
```

## Dark Mode Support

Switch between themes by importing different core files:

```css
/* Light theme (default) */
@import '@wtg/supply-tokens/css/supply-light-core.css';

/* Dark theme */
@import '@wtg/supply-tokens/css/supply-dark-core.css';

/* Muted theme */
@import '@wtg/supply-tokens/css/supply-muted-core.css';
```

Or dynamically with JavaScript:

```javascript
function setTheme(theme) {
  const themeLink = document.getElementById('theme-tokens');
  themeLink.href = `node_modules/@wtg/supply-tokens/css/supply-${theme}-core.css`;
}

// Switch to dark theme
setTheme('dark');
```

## Common Token Categories

### Colors
- `--s-primary-*` - Primary brand colors
- `--s-neutral-*` - Neutral grays and blacks
- `--s-surface-*` - Background and surface colors
- `--s-critical-*` - Error/danger colors
- `--s-warning-*` - Warning colors
- `--s-success-*` - Success colors
- `--s-info-*` - Information colors

### Spacing
- `--s-spacing-tiny` through `--s-spacing-huge` - Consistent spacing scale
- `--s-spacing-component-*` - Component-specific spacing

### Typography
- `--s-font-family-*` - Font family stacks
- `--s-text-*-font-size` - Font sizes for different text styles
- `--s-text-*-font-weight` - Font weights
- `--s-text-*-line-height` - Line heights

### Borders & Radius
- `--s-border-radius-*` - Border radius values
- `--s-border-width-*` - Border width values

### Elevation
- `--s-elevation-*` - Box shadow values for depth

## Best Practices

### 1. Import Core Tokens First
Always import core color and typography tokens as your foundation:

```css
@import '@wtg/supply-tokens/css/supply-light-core.css';
@import '@wtg/supply-tokens/css/supply-typography-core.css';
```

### 2. Use Semantic Color Tokens
Prefer semantic color tokens over literal ones:

```css
/* Good - semantic meaning */
.error-message {
  color: var(--s-critical-txt-default);
  background-color: var(--s-critical-bg-default);
}

/* Avoid - too specific to color value */
.error-message {
  color: var(--s-red-600);
  background-color: var(--s-red-50);
}
```

### 3. Responsive Design
Use device-specific tokens when needed:

```css
@import '@wtg/supply-tokens/css/supply-mobile-core.css';

@media (min-width: 768px) {
  @import '@wtg/supply-tokens/css/supply-desktop-core.css';
}
```

### 4. Consistent Spacing
Use the spacing scale for consistent layouts:

```css
.component {
  padding: var(--s-spacing-m);
  margin-bottom: var(--s-spacing-l);
  gap: var(--s-spacing-s);
}
```

## Framework Integration

This package works with any modern build tool or framework:

- **Webpack/Vite**: Import CSS files directly
- **PostCSS**: Process tokens through your PostCSS pipeline
- **Sass/Less**: Import tokens before your custom styles
- **CSS-in-JS**: Use CSS variables in your styled-components or emotion
- **Tailwind CSS**: Extend Tailwind's theme with Supply design tokens

## Contributing

This package is part of the Supply Design System maintained by WiseTech Global. For contributions or issues, please refer to the main [WTG.WebComponents repository](https://github.com/WiseTechGlobal/WTG.WebComponents).

## License

UNLICENSED - Internal use only.

## Usage

### CSS

Import CSS files directly:

```css
@import '@wtg/supply-tokens/css/supply-light-core.css';
@import '@wtg/supply-tokens/css/supply-typography-core.css';
```

### SCSS

```scss
@import '@wtg/supply-tokens/scss/supply-light-core';
@import '@wtg/supply-tokens/scss/supply-typography-core';
```

### JavaScript/TypeScript

```typescript
import { colors, typography, elevation } from '@wtg/supply-tokens';

// Use tokens programmatically
const lightColors = await colors.light();
const typographyTokens = await typography();

// Access CSS file paths
import { cssFiles } from '@wtg/supply-tokens';
const cssPath = cssFiles.light; // './css/supply-light-core.css'
```

### React Example

```tsx
import { cssFiles } from '@wtg/supply-tokens';

// Import CSS in your app entry point
import '@wtg/supply-tokens/css/supply-light-core.css';
import '@wtg/supply-tokens/css/supply-typography-core.css';

function App() {
  return <div className="app">Supply tokens loaded!</div>;
}
```

## Available Tokens

- **Colors**: Light, dark, and muted theme variants
- **Spacing**: Mobile and desktop spacing scales  
- **Typography**: Font families, sizes, weights, and line heights
- **Elevation**: Box shadows and elevation levels

## Output Formats

- **CSS**: Ready-to-use CSS custom properties
- **SCSS**: SCSS variables for build-time usage
- **JS**: JavaScript objects for programmatic access
- **JSON**: Pure JSON for any language/framework
# @wtg/supply-icons

Framework-agnostic icon library for the Supply Design System. This package provides 250+ professionally designed icons as icon fonts and CSS classes that work across any web framework or vanilla CSS/JavaScript project.

## Installation

```bash
npm install @wtg/supply-icons
```

## Quick Start

```css
/* Import the icon font and CSS classes */
@import '@wtg/supply-icons/css/supply-icons.css';
```

```html
<!-- Use icons with CSS classes -->
<i class="supply-icon s-icon-add"></i>
<i class="supply-icon s-icon-edit"></i>
<i class="supply-icon s-icon-delete"></i>
```

## Available Files

### CSS Files
- `supply-icons.css` - Complete icon font and CSS classes (recommended for most use cases)
- `supply-icons.module.scss` - Sass/SCSS version with TypeScript module support

### Font Files  
- `fonts/supply.ttf` - TrueType font file
- `fonts/supply.woff` - Web font file (optimized for web)

## Usage Examples

### React/Next.js

#### Method 1: CSS Import (Recommended)
```jsx
// Import in your main CSS file or _app.js
import '@wtg/supply-icons/css/supply-icons.css';

// Use in components
function MyComponent() {
  return (
    <div>
      <button className="btn">
        <i className="supply-icon s-icon-add" />
        Add Item
      </button>
      <button className="btn">
        <i className="supply-icon s-icon-edit" />
        Edit
      </button>
    </div>
  );
}
```

#### Method 2: SCSS Module with TypeScript
```tsx
// Import with TypeScript support
import iconClasses from '@wtg/supply-icons/css/supply-icons.module.scss';

function IconButton({ iconName, children }) {
  return (
    <button className="btn">
      <i className={`${iconClasses.wtgIcon} ${iconClasses[`wtgIcon${iconName}`]}`} />
      {children}
    </button>
  );
}

// Usage
<IconButton iconName="Add">Create New</IconButton>
```

#### Method 3: Icon Component
```jsx
import '@wtg/supply-icons/css/supply-icons.css';

function Icon({ name, className = '', ...props }) {
  return (
    <i 
      className={`supply-icon s-icon-${name} ${className}`}
      aria-hidden="true"
      {...props}
    />
  );
}

// Usage
<Icon name="search" />
<Icon name="user" className="large" />
<Icon name="settings" style={{ color: 'blue' }} />
```

### Vue.js

> **Note for Vue users:** If you're building with Vue 3, we recommend using [`@wtg/wtg-components`](https://github.com/WiseTechGlobal/WTG.WebComponents) instead. It provides the complete Supply design system experience with built-in `WtgIcon` components, accessibility features, and seamless design token integration. This standalone package is primarily intended for React, Angular, and other non-Vue frameworks.

```vue
<template>
  <div>
    <button class="btn" @click="addItem">
      <i class="supply-icon s-icon-add"></i>
      Add Item
    </button>
    
    <div class="toolbar">
      <button v-for="action in actions" :key="action.name" class="tool-btn">
        <i :class="`supply-icon s-icon-${action.icon}`"></i>
        {{ action.label }}
      </button>
    </div>
  </div>
</template>

<script>
// Import globally in main.js
import '@wtg/supply-icons/css/supply-icons.css';

export default {
  data() {
    return {
      actions: [
        { name: 'save', icon: 'save', label: 'Save' },
        { name: 'print', icon: 'print', label: 'Print' },
        { name: 'share', icon: 'share', label: 'Share' }
      ]
    }
  }
}
</script>

<style scoped>
.btn, .tool-btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  background: #007bff;
  color: white;
  cursor: pointer;
}

.wtg-icon {
  font-size: 16px;
}
</style>
```

### Angular

```typescript
// In your app.module.ts or main component
import '@wtg/supply-icons/css/supply-icons.css';

@Component({
  selector: 'app-toolbar',
  template: `
    <div class="toolbar">
      <button 
        *ngFor="let item of menuItems" 
        class="menu-btn"
        (click)="item.action()"
      >
        <i [class]="'supply-icon s-icon-' + item.icon"></i>
        {{ item.label }}
      </button>
    </div>
  `,
  styles: [`
    .toolbar {
      display: flex;
      gap: 8px;
      padding: 16px;
    }
    
    .menu-btn {
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 8px 16px;
      border: 1px solid #ddd;
      border-radius: 4px;
      background: white;
      cursor: pointer;
    }
    
    .menu-btn:hover {
      background: #f5f5f5;
    }
    
    .wtg-icon {
      font-size: 16px;
    }
  `]
})
export class ToolbarComponent {
  menuItems = [
    { icon: 'home', label: 'Home', action: () => this.navigateHome() },
    { icon: 'user', label: 'Profile', action: () => this.openProfile() },
    { icon: 'settings', label: 'Settings', action: () => this.openSettings() }
  ];
}
```

### Vanilla CSS/HTML

```html
<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="node_modules/@wtg/supply-icons/css/supply-icons.css">
  <style>
    .icon-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
      gap: 16px;
      padding: 20px;
    }
    
    .icon-item {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 16px;
      border: 1px solid #ddd;
      border-radius: 8px;
      text-align: center;
    }
    
    .wtg-icon {
      font-size: 24px;
      margin-bottom: 8px;
    }
  </style>
</head>
<body>
  <h1>Supply Icons Showcase</h1>
  
  <div class="icon-grid">
    <div class="icon-item">
      <i class="wtg-icon wtg-icon-add"></i>
      <span>Add</span>
    </div>
    <div class="icon-item">
      <i class="supply-icon s-icon-edit"></i>
      <span>Edit</span>
    </div>
    <div class="icon-item">
      <i class="supply-icon s-icon-delete"></i>
      <span>Delete</span>
    </div>
    <div class="icon-item">
      <i class="supply-icon s-icon-search"></i>
      <span>Search</span>
    </div>
  </div>
  
  <!-- Navigation example -->
  <nav class="nav">
    <a href="/dashboard" class="nav-link">
      <i class="supply-icon s-icon-home"></i>
      Dashboard
    </a>
    <a href="/projects" class="nav-link">
      <i class="supply-icon s-icon-folder"></i>
      Projects
    </a>
    <a href="/settings" class="nav-link">
      <i class="supply-icon s-icon-settings"></i>
      Settings
    </a>
  </nav>
</body>
</html>
```

## Styling Icons

### Size Customization
```css
.supply-icon {
  font-size: 16px; /* Default size */
}

.supply-icon.small { font-size: 12px; }
.supply-icon.medium { font-size: 16px; }
.supply-icon.large { font-size: 24px; }
.supply-icon.extra-large { font-size: 32px; }
```

### Color Customization
```css
.supply-icon { color: currentColor; } /* Inherits text color */

.supply-icon.primary { color: #007bff; }
.supply-icon.success { color: #28a745; }
.supply-icon.warning { color: #ffc107; }
.supply-icon.danger { color: #dc3545; }
```

### Interactive States
```css
.btn .wtg-icon {
  transition: all 0.2s ease;
}

.btn:hover .wtg-icon {
  transform: scale(1.1);
}

.btn:disabled .wtg-icon {
  opacity: 0.5;
}
```

## Common Icon Names

### Navigation & Actions
- `add`, `create`, `plus`
- `edit`, `pencil`, `modify`
- `delete`, `trash`, `remove`
- `search`, `find`, `magnify`
- `settings`, `gear`, `configure`
- `home`, `dashboard`, `menu`

### Content & Media
- `folder`, `file`, `document`
- `image`, `photo`, `picture`
- `video`, `play`, `pause`
- `download`, `upload`, `cloud`

### Communication & Social
- `email`, `mail`, `message`
- `phone`, `call`, `contact`
- `share`, `link`, `external`
- `user`, `profile`, `account`

### Status & Feedback  
- `success`, `check`, `checkmark`
- `warning`, `alert`, `caution`
- `error`, `close`, `x`
- `info`, `help`, `question`

### Navigation
- `arrow-up`, `arrow-down`, `arrow-left`, `arrow-right`
- `chevron-up`, `chevron-down`, `chevron-left`, `chevron-right`
- `back`, `forward`, `next`, `previous`

## Accessibility Best Practices

### Decorative Icons
```html
<!-- For decorative icons, use aria-hidden -->
<button>
  <i class="wtg-icon wtg-icon-save" aria-hidden="true"></i>
  Save Document
</button>
```

### Meaningful Icons
```html
<!-- For icons that convey meaning, provide appropriate labels -->
<button aria-label="Close dialog">
  <i class="wtg-icon wtg-icon-close"></i>
</button>

<!-- Or use screen reader text -->
<button>
  <i class="wtg-icon wtg-icon-edit" aria-hidden="true"></i>
  <span class="sr-only">Edit item</span>
</button>
```

### Screen Reader Support
```css
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}
```

## Framework Integration Tips

### CSS-in-JS Libraries (styled-components, emotion)
```jsx
import styled from 'styled-components';
import '@wtg/supply-icons/css/supply-icons.css';

const IconButton = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  
  .wtg-icon {
    font-size: 16px;
    color: currentColor;
  }
`;

// Usage
<IconButton>
  <i className="wtg-icon wtg-icon-save" />
  Save
</IconButton>
```

### Tailwind CSS
```html
<!-- Icons work great with Tailwind utility classes -->
<button class="flex items-center space-x-2 px-4 py-2 bg-blue-500 text-white rounded">
  <i class="wtg-icon wtg-icon-download text-lg"></i>
  <span>Download</span>
</button>
```

### Build Tool Configuration

#### Webpack
```javascript
// webpack.config.js
module.exports = {
  module: {
    rules: [
      {
        test: /\.(woff|woff2|ttf|eot)$/,
        use: 'file-loader'
      }
    ]
  }
};
```

#### Vite
```javascript
// vite.config.js
export default {
  assetsInclude: ['**/*.woff', '**/*.ttf']
};
```

## Best Practices

### 1. Consistent Sizing
Use a consistent icon size throughout your application:

```css
:root {
  --icon-size-sm: 12px;
  --icon-size-md: 16px;
  --icon-size-lg: 24px;
  --icon-size-xl: 32px;
}

.wtg-icon {
  font-size: var(--icon-size-md);
}
```

### 2. Semantic HTML
Pair icons with text when possible for better UX:

```html
<!-- Good -->
<button>
  <i class="wtg-icon wtg-icon-save"></i>
  Save
</button>

<!-- Avoid (icon only) unless space is very constrained -->
<button title="Save">
  <i class="wtg-icon wtg-icon-save"></i>
</button>
```

### 3. Performance
Import only what you need if bundle size is critical:

```css
/* Import only core icon font */
@font-face {
  font-family: 'Supply';
  src: url('@wtg/supply-icons/fonts/supply.woff') format('woff');
}

.wtg-icon {
  font-family: 'Supply';
  font-style: normal;
  font-weight: normal;
  line-height: 1;
}
```

## Contributing

This package is part of the Supply Design System maintained by WiseTech Global. For contributions or issues, please refer to the main [WTG.WebComponents repository](https://github.com/WiseTechGlobal/WTG.WebComponents).

## License

UNLICENSED - Internal use only.
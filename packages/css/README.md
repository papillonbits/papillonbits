# @papillonbits/css

Comprehensive CSS architecture built on SCSS with design primitives, component styles, and utility classes.

[![npm version](https://img.shields.io/npm/v/@papillonbits/css.svg)](https://www.npmjs.com/package/@papillonbits/css)

## Overview

A modular CSS library providing a complete styling foundation for modern web applications. Built with SCSS and following BEM-inspired naming conventions.

## Installation

```bash
npm install @papillonbits/css
```

## Usage

```scss
// Import all styles
@import '@papillonbits/css';

// Or import specific modules
@import '@papillonbits/css/src/primer/base/index.scss';
@import '@papillonbits/css/src/primer/buttons/index.scss';
@import '@papillonbits/css/src/primer/utilities/index.scss';
```

## CSS Modules

### Core & Foundation
- **base** - CSS resets and base styles
- **core** - Core CSS primitives and foundations
- **primitives** - Design tokens (colors, spacing, typography)
- **support** - Support utilities and mixins

### Components
- **autocomplete** - Autocomplete input styling
- **avatars** - Avatar and profile image styles
- **box** - Box component styles
- **branch-name** - Git branch display styling
- **buttons** - Button styles with variants and states
- **forms** - Form element styling (inputs, checkboxes, radios)
- **header** - Header component styles
- **labels** - Label and tag styles
- **loaders** - Loading spinner and indicator styles
- **navigation** - Navigation menu and nav bar styles
- **pagination** - Pagination control styles
- **select-menu** - Advanced select menu styling
- **toasts** - Toast notification styles
- **tooltips** - Tooltip and popover styles

### Layout
- **layout** - Layout utilities and grid systems
- **truncate** - Text truncation utilities
- **table-object** - Table styling and data display

### Theme & Modes
- **color-modes** - Dark mode and theme switching support

### Content
- **markdown** - Styled markdown content
- **marketing** - Marketing page styles
- **product** - Product-specific styles

### Utilities
- **utilities** - CSS utility classes for common patterns

## Features

- **Modular Architecture** - Import only what you need
- **Design Tokens** - Consistent spacing, colors, and typography from @primer/primitives
- **Dark Mode Support** - Built-in color mode switching
- **Responsive** - Mobile-first responsive design
- **Browser Compatibility** - Autoprefixer for vendor prefixes
- **SCSS Powered** - Variables, mixins, and nesting

## CSS Architecture Principles

The CSS follows a structured architecture:

1. **Primitives** - Design tokens and variables
2. **Base** - Reset and foundational styles
3. **Components** - Component-specific styles
4. **Utilities** - Single-purpose utility classes
5. **Layouts** - Page and section layouts

## Build Process

```bash
# Build the CSS package
npm run build

# Build for different environments
npm run build-test
npm run build-acceptance
npm run build-release
```

The build process:
1. Copies SCSS files from `src/` to `build/`
2. Preserves directory structure
3. Transpiles with Babel for consistent module resolution

## Scripts

- `clean-up` - Remove build artifacts and dependencies
- `install-packages` - Install dependencies
- `build` - Build the package

## Entry Point

The main entry point is `build/index.scss` which imports all CSS modules.

## Dependencies

This package depends on:
- **@primer/primitives** - Design tokens and primitives
- **SCSS/Sass** - For processing SCSS files

## Browser Support

Supports modern browsers with autoprefixer:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Customization

Override SCSS variables to customize the design:

```scss
// Override primitives before import
$color-primary: #0366d6;
$spacing-base: 8px;

@import '@papillonbits/css';
```

## PostCSS Configuration

The project uses PostCSS with:
- **postcss-preset-env** - Modern CSS features
- **postcss-nested** - Nested rule support
- **autoprefixer** - Vendor prefixes

## Linting

SCSS files are linted with Stylelint:
- **stylelint-config-standard** - Standard rules
- **stylelint-scss** - SCSS-specific rules
- **stylelint-prettier** - Prettier integration
- **stylelint-order** - Property ordering

## Documentation

For visual examples and component styles, see the [Storybook documentation](https://github.com/papillonbits/papillonbits).

## Links

- [Homepage](https://github.com/papillonbits/papillonbits/tree/master/packages/css)
- [Repository](https://github.com/papillonbits/papillonbits)

## Related Packages

- [@papillonbits/components](../components) - React components
- [@papillonbits/library](../library) - Utility functions
- [@papillonbits/setup](../setup) - Build configuration

## License

See root LICENSE file for details.

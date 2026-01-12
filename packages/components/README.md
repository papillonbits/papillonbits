# @papillonbits/components

A comprehensive collection of accessible React components for building modern web applications.

[![npm version](https://img.shields.io/npm/v/@papillonbits/components.svg)](https://www.npmjs.com/package/@papillonbits/components)

## Overview

This package provides a complete suite of React components following atomic design principles. All components are built with accessibility, reusability, and customization in mind.

## Installation

```bash
npm install @papillonbits/components
```

## Components

### Layout Components
- **Alert** - Display notification and alert messages with various severity levels
- **Blankslate** - Show empty states with helpful messaging
- **Box** - Flexible layout container with customizable spacing and styling
- **Layout** - Page layout components for consistent structure

### Form Components
- **Checkbox** - Accessible checkbox input with label support
- **Input** - Text input fields with validation states
- **Radio** - Radio button input with grouping support
- **Select** - Native select dropdown component
- **SelectMenu** - Advanced select menu with search and filtering

### Navigation Components
- **Breadcrumb** - Navigation breadcrumbs for hierarchical navigation
- **Menu** - Vertical navigation menu
- **TabNav** - Tab-based navigation
- **UnderlineNav** - Underlined navigation bar

### Interactive Components
- **Button** - Interactive button with multiple variants and states
- **Dropdown** - Dropdown menus and selectors
- **Pagination** - Pagination controls with PreviousNext component

### Display Components
- **Label** - Labels and tags for categorization
- **Icon** - Icon components for visual communication
- **SVG** - SVG utilities and components
- **BranchName** - Git branch name display component

### Grid & Table Components
- **DisplayTable** - Table component for displaying tabular data
- **FlexGrid** - Flexible grid layout system

### Feedback Components
- **Loader** - Loading indicators and spinners
- **Progress** - Progress bars and indicators
- **Toast** - Toast notification system
- **Popover** - Popover and tooltip containers

### Utility Components
- **ErrorBoundary** - React error boundary for graceful error handling
- **Subhead** - Subheading components for content hierarchy

## Usage

```javascript
import { Button, Alert, Input } from '@papillonbits/components';

function MyComponent() {
  return (
    <div>
      <Alert type="success">Operation completed successfully!</Alert>
      <Input 
        label="Email" 
        type="email" 
        placeholder="Enter your email"
      />
      <Button variant="primary">Submit</Button>
    </div>
  );
}
```

## Dependencies

This package depends on:
- `@papillonbits/css` - Styling and CSS primitives
- `@papillonbits/library` - Utility functions and helpers
- `react` - React library
- `prop-types` - Runtime type checking

## Development

### Building

```bash
# Build the package
npm run build

# Build for different environments
npm run build-test
npm run build-acceptance
npm run build-release
```

### Scripts

- `clean-up` - Remove build artifacts and dependencies
- `install-packages` - Install dependencies
- `install-papillonbits-latest` - Update to latest papillonbits packages
- `build` - Transpile and build the package

## Features

- **Accessibility First** - All components follow WCAG guidelines
- **Customizable** - Easy to theme and customize via CSS and props
- **TypeScript Ready** - PropTypes included for runtime validation
- **Tree Shakeable** - Import only what you need
- **Well Tested** - Comprehensive test coverage with Jest and Testing Library

## Component Design Principles

- **Separation of Concerns** - Logic separated from presentation
- **Composition** - Components designed to work together
- **Atomic Design** - Built from atoms to organisms to templates
- **Accessibility** - ARIA attributes and keyboard navigation
- **Performance** - Optimized for minimal re-renders

## Documentation

For detailed component API documentation and live examples, visit the [Storybook documentation](https://github.com/papillonbits/papillonbits).

## Links

- [Homepage](https://github.com/papillonbits/papillonbits/tree/master/packages/components)
- [Repository](https://github.com/papillonbits/papillonbits)
- [Issues](https://github.com/papillonbits/papillonbits/issues)

## Related Packages

- [@papillonbits/css](../css) - CSS styles and primitives
- [@papillonbits/library](../library) - Utility functions
- [@papillonbits/setup](../setup) - Build configuration

## License

See root LICENSE file for details.

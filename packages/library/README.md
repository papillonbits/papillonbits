# @papillonbits/library

Modular JavaScript utility library with helper functions for common programming tasks.

[![npm version](https://img.shields.io/npm/v/@papillonbits/library.svg)](https://www.npmjs.com/package/@papillonbits/library)

## Overview

A comprehensive collection of utility functions organized by category, providing reusable solutions for array manipulation, date formatting, state management, and more.

## Installation

```bash
npm install @papillonbits/library
```

## Modules

### a11y - Accessibility Utilities
Helper functions for improving web accessibility, ARIA attributes, and assistive technology support.

### array - Array Manipulation
Functions for working with arrays including filtering, mapping, reducing, and transforming data structures.

### auth - Authentication Utilities
Helper functions for authentication, authorization, token management, and user session handling.

### boolean - Boolean Helpers
Utilities for boolean logic, type coercion, and conditional operations.

### browser - Browser Detection & Utilities
Functions for browser detection, feature detection, user agent parsing, and browser-specific utilities.

### date - Date Formatting & Manipulation
Date utilities for formatting, parsing, comparing, and manipulating dates and timestamps.

### event - Event Handling Utilities
Helper functions for DOM event handling, event delegation, and custom event management.

### hooks - Custom React Hooks
Reusable React hooks for common patterns like state management, side effects, and component lifecycle.

### number - Number Formatting & Utilities
Functions for number formatting, parsing, validation, and mathematical operations.

### object - Object Manipulation
Utilities for object creation, transformation, deep cloning, merging, and property access.

### pagination - Pagination Logic
Functions for calculating page numbers, page ranges, and pagination state management.

### sort - Sorting Utilities
Sorting algorithms and comparator functions for various data types and structures.

### store - State Management Utilities
Helper functions for Redux store management, action creators, and state selectors.

### string - String Manipulation
String utilities for formatting, parsing, validation, and transformation.

## Usage

```javascript
// Import specific modules
import { formatDate } from '@papillonbits/library/date';
import { sortByProperty } from '@papillonbits/library/sort';
import { debounce } from '@papillonbits/library/event';

// Use the utilities
const formattedDate = formatDate(new Date(), 'YYYY-MM-DD');
const sortedArray = sortByProperty(items, 'name');
const debouncedHandler = debounce(handleInput, 300);
```

```javascript
// Import from main entry point
import { date, sort, event } from '@papillonbits/library';

const formattedDate = date.formatDate(new Date());
const sortedItems = sort.sortByProperty(items, 'name');
```

## Features

- **Modular Design** - Import only what you need for optimal bundle size
- **Pure Functions** - Side-effect free, testable utilities
- **Well Typed** - PropTypes and JSDoc for type safety
- **Tree Shakeable** - Optimized for tree shaking
- **Well Tested** - Comprehensive test coverage
- **Zero Dependencies** - Lightweight with no external dependencies

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
- `build` - Transpile and build the package (ignores tests)

## Build Process

The build process:
1. Removes existing `build/` directory
2. Transpiles source with Babel
3. Copies files preserving structure
4. Ignores test files (`**/__tests__`)

## File Structure

```
packages/library/
├── src/
│   ├── a11y/
│   ├── array/
│   ├── auth/
│   ├── boolean/
│   ├── browser/
│   ├── date/
│   ├── event/
│   ├── hooks/
│   ├── number/
│   ├── object/
│   ├── pagination/
│   ├── sort/
│   ├── store/
│   └── string/
└── build/ (generated)
```

Each module directory contains:
- `index.js` - Module exports
- `*.js` - Implementation files
- `__tests__/` - Test files (not included in build)

## Testing

All utilities are tested with Jest:
```bash
# Run tests from root
npm run test

# Run tests in watch mode
npm run test:tdd
```

## Use Cases

### Date Formatting
```javascript
import { formatDate, parseDate } from '@papillonbits/library/date';

const formatted = formatDate(new Date(), 'MM/DD/YYYY');
const parsed = parseDate('2024-01-15', 'YYYY-MM-DD');
```

### Array Manipulation
```javascript
import { groupBy, unique } from '@papillonbits/library/array';

const grouped = groupBy(users, 'role');
const uniqueIds = unique(items.map(item => item.id));
```

### Event Handling
```javascript
import { debounce, throttle } from '@papillonbits/library/event';

const handleSearch = debounce((query) => {
  // Search logic
}, 300);

const handleScroll = throttle(() => {
  // Scroll logic
}, 100);
```

### React Hooks
```javascript
import { useLocalStorage, useDebounce } from '@papillonbits/library/hooks';

function MyComponent() {
  const [value, setValue] = useLocalStorage('key', 'default');
  const debouncedValue = useDebounce(value, 500);
  
  return <div>{debouncedValue}</div>;
}
```

## API Documentation

For detailed API documentation of each utility function, see the source files and tests in the repository.

## Links

- [Homepage](https://github.com/papillonbits/papillonbits/tree/master/packages/library)
- [Repository](https://github.com/papillonbits/papillonbits)
- [Issues](https://github.com/papillonbits/papillonbits/issues)

## Related Packages

- [@papillonbits/components](../components) - React components
- [@papillonbits/css](../css) - CSS styles
- [@papillonbits/setup](../setup) - Build configuration

## License

See root LICENSE file for details.

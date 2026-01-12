# @papillonbits/setup

Build configuration and development tooling for modern JavaScript applications.

[![npm version](https://img.shields.io/npm/v/@papillonbits/setup.svg)](https://www.npmjs.com/package/@papillonbits/setup)

## Overview

A collection of curated configurations for essential development tools including Babel, ESLint, Jest, Prettier, Storybook, Stylelint, and Webpack. Use these configurations to bootstrap your project with best practices.

## Installation

```bash
npm install @papillonbits/setup
```

## Configuration Modules

### babel - Babel Configuration
Transpilation configuration for modern JavaScript (ES6-ES16) to browser-compatible code.

**Features:**
- ES6+ to ES5 transpilation
- React JSX support
- Runtime helpers with @babel/runtime
- Module transformation
- Async/await support

**Usage:**
```javascript
// babel.config.js
module.exports = require('@papillonbits/setup/babel');
```

### eslint - ESLint Configuration
JavaScript and JSX linting rules based on Airbnb style guide with Prettier integration.

**Features:**
- Airbnb ESLint configuration
- React and JSX support
- Prettier integration
- Jest testing rules
- Import resolution

**Usage:**
```javascript
// .eslintrc.js
module.exports = require('@papillonbits/setup/eslint');
```

### jest - Jest Configuration
Testing framework configuration with React Testing Library and coverage reporting.

**Features:**
- React component testing
- Jest Axe accessibility testing
- Code coverage reporting
- Snapshot testing
- JSDOM environment
- Module mocking

**Usage:**
```javascript
// jest.config.js
module.exports = require('@papillonbits/setup/jest');
```

### prettier - Prettier Configuration
Code formatting rules for consistent code style.

**Features:**
- Automatic code formatting
- JavaScript, JSX, SCSS support
- Configurable rules
- Editor integration

**Usage:**
```javascript
// .prettierrc.js
module.exports = require('@papillonbits/setup/prettier');
```

### storybook - Storybook Configuration
Component development environment configuration.

**Features:**
- React component stories
- Webpack 5 integration
- SCSS/CSS support
- Addon integration (a11y, docs, themes)
- Multiple environment configs

**Usage:**
```javascript
// .storybook/main.js
module.exports = require('@papillonbits/setup/storybook');
```

### stylelint - Stylelint Configuration
CSS and SCSS linting with style enforcement.

**Features:**
- Standard CSS rules
- SCSS linting
- Property ordering
- Prettier integration
- Custom syntax support

**Usage:**
```javascript
// .stylelintrc.js
module.exports = require('@papillonbits/setup/stylelint');
```

### webpack - Webpack Configuration
Modern bundling configuration with optimizations for development and production.

**Features:**
- Webpack 5 configuration
- Development and production modes
- Hot Module Replacement (HMR)
- CSS extraction and minimization
- SVG and asset handling
- Code splitting
- Bundle analysis

**Usage:**
```javascript
// webpack.config.js
const config = require('@papillonbits/setup/webpack');
module.exports = config;
```

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
- `build` - Transpile and build configurations (ignores tests)

## Build Process

The build process:
1. Removes existing `build/` directory
2. Transpiles configurations with Babel
3. Copies configuration files preserving structure
4. Ignores test files (`**/__tests__`)

## Published Structure

When published, the package includes these directories at the root level:
```
@papillonbits/setup/
├── babel/
├── eslint/
├── jest/
├── prettier/
├── storybook/
├── stylelint/
└── webpack/
```

This allows direct imports: `@papillonbits/setup/babel`

## Tool Versions

This configuration package is tested with:
- **Babel** 7.28.x
- **ESLint** 8.57.x
- **Jest** 30.2.x
- **Prettier** 3.7.x
- **Storybook** 9.1.x
- **Stylelint** 16.26.x
- **Webpack** 5.104.x

## Extending Configurations

You can extend or override any configuration:

```javascript
// Custom babel.config.js
const baseConfig = require('@papillonbits/setup/babel');

module.exports = {
  ...baseConfig,
  plugins: [
    ...baseConfig.plugins,
    'my-custom-plugin'
  ]
};
```

```javascript
// Custom .eslintrc.js
module.exports = {
  extends: ['@papillonbits/setup/eslint'],
  rules: {
    'no-console': 'off' // Override specific rules
  }
};
```

## Integration Example

Complete project setup:

```json
{
  "scripts": {
    "build": "webpack --config node_modules/@papillonbits/setup/webpack",
    "lint": "eslint --config node_modules/@papillonbits/setup/eslint src/",
    "format": "prettier --config node_modules/@papillonbits/setup/prettier --write 'src/**/*.{js,jsx}'",
    "test": "jest --config node_modules/@papillonbits/setup/jest",
    "storybook": "storybook dev -c node_modules/@papillonbits/setup/storybook"
  }
}
```

## Features

- **Best Practices** - Industry-standard configurations
- **Consistent** - Unified tooling across projects
- **Extensible** - Easy to customize and override
- **Modern** - Latest tool versions and features
- **Maintained** - Regular updates and improvements

## Dependencies

Key development tools included:
- **Babel ecosystem** - Transpilation
- **ESLint & plugins** - Linting
- **Jest & Testing Library** - Testing
- **Prettier** - Formatting
- **Storybook** - Component development
- **Stylelint** - CSS linting
- **Webpack & loaders** - Bundling

## Use Cases

- Bootstrap new React projects
- Standardize tooling across a monorepo
- Share configurations between projects
- Maintain consistent code quality
- Simplify project setup

## Links

- [Homepage](https://github.com/papillonbits/papillonbits/tree/master/packages/setup)
- [Repository](https://github.com/papillonbits/papillonbits)
- [Issues](https://github.com/papillonbits/papillonbits/issues)

## Related Packages

- [@papillonbits/components](../components) - React components
- [@papillonbits/css](../css) - CSS styles
- [@papillonbits/library](../library) - Utility functions

## License

See root LICENSE file for details.

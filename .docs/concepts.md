# 📚 Concepts

> Sharing is caring. Following is a collection of concepts which any maintainer needs to master in order to gracefully maintain this project and scale its implementation along with its unit, integration and end-to-end tests.

## 📗 Application Architecture

> Flux based application architecture is applied using `redux`, `react-redux`, `redux-thunk` and `redux-logger`.

> Actions and thunks are dispatched to mutate application state in store.

<img src="image/flux-flow.png" alt="flux flow" />

> Components consume application state from store.

<img src="image/flux-component.png" alt="flux component" />

## 📗 Bootstrap

> Bootstrap is achieved using the following commands once having cloned this project:

- `npm run install-packages`
- `npm run bootstrap-release`

## 📗 Code Style

> Code style is applied using `husky` and `lint-staged` and consists of code linting, code formatting and file formatting.

### 📖&nbsp; Code Linting

> Code linting is applied using `eslint` for JavaScript and `stylelint` for Sass.

### 📖&nbsp; Code Formatting

> Code formatting is applied using `prettier` for both JavaScript and Sass.

### 📖&nbsp; File Formatting

> File formatting is applied using `editorconfig`.

## 📗 Compiling

> Compiling is applied using `babel` for transpiling and `webpack` for bundling.

## 📗 Component Design

> Component design is applied using a custom hook for each component.

## 📗 Component Driven Development

> Component driven development is applied using atomic design and uses the following [@papillonbits/components](https://papillonbits.github.io/papillonbits) for atoms and molecules.

### 📖&nbsp; Alert

- [Component](https://papillonbits.github.io/papillonbits/?path=/story/primer-molecule-alert), [Storybook](https://github.com/papillonbits/papillonbits/tree/master/packages/components/src/primer/Alert)

### 📖&nbsp; Dropdown

- [Component](https://papillonbits.github.io/papillonbits/?path=/story/primer-atom-dropdown), [Storybook](https://github.com/papillonbits/papillonbits/tree/master/packages/components/src/primer/Dropdown)

### 📖&nbsp; Form Input

- [Component](https://github.com/papillonbits/papillonbits/tree/master/packages/components/src/primer/Form/Input), [Storybook](https://papillonbits.github.io/papillonbits/?path=/story/primer-atom-form-input)

### 📖&nbsp; Grid FlexGrid

- [Component](https://github.com/papillonbits/papillonbits/tree/master/packages/components/src/primer/Grid/FlexGrid), [Storybook](https://papillonbits.github.io/papillonbits/?path=/story/primer-molecule-grid-flexgrid)

### 📖&nbsp; Label

- [Component](https://github.com/papillonbits/papillonbits/tree/master/packages/components/src/primer/Label), [Storybook](https://papillonbits.github.io/papillonbits/?path=/story/primer-atom-label)

### 📖&nbsp; Navigation TabNav

- [Component](https://github.com/papillonbits/papillonbits/tree/master/packages/components/src/primer/Navigation/TabNav), [Storybook](https://papillonbits.github.io/papillonbits/?path=/story/primer-molecule-navigation-tabnav)

### 📖&nbsp; Pagination PreviousNext

- [Component](https://github.com/papillonbits/papillonbits/tree/master/packages/components/src/primer/Pagination/PreviousNext), [Storybook](https://papillonbits.github.io/papillonbits/?path=/story/primer-atom-pagination-previousnext)

### 📖&nbsp; Subhead

- [Component](https://github.com/papillonbits/papillonbits/tree/master/packages/components/src/primer/Subhead), [Storybook](https://papillonbits.github.io/papillonbits/?path=/story/primer-atom-subhead)

## 📗 CSS Architecture

> CSS architecture is applied using [@papillonbits/css](https://github.com/papillonbits/papillonbits/tree/master/packages/css/src/primer) design tokens and CSS scoping is adressed using `CSS Modules` configured in `webpack` setup.

## 📗 Library

> Library is applied using [@papillonbits/library](https://github.com/papillonbits/papillonbits/tree/master/packages/library/src) for leveraging common generic functionality.

## 📗 Setup

> Setup is applied using [@papillonbits/setup](https://github.com/papillonbits/papillonbits/tree/master/packages/setup/src) to setup `babel`, `eslint`, `jest`, `prettier`, `storybook`, `stylelint` and `webpack`.

## 📗 Local Development

> Local development is achieved using the following commands once having bootstrapped this project:

- Starting
  - Run the following command in ❗️`packages/core`❗️ folder
    - `npm start`
- Linting and formatting
  - Run the following command in `root` folder
    - `npm run lint:format`
- Testing
  - Unit and integration testing (using `jest` snapshots)
    - Run the following commands in `root` folder
      - `npm run test`
      - `npm run test:tdd`
  - Integration testing (using `storybook` stories)
    - Run the following command in `root` folder
      - `npm run start-storybook`
  - Report coverage
    - Run the following command in `root` folder
      - `npm run report-coverage`

## 📗 Microsite

> Microsite is applied using `lerna`, `webpack` and `babel`.

## 📗 Monorepo

> Monorepo is applied using `lerna`.

## 📗 Rendering

> Rendering is applied using `react`, `react-dom/client` for client side and `react-dom/server` for server side.

## 📗 Routing

> Routing is applied using `react-router`, `react-router-dom` for client side and `react-router-dom/server` for server side routing.

## 📗 Testing

> Testing is applied using `jest`, `@testing-library/react`, `storybook` and `codecov`.

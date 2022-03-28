#!/bin/bash

npm un -S @primer/primitives classnames prop-types react react-dom react-redux react-router react-router-dom redux redux-logger redux-mock-store redux-thunk uuid whatwg-fetch

npm un -D @babel/cli @babel/core @babel/eslint-parser @babel/plugin-proposal-class-properties @babel/plugin-proposal-nullish-coalescing-operator @babel/plugin-proposal-object-rest-spread @babel/plugin-proposal-optional-catch-binding @babel/plugin-proposal-optional-chaining @babel/plugin-syntax-dynamic-import @babel/plugin-transform-classes @babel/plugin-transform-react-jsx @babel/plugin-transform-runtime @babel/plugin-transform-spread @babel/preset-env @babel/preset-react @babel/register @babel/runtime @svgr/webpack @wojtekmaj/enzyme-adapter-react-17 babel-core@^7.0.0-bridge.0 babel-jest babel-loader babel-plugin-css-modules-transform babel-plugin-syntax-async-functions babel-plugin-transform-assets codecov enzyme eslint eslint-config-airbnb eslint-config-prettier eslint-import-resolver-alias eslint-plugin-import eslint-plugin-jest eslint-plugin-jsx-a11y eslint-plugin-prettier eslint-plugin-react eslint-plugin-react-hooks gh-pages husky identity-obj-proxy jest jest-axe jest-enzyme jsdom jsdom-global lerna lint-staged npm-run-all postcss-scss prettier react-test-renderer regenerator-runtime stylelint stylelint-config-prettier stylelint-config-standard stylelint-order stylelint-prettier stylelint-scss

npm i -S @primer/primitives classnames prop-types react react-dom react-redux react-router react-router-dom redux redux-logger redux-mock-store redux-thunk uuid whatwg-fetch

npm i -D @babel/cli @babel/core @babel/eslint-parser @babel/plugin-proposal-class-properties @babel/plugin-proposal-nullish-coalescing-operator @babel/plugin-proposal-object-rest-spread @babel/plugin-proposal-optional-catch-binding @babel/plugin-proposal-optional-chaining @babel/plugin-syntax-dynamic-import @babel/plugin-transform-classes @babel/plugin-transform-react-jsx @babel/plugin-transform-runtime @babel/plugin-transform-spread @babel/preset-env @babel/preset-react @babel/register @babel/runtime @svgr/webpack @wojtekmaj/enzyme-adapter-react-17 babel-core@^7.0.0-bridge.0 babel-jest babel-loader babel-plugin-css-modules-transform babel-plugin-syntax-async-functions babel-plugin-transform-assets codecov enzyme eslint eslint-config-airbnb eslint-config-prettier eslint-import-resolver-alias eslint-plugin-import eslint-plugin-jest eslint-plugin-jsx-a11y eslint-plugin-prettier eslint-plugin-react eslint-plugin-react-hooks gh-pages husky identity-obj-proxy jest jest-axe jest-enzyme jsdom jsdom-global lerna lint-staged npm-run-all postcss-scss prettier react-test-renderer regenerator-runtime stylelint stylelint-config-prettier stylelint-config-standard stylelint-order stylelint-prettier stylelint-scss

npm run clean-up && npm run install-packages && npm run bootstrap-release && npm audit fix

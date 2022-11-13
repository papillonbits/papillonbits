#!/bin/bash

npm un -S @axe-core/react @papillonbits/components @papillonbits/library @papillonbits/setup @primer/primitives classnames clean-webpack-plugin copy-webpack-plugin css-minimizer-webpack-plugin dotenv-webpack html-webpack-plugin mini-css-extract-plugin prop-types react react-dom react-redux react-router react-router-dom redux redux-logger redux-mock-store redux-thunk uuid webpack webpack-bundle-analyzer webpack-manifest-plugin whatwg-fetch

npm un -D @babel/cli @babel/core @babel/eslint-parser @babel/plugin-proposal-class-properties @babel/plugin-proposal-nullish-coalescing-operator @babel/plugin-proposal-object-rest-spread @babel/plugin-proposal-optional-catch-binding @babel/plugin-proposal-optional-chaining @babel/plugin-syntax-dynamic-import @babel/plugin-transform-classes @babel/plugin-transform-react-jsx @babel/plugin-transform-runtime @babel/plugin-transform-spread @babel/preset-env @babel/preset-react @babel/register @babel/runtime @storybook/addon-a11y @storybook/addon-actions @storybook/addon-backgrounds @storybook/addon-controls @storybook/addon-docs @storybook/addon-jest @storybook/addon-postcss @storybook/addon-storysource @storybook/addon-viewport @storybook/addons @storybook/builder-webpack5 @storybook/manager-webpack5 @storybook/preset-scss @storybook/react @storybook/source-loader @storybook/theming @svgr/webpack @testing-library/react autoprefixer babel-core babel-jest babel-loader babel-plugin-css-modules-transform babel-plugin-syntax-async-functions babel-plugin-transform-assets css-loader dotenv-cli eslint eslint-config-airbnb eslint-config-prettier eslint-import-resolver-alias eslint-plugin-import eslint-plugin-jest eslint-plugin-jsx-a11y eslint-plugin-prettier eslint-plugin-react eslint-plugin-react-hooks gh-pages husky identity-obj-proxy jest jest-axe jsdom jsdom-global lerna lint-staged npm-run-all postcss postcss-loader postcss-nested postcss-preset-env postcss-scss prettier regenerator-runtime sass sass-loader style-loader stylelint stylelint-config-prettier stylelint-config-standard stylelint-order stylelint-prettier stylelint-scss webpack-merge

npm i -S @axe-core/react @papillonbits/components @papillonbits/library @papillonbits/setup @primer/primitives classnames clean-webpack-plugin copy-webpack-plugin css-minimizer-webpack-plugin dotenv-webpack html-webpack-plugin mini-css-extract-plugin prop-types react react-dom react-redux react-router react-router-dom redux redux-logger redux-mock-store redux-thunk uuid webpack webpack-bundle-analyzer webpack-manifest-plugin whatwg-fetch

npm i -D @babel/cli @babel/core @babel/eslint-parser @babel/plugin-proposal-class-properties @babel/plugin-proposal-nullish-coalescing-operator @babel/plugin-proposal-object-rest-spread @babel/plugin-proposal-optional-catch-binding @babel/plugin-proposal-optional-chaining @babel/plugin-syntax-dynamic-import @babel/plugin-transform-classes @babel/plugin-transform-react-jsx @babel/plugin-transform-runtime @babel/plugin-transform-spread @babel/preset-env @babel/preset-react @babel/register @babel/runtime @storybook/addon-a11y @storybook/addon-actions @storybook/addon-backgrounds @storybook/addon-controls @storybook/addon-docs @storybook/addon-jest @storybook/addon-postcss @storybook/addon-storysource @storybook/addon-viewport @storybook/addons @storybook/builder-webpack5 @storybook/manager-webpack5 @storybook/preset-scss @storybook/react @storybook/source-loader @storybook/theming @svgr/webpack @testing-library/react autoprefixer babel-core@^7.0.0-bridge.0 babel-jest babel-loader babel-plugin-css-modules-transform babel-plugin-syntax-async-functions babel-plugin-transform-assets css-loader dotenv-cli eslint eslint-config-airbnb eslint-config-prettier eslint-import-resolver-alias eslint-plugin-import eslint-plugin-jest eslint-plugin-jsx-a11y eslint-plugin-prettier eslint-plugin-react eslint-plugin-react-hooks gh-pages husky identity-obj-proxy jest jest-axe jsdom jsdom-global lerna lint-staged npm-run-all postcss postcss-loader postcss-nested postcss-preset-env postcss-scss prettier regenerator-runtime sass sass-loader style-loader stylelint stylelint-config-prettier stylelint-config-standard stylelint-order stylelint-prettier stylelint-scss webpack-merge

npm run clean-up && npm run install-packages && npm run bootstrap-release

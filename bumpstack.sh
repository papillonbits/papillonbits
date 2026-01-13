#!/bin/bash

# Uninstall production dependencies
npm un -S \
  @axe-core/react \
  @papillonbits/components \
  @papillonbits/css \
  @papillonbits/library \
  @papillonbits/setup \
  @primer/primitives \
  @primer/view-components \
  classnames \
  clean-webpack-plugin \
  copy-webpack-plugin \
  css-minimizer-webpack-plugin \
  dotenv-webpack \
  html-webpack-plugin \
  mini-css-extract-plugin \
  prop-types \
  react \
  react-dom \
  react-redux \
  react-router \
  react-router-dom \
  redux \
  redux-logger \
  redux-mock-store \
  redux-thunk \
  uuid \
  whatwg-fetch

# Uninstall development dependencies
npm un -D \
  @babel/cli \
  @babel/core \
  @babel/eslint-parser \
  @babel/plugin-transform-react-jsx \
  @babel/plugin-transform-runtime \
  @babel/preset-env \
  @babel/preset-react \
  @babel/register \
  @babel/runtime \
  @chromatic-com/storybook \
  @storybook/addon-a11y \
  @storybook/addon-docs \
  @storybook/addon-jest \
  @storybook/addon-links \
  @storybook/addon-styling-webpack \
  @storybook/addon-themes \
  @storybook/react-webpack5 \
  @svgr/webpack \
  @testing-library/dom @testing-library/react \
  ajv \
  autoprefixer \
  babel-core \
  babel-jest \
  babel-loader \
  babel-plugin-css-modules-transform \
  babel-plugin-syntax-async-functions \
  babel-plugin-transform-assets \
  css-loader \
  dotenv-cli \
  eslint \
  eslint-config-airbnb \
  eslint-config-prettier \
  eslint-import-resolver-alias \
  eslint-plugin-import \
  eslint-plugin-jest \
  eslint-plugin-jsx-a11y \
  eslint-plugin-prettier \
  eslint-plugin-react \
  eslint-plugin-react-hooks \
  gh-pages \
  husky \
  identity-obj-proxy \
  jest \
  jest-axe \
  jsdom \
  jsdom-global \
  lerna \
  lint-staged \
  npm-run-all \
  path \
  postcss \
  postcss-loader \
  postcss-nested \
  postcss-preset-env \
  postcss-scss \
  prettier \
  process \
  regenerator-runtime \
  sass \
  sass-loader \
  storybook \
  style-loader \
  stylelint \
  stylelint-config-standard \
  stylelint-order \
  stylelint-prettier \
  stylelint-scss \
  tty-browserify \
  webpack \
  webpack-bundle-analyzer \
  webpack-manifest-plugin \
  webpack-merge

# Reinstall production dependencies
npm i -S \
  @axe-core/react \
  @papillonbits/components \
  @papillonbits/css \
  @papillonbits/library \
  @papillonbits/setup \
  @primer/primitives \
  @primer/view-components \
  classnames \
  clean-webpack-plugin \
  copy-webpack-plugin \
  css-minimizer-webpack-plugin \
  dotenv-webpack \
  html-webpack-plugin \
  mini-css-extract-plugin \
  prop-types \
  react \
  react-dom \
  react-redux \
  react-router \
  react-router-dom \
  redux \
  redux-logger \
  redux-mock-store \
  redux-thunk \
  uuid \
  whatwg-fetch

# Reinstall development dependencies with compatible versions
npm i -D \
  @babel/cli \
  @babel/core \
  @babel/eslint-parser \
  @babel/plugin-transform-react-jsx \
  @babel/plugin-transform-runtime \
  @babel/preset-env \
  @babel/preset-react \
  @babel/register \
  @babel/runtime \
  @chromatic-com/storybook@^4.1.3 \
  @storybook/addon-a11y@^9.1.17 \
  @storybook/addon-docs@^9.1.17 \
  @storybook/addon-jest \
  @storybook/addon-links@^9.1.17 \
  @storybook/addon-styling-webpack@^2.0.0 \
  @storybook/addon-themes@^9.1.17 \
  @storybook/react-webpack5@^9.1.17 \
  @svgr/webpack \
  @testing-library/dom @testing-library/react \
  ajv \
  autoprefixer \
  babel-core@^7.0.0-bridge.0 \
  babel-jest \
  babel-loader \
  babel-plugin-css-modules-transform \
  babel-plugin-syntax-async-functions \
  babel-plugin-transform-assets \
  css-loader \
  dotenv-cli \
  eslint@^8.57.1 \
  eslint-config-airbnb \
  eslint-config-prettier \
  eslint-import-resolver-alias \
  eslint-plugin-import \
  eslint-plugin-jest \
  eslint-plugin-jsx-a11y \
  eslint-plugin-prettier \
  eslint-plugin-react \
  eslint-plugin-react-hooks \
  gh-pages \
  husky \
  identity-obj-proxy \
  jest \
  jest-axe \
  jsdom \
  jsdom-global \
  lerna \
  lint-staged \
  npm-run-all \
  path \
  postcss \
  postcss-loader \
  postcss-nested \
  postcss-preset-env \
  postcss-scss \
  prettier \
  process \
  regenerator-runtime \
  sass \
  sass-loader \
  storybook@^9.1.17 \
  style-loader \
  stylelint \
  stylelint-config-standard \
  stylelint-order \
  stylelint-prettier \
  stylelint-scss \
  tty-browserify \
  webpack \
  webpack-bundle-analyzer \
  webpack-manifest-plugin \
  webpack-merge

# Run cleanup and bootstrap
npm run clean-up && \
npm run install-packages && \
npm run bootstrap-release

/* eslint-disable global-require */
// https://github.com/babel/babel-loader

import { targetBrowsers } from '../constant'

export function getBabelLoaderAdvancedSetup() {
  return {
    test: /\.(js|jsx)$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
      options: {
        presets: [
          [
            '@babel/preset-env',
            {
              // https://jestjs.io/docs/ecmascript-modules#require-of-esm
              // https://babeljs.io/docs/babel-preset-env#modules
              // Jest requires CommonJS to `require()` transformed files; webpack needs ES
              // modules preserved for tree-shaking. https://jestjs.io/docs/ecmascript-modules
              modules: process.env.NODE_ENV === 'test' ? 'commonjs' : false,
              targets: { browsers: Object.values(targetBrowsers.modernBrowsers) },
            },
          ],
          '@babel/preset-react',
        ],
        plugins: [
          [
            '@babel/plugin-transform-react-jsx',
            {
              runtime: 'automatic',
            },
          ],
          '@babel/plugin-transform-runtime',
          'syntax-async-functions',
          ['polyfill-corejs3', { method: 'usage-global', version: require('core-js/package.json').version }],
        ],
      },
    },
  }
}

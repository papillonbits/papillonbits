/* eslint-disable global-require */
const { targetBrowsers } = require('../webpack/constant')

module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        modules: false,
        // useBuiltIns: 'entry',
        // corejs: coreJSVersion,
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
}

// https://github.com/babel/babel-loader

import { coreJSVersion, targetBrowsers } from '../constant'

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
              modules: false,
              useBuiltIns: 'entry',
              corejs: coreJSVersion,
              targets: { browsers: Object.values(targetBrowsers.modernBrowsers) },
            },
          ],
          '@babel/preset-react',
        ],
        plugins: [
          '@babel/plugin-proposal-class-properties',
          '@babel/plugin-proposal-nullish-coalescing-operator',
          '@babel/plugin-proposal-object-rest-spread',
          '@babel/plugin-proposal-optional-catch-binding',
          '@babel/plugin-proposal-optional-chaining',
          '@babel/plugin-syntax-dynamic-import',
          '@babel/plugin-transform-classes',
          [
            '@babel/plugin-transform-react-jsx',
            {
              runtime: 'automatic',
            },
          ],
          '@babel/plugin-transform-runtime',
          '@babel/plugin-transform-spread',
          'syntax-async-functions',
        ],
      },
    },
  }
}

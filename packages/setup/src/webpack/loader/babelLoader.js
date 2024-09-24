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
          [
            '@babel/plugin-transform-react-jsx',
            {
              runtime: 'automatic',
            },
          ],
          '@babel/plugin-transform-runtime',
          'syntax-async-functions',
        ],
      },
    },
  }
}

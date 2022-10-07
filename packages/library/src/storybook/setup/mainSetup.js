/* eslint-disable no-restricted-syntax */
/* eslint-disable vars-on-top */
/* eslint-disable no-var */
/* eslint-disable no-prototype-builtins */
/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
/* eslint-disable global-require */

import createCompiler from '@storybook/addon-docs/mdx-compiler-plugin'

function isEmptyObject(obj) {
  for (var prop in obj) {
    if (obj.hasOwnProperty(prop)) return false
  }

  return true
}

export function getStorybookMainSetup({ storiesBasePath, includeBasePath, modulesBasePath }) {
  return {
    stories: [storiesBasePath],
    addons: [
      '@storybook/addon-a11y',
      '@storybook/addon-actions',
      '@storybook/addon-backgrounds',
      {
        name: '@storybook/addon-docs',
        options: {
          configureJSX: true,
          babelOptions: {},
          sourceLoaderOptions: {
            injectStoryParameters: false,
          },
        },
      },
      '@storybook/addon-controls',
      '@storybook/addon-jest',
      {
        name: '@storybook/addon-storysource',
        options: {
          rule: {
            test: [/\.int.story\.js?$/],
            include: [includeBasePath],
          },
          loaderOptions: {
            prettierConfig: {
              tabWidth: 2,
              semi: false,
              singleQuote: true,
              printWidth: 140,
              trailingComma: 'all',
            },
          },
        },
      },
      '@storybook/addon-viewport',
      // fails with @storybook/addon-postcss v3.0.0-alpha.1
      // '@storybook/addon-postcss',
      // {
      //   name: '@storybook/addon-postcss',
      //   options: {
      //     postcssLoaderOptions: {
      //       implementation: require('postcss'),
      //     },
      //   },
      // },
    ],
    framework: '@storybook/react',
    core: {
      builder: 'webpack5',
    },
    webpackFinal: async (config, { configType }) => {
      // to be activated when storybook catches up with react/babel new jsx transform
      // https://reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html
      // const babelLoaderRule = config.module.rules.find((rule) => rule.test.test && rule.test.test('.jsx'))
      // babelLoaderRule.use[0].options.presets = babelLoaderRule.use[0].options.presets.map((preset) => {
      //   return preset === path.resolve(__dirname, '../node_modules/@babel/preset-react/lib/index.js')
      //     ? [
      //         path.resolve(__dirname, '../node_modules/@babel/preset-react/lib/index.js'),
      //         {
      //           runtime: 'automatic',
      //         },
      //       ]
      //     : preset
      // })

      const fileLoaderRuleSVG = config.module.rules.find((rule) => !isEmptyObject(rule) && rule.test.test && rule.test.test('.svg'))
      fileLoaderRuleSVG.exclude = /\.svg$/

      // const fileLoaderRuleJSX = config.module.rules.find((rule) => !isEmptyObject(rule) && rule.test.test && rule.test.test('.jsx'))
      // fileLoaderRuleJSX.use[0].options.plugins.push(
      //   path.resolve(__dirname, '../node_modules/@babel/plugin-transform-modules-commonjs/lib/index.js'),
      // )

      // fileLoaderRuleJSX.use[0].options.plugins.push(
      //   path.resolve(__dirname, '../node_modules/babel-plugin-syntax-async-functions/lib/index.js'),
      // )

      config.module.rules = config.module.rules.concat([
        {
          test: /\.(css|scss)$/,
          use: [
            {
              loader: 'style-loader',
            },
            {
              loader: 'css-loader',
              options: {
                importLoaders: 2,
                sourceMap: true,
                modules: {
                  localIdentName: '[name]__[local]___[hash:base64:5]',
                },
              },
            },
            {
              loader: 'postcss-loader',
              options: {
                postcssOptions: {
                  sourceMap: true,
                  plugins: () => [require('postcss-preset-env')()],
                  parser: 'postcss-scss',
                },
              },
            },
            {
              loader: 'sass-loader',
              options: {
                sassOptions: {
                  includePaths: [modulesBasePath],
                },
              },
            },
          ],
        },
        {
          test: /\.svg$/i,
          issuer: /\.[jt]sx?$/,
          use: ['@svgr/webpack'],
        },
        {
          test: /\.int.story\.mdx$/,
          use: [
            {
              loader: 'babel-loader',
              options: {
                plugins: ['@babel/plugin-transform-react-jsx'],
              },
            },
            {
              loader: '@mdx-js/loader',
              options: {
                compilers: [createCompiler({})],
              },
            },
          ],
        },
        {
          test: /\.int.story\.jsx?$/,
          loader: require.resolve('@storybook/source-loader'),
          exclude: [/node_modules/],
          enforce: 'pre',
        },
      ])

      return config
    },
  }
}

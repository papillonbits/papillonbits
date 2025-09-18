/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
/* eslint-disable global-require */
import webpack from 'webpack'
import { isEmptyObject } from '@papillonbits/library/object'
import { getBabelLoaderAdvancedSetup } from '@papillonbits/setup/webpack'

export function getStorybookMainSetup({ storiesBasePath, includeBasePath, modulesBasePath, rootAttributesDefaults }) {
  // https://storybook.js.org/docs/react/api/main-config
  return {
    // https://storybook.js.org/docs/api/main-config/main-config-preview-body
    previewBody: (body) => {
      if (rootAttributesDefaults) {
        // https://github.com/storybookjs/storybook/issues/24429
        return `
          ${body}
          <script type="text/javascript">
          (() => {
            document.addEventListener('DOMContentLoaded', function() {
              const storybookRootElement = document.getElementById("storybook-root")

              // https://primer.style/foundations/primitives/getting-started
              storybookRootElement.setAttribute("data-color-mode", "light")
              storybookRootElement.setAttribute("data-light-theme", "light")
              storybookRootElement.setAttribute("data-dark-theme", "dark")
            });
          })()
          </script>
        `
      }
      return `${body}`
    },
    // https://storybook.js.org/docs/react/configure/frameworks
    framework: {
      name: '@storybook/react-webpack5',
      options: {
        fastRefresh: false,
        strictMode: false,
        legacyRootApi: false,
      },
    },

    // https://storybook.js.org/docs/react/api/main-config-stories
    stories: [storiesBasePath],

    // https://storybook.js.org/docs/react/api/main-config-addons
    // https://storybook.js.org/docs/react/addons/introduction
    // https://storybook.js.org/integrations
    addons: [
      // https://storybook.js.org/addons/@storybook/addon-a11y
      '@storybook/addon-a11y',

      // included by default in @storybook/addon-essentials
      // https://storybook.js.org/docs/react/essentials/actions
      // https://storybook.js.org/addons/@storybook/addon-actions
      // '@storybook/addon-actions',

      // included by default in @storybook/addon-essentials
      // https://storybook.js.org/docs/react/essentials/backgrounds
      // https://storybook.js.org/addons/@storybook/addon-backgrounds
      // '@storybook/addon-backgrounds',

      // https://storybook.js.org/addons/chromatic
      // chromatic

      // included by default in @storybook/addon-essentials
      // https://storybook.js.org/docs/react/essentials/controls
      // https://storybook.js.org/addons/@storybook/addon-controls
      // '@storybook/addon-controls',

      // https://storybook.js.org/addons/storybook-addon-designs
      // storybook-addon-designs

      // included by default in @storybook/addon-essentials
      // https://storybook.js.org/docs/react/essentials/docs (404)
      // https://storybook.js.org/addons/@storybook/addon-docs
      // {
      //   name: '@storybook/addon-docs',
      //   options: {
      //     jsxOptions: {},
      //     csfPluginOptions: null,
      //     mdxPluginOptions: {},
      //     transcludeMarkdown: true,
      //   },
      // },

      // https://storybook.js.org/docs/react/essentials/introduction
      // https://storybook.js.org/integrations/tag/essentials
      '@storybook/addon-essentials',

      // included by default in @storybook/addon-essentials
      // https://storybook.js.org/docs/react/essentials/highlight (404)
      // https://storybook.js.org/addons/@storybook/addon-highlight
      // '@storybook/addon-highlight',

      // https://storybook.js.org/addons/@storybook/addon-interactions
      // '@storybook/addon-interactions',

      // https://storybook.js.org/addons/@storybook/addon-jest
      '@storybook/addon-jest',

      // https://storybook.js.org/addons/@storybook/addon-links
      '@storybook/addon-links',

      // https://storybook.js.org/addons/msw-storybook-addon
      // msw-storybook-addon

      // included by default in @storybook/addon-essentials
      // https://storybook.js.org/docs/react/essentials/measure-and-outline
      // https://storybook.js.org/addons/@storybook/addon-measure
      // https://storybook.js.org/addons/@storybook/addon-outline
      // '@storybook/addon-measure',
      // '@storybook/addon-outline',

      // included by default in @storybook/addon-essentials
      // https://storybook.js.org/docs/react/essentials/toolbars-and-globals
      // https://storybook.js.org/addons/@storybook/addon-toolbars
      // '@storybook/addon-toolbars',

      // included by default in @storybook/addon-essentials
      // https://storybook.js.org/docs/react/essentials/viewport
      // https://storybook.js.org/addons/@storybook/addon-viewport
      // '@storybook/addon-viewport',

      '@chromatic-com/storybook',

      // https://storybook.js.org/addons/@storybook/addon-styling-webpack
      '@storybook/addon-styling-webpack',

      // https://storybook.js.org/addons/@storybook/addon-themes
      '@storybook/addon-themes',
    ],

    // https://storybook.js.org/docs/react/api/main-config-babel
    // ...

    // https://storybook.js.org/docs/react/api/main-config-babel-default
    // ...

    // https://storybook.js.org/docs/react/api/main-config-core
    core: { builder: { name: '@storybook/builder-webpack5' } },

    // https://storybook.js.org/docs/react/api/main-config-docs
    // https://storybook.js.org/docs/react/writing-docs/autodocs
    // https://storybook.js.org/docs/react/writing-docs/mdx
    docs: { autodocs: true, defaultName: 'Documentation', docsMode: false },

    // https://storybook.js.org/docs/react/api/main-config-env
    // ...

    // https://storybook.js.org/docs/react/api/main-config-features
    // ...

    // https://storybook.js.org/docs/react/api/main-config-log-level
    logLevel: { logLevel: 'debug' },

    // https://storybook.js.org/docs/react/api/main-config-manager-head
    // ...

    // https://storybook.js.org/docs/react/api/main-config-preview-annotations
    // ...

    // https://storybook.js.org/docs/react/api/main-config-preview-body
    // ...

    // https://storybook.js.org/docs/react/api/main-config-preview-head
    // ...

    // https://storybook.js.org/docs/react/api/main-config-refs
    // ...

    // https://storybook.js.org/docs/react/api/main-config-static-dirs
    // ...

    // https://storybook.js.org/docs/react/api/main-config-typescript
    // ...

    // https://storybook.js.org/docs/react/api/main-config-webpack-final
    webpackFinal: async (config, { configType }) => {
      const fileLoaderRuleSVG = config.module.rules.find((rule) => !isEmptyObject(rule) && rule.test.test && rule.test.test('.svg'))
      fileLoaderRuleSVG.exclude = /\.svg$/

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
                  /* https://webpack.js.org/loaders/css-loader/#exportlocalsconvention */
                  exportLocalsConvention: 'as-is',
                },
                /* https://stackoverflow.com/questions/78589664/style-loader-does-not-recoginize-default-imports-of-css-modules-in-storybooks */
                esModule: false,
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
              options: {},
            },
          ],
        },
        getBabelLoaderAdvancedSetup(),
      ])
      config.plugins.push(
        new webpack.ProvidePlugin({
          process: 'process/browser',
        }),
      )
      return config
    },
    typescript: {
      reactDocgen: 'react-docgen-typescript',
    },
  }
}

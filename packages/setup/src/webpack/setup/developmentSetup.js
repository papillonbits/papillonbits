import { merge } from 'webpack-merge'
import { getCSSLoaderStandardSetup } from '../loader/cssLoader'
import { getPostCSSLoaderStandardSetup } from '../loader/postCSSLoader'
import { getSassLoaderStandardSetup } from '../loader/sassLoader'
import { getDotenvWebpackStandardSetup } from '../plugin/dotenvWebpack'
import { getHotModuleReplacementPluginStandardSetup } from '../plugin/hotModuleReplacementPlugin'
import { getDevServerStandardSetup } from '../server/devServer'

export function getWebpackDevelopmentSetup({
  webpackCommonSetup,
  environmentVariablesFilePath,
  micrositeUrlPath,
  micrositeFolderPaths,
  includedSourceFilePaths,
}) {
  return merge([
    webpackCommonSetup,
    {
      mode: 'development',
      devtool: 'inline-source-map',
      devServer: getDevServerStandardSetup(),
      output: { path: micrositeFolderPaths.build, publicPath: micrositeUrlPath, filename: '[name].bundle.js' },
      optimization: {
        concatenateModules: true,
      },
      plugins: [getDotenvWebpackStandardSetup({ path: environmentVariablesFilePath }), getHotModuleReplacementPluginStandardSetup()],
      module: {
        rules: [
          {
            test: /\.s[ac]ss$/i,
            include: includedSourceFilePaths,
            use: [
              'style-loader',
              getCSSLoaderStandardSetup({
                sourceMap: false,
                modules: {
                  localIdentName: '[name]_[local]_[hash:base64:5]',
                  /* https://webpack.js.org/loaders/css-loader/#exportlocalsconvention */
                  exportLocalsConvention: 'as-is',
                },
                /* https://stackoverflow.com/questions/78589664/style-loader-does-not-recoginize-default-imports-of-css-modules-in-storybooks */
                esModule: false,
              }),
              getPostCSSLoaderStandardSetup(),
              getSassLoaderStandardSetup({ includedSourceFilePaths }),
            ],
          },
        ],
      },
    },
  ])
}

import { merge } from 'webpack-merge'
import { getCSSLoaderStandardSetup } from '../loader/cssLoader'
import { getBannerPluginStandardSetup } from '../plugin/bannerPlugin'
import { getCSSMinimizerWebpackPluginStandardSetup } from '../plugin/cssMinimizerWebpackPlugin'
import { getDotenvWebpackStandardSetup } from '../plugin/dotenvWebpack'
import { MiniCSSExtractPluginLoader, getMiniCSSExtractPluginAdvancedSetup } from '../plugin/miniCSSExtractPlugin'
import { getWebpackBundleAnalyzerStandardSetup } from '../plugin/webpackBundleAnalyzer'

export function getWebpackProductionSetup({
  webpackCommonSetup,
  environmentVariablesFilePath,
  micrositeUrlPath,
  micrositeFolderPaths,
  packageJSON,
}) {
  return merge([
    webpackCommonSetup,
    {
      mode: 'production',
      devtool: false,
      output: {
        path: micrositeFolderPaths.build,
        publicPath: micrositeUrlPath,
        filename: 'js/[name].[contenthash].bundle.js',
      },
      performance: {
        hints: false,
        maxEntrypointSize: 512000,
        maxAssetSize: 512000,
      },
      optimization: {
        minimize: true,
        minimizer: [getCSSMinimizerWebpackPluginStandardSetup(), '...'],
        runtimeChunk: { name: 'runtime' },
      },
      plugins: [
        getBannerPluginStandardSetup(packageJSON),
        getDotenvWebpackStandardSetup({ path: environmentVariablesFilePath }),
        getMiniCSSExtractPluginAdvancedSetup(),
        getWebpackBundleAnalyzerStandardSetup(),
      ],
      module: {
        rules: [
          {
            test: /\.(sass|scss|css)$/,
            use: [
              MiniCSSExtractPluginLoader,
              getCSSLoaderStandardSetup({ sourceMap: false, modules: { localIdentName: '[name]_[local]_[hash:base64:5]' } }),
              'postcss-loader',
              'sass-loader',
            ],
          },
        ],
      },
    },
  ])
}

import { getCSSLoaderStandardSetup } from '../loader/cssLoader'
import { getPostCSSLoaderStandardSetup } from '../loader/postCSSLoader'
import { getSassLoaderStandardSetup } from '../loader/sassLoader'
import { getDotenvWebpackStandardSetup } from '../plugin/dotenvWebpack'
import { getHotModuleReplacementPluginStandardSetup } from '../plugin/hotModuleReplacementPlugin'
import { getDevServerStandardSetup } from '../server/devServer'

export function getWebpackDevelopmentSetup({
  environmentVariablesFilePath,
  micrositeUrlPath,
  micrositeFolderPaths,
  includedSourceFilePaths,
}) {
  return {
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
            getCSSLoaderStandardSetup({ sourceMap: false, modules: { localIdentName: '[name]_[local]_[hash:base64:5]' } }),
            getPostCSSLoaderStandardSetup(),
            getSassLoaderStandardSetup({ includedSourceFilePaths }),
          ],
        },
      ],
    },
  }
}

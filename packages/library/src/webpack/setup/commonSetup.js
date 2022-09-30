import { getBabelLoaderAdvancedSetup } from '../loader/babelLoader'
import { getFontLoaderStandardSetup } from '../loader/fontLoader'
import { getImageLoaderStandardSetup } from '../loader/imageLoader'
import { getSVGRLoaderAdvancedSetup } from '../loader/svgrLoader'
import { getMarkdownLoaderStandardSetup } from '../loader/markdownLoader'
import { getCleanWebpackPluginStandardSetup } from '../plugin/cleanWebpackPlugin'
import { getCopyWebpackPluginStandardSetup } from '../plugin/copyWebpackPlugin'
import { getHtmlWebpackPluginStandardSetup } from '../plugin/htmlWebpackPlugin'
import { getWebpackManifestPluginStandardSetup } from '../plugin/webpackManifestPlugin'
import { extensions } from '../constant'

export function getWebpackCommonSetup({ micrositeFolderPaths, packageJSON }) {
  return {
    entry: [`${micrositeFolderPaths.src}/index.js`],
    plugins: [
      getCleanWebpackPluginStandardSetup(),
      getCopyWebpackPluginStandardSetup({ from: micrositeFolderPaths.public, to: 'assets' }),
      getHtmlWebpackPluginStandardSetup({ title: packageJSON.description, micrositeWebpackFolderPath: micrositeFolderPaths.webpack }),
      getWebpackManifestPluginStandardSetup(),
    ],
    module: {
      rules: [
        getBabelLoaderAdvancedSetup(),
        getFontLoaderStandardSetup(),
        getImageLoaderStandardSetup(),
        getMarkdownLoaderStandardSetup(),
        getSVGRLoaderAdvancedSetup(),
      ],
    },

    resolve: {
      modules: [micrositeFolderPaths.src, micrositeFolderPaths.nodeModules],
      extensions,
    },
  }
}

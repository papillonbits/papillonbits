import { getBabelLoaderAdvancedSetup } from '../loader/babelLoader.js'
import { getFontLoaderStandardSetup } from '../loader/fontLoader.js'
import { getImageLoaderStandardSetup } from '../loader/imageLoader.js'
import { getSVGRLoaderAdvancedSetup } from '../loader/svgrLoader.js'
import { getMarkdownLoaderStandardSetup } from '../loader/markdownLoader.js'
import { getCleanWebpackPluginStandardSetup } from '../plugin/cleanWebpackPlugin.js'
import { getCopyWebpackPluginStandardSetup } from '../plugin/copyWebpackPlugin.js'
import { getHtmlWebpackPluginStandardSetup } from '../plugin/htmlWebpackPlugin.js'
import { getWebpackManifestPluginStandardSetup } from '../plugin/webpackManifestPlugin.js'
import { extensions } from '../constant/index.js'

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

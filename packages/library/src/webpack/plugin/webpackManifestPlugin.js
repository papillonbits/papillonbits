// https://github.com/shellscape/webpack-manifest-plugin
/* eslint-disable no-param-reassign  */
import { WebpackManifestPlugin } from 'webpack-manifest-plugin'
import { manifestFileName } from '../constant'

export function getWebpackManifestPluginStandardSetup() {
  return new WebpackManifestPlugin({
    fileName: manifestFileName,
    basePath: '',
    map: (file) => {
      file.name = file.name.replace(/(\.[a-f0-9]{32})(\..*)$/, '$2')
      return file
    },
  })
}

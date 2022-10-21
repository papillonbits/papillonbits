// https://webpack.js.org/plugins/module-concatenation-plugin/

import webpack from 'webpack'

export function getModuleConcatenationPluginStandardSetup() {
  return new webpack.optimize.ModuleConcatenationPlugin()
}

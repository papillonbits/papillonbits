// https://webpack.js.org/plugins/hot-module-replacement-plugin/

import webpack from 'webpack'

export function getHotModuleReplacementPluginStandardSetup() {
  return new webpack.HotModuleReplacementPlugin()
}

// https://github.com/webpack-contrib/css-minimizer-webpack-plugin

import CSSMinimizerWebpackPlugin from 'css-minimizer-webpack-plugin'

export function getCSSMinimizerWebpackPluginStandardSetup() {
  return new CSSMinimizerWebpackPlugin()
}

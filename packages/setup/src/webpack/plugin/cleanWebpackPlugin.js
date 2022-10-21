// https://github.com/johnagan/clean-webpack-plugin

import { CleanWebpackPlugin } from 'clean-webpack-plugin'

export function getCleanWebpackPluginStandardSetup() {
  return new CleanWebpackPlugin()
}

export function getCleanWebpackPluginAdvancedSetup({
  dry,
  verbose,
  cleanStaleWebpackAssets,
  protectWebpackAssets,
  cleanOnceBeforeBuildPatterns,
  cleanAfterEveryBuildPatterns,
  dangerouslyAllowCleanPatternsOutsideProject,
}) {
  return new CleanWebpackPlugin({
    dry,
    verbose,
    cleanStaleWebpackAssets,
    protectWebpackAssets,
    cleanOnceBeforeBuildPatterns,
    cleanAfterEveryBuildPatterns,
    dangerouslyAllowCleanPatternsOutsideProject,
  })
}

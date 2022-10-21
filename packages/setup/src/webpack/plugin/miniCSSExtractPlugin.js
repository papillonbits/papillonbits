// https://github.com/webpack-contrib/mini-css-extract-plugin

import MiniCssExtractPlugin from 'mini-css-extract-plugin'

export const MiniCSSExtractPluginLoader = MiniCssExtractPlugin.loader

export function getMiniCSSExtractPluginStandardSetup() {
  return new MiniCssExtractPlugin()
}

export function getMiniCSSExtractPluginAdvancedSetup() {
  return new MiniCssExtractPlugin({
    filename: 'styles/[name].[contenthash].css',
    chunkFilename: '[id].css',
  })
}

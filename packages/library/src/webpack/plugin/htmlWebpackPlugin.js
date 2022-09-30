// https://github.com/jantimon/html-webpack-plugin

import HtmlWebpackPlugin from 'html-webpack-plugin'
import { indexHTMLName } from '../constant'

export function getHtmlWebpackPluginStandardSetup({ title, micrositeWebpackFolderPath }) {
  return new HtmlWebpackPlugin({
    title,
    meta: { viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no' },
    template: `${micrositeWebpackFolderPath}/${indexHTMLName}`,
    filename: indexHTMLName,
    inject: 'body',
    scriptLoading: 'defer',
  })
}
export function getHtmlWebpackPluginAdvancedSetup({ title, meta, template, filename, inject, scriptLoading }) {
  return new HtmlWebpackPlugin({
    title,
    meta,
    template,
    filename,
    inject,
    scriptLoading,
  })
}

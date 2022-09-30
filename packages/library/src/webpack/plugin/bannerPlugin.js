// https://webpack.js.org/plugins/banner-plugin/

import webpack from 'webpack'

export function getBannerPluginStandardSetup(packageJSON) {
  return new webpack.BannerPlugin({
    banner: [
      '/*!',
      ` * @project        ${packageJSON.name}`,
      ' * @name           [filebase]',
      ` * @author         ${packageJSON.author.name}`,
      ` * @copyright      Copyright (c) ${new Date().getFullYear()} ${packageJSON.author.name}`,
      ' */',
      '',
    ].join('\n'),
    raw: true,
  })
}

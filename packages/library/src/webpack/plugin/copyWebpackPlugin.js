// https://github.com/webpack-contrib/copy-webpack-plugin

import CopyWebpackPlugin from 'copy-webpack-plugin'

export function getCopyWebpackPluginStandardSetup({ from, to }) {
  return new CopyWebpackPlugin({
    patterns: [
      {
        from,
        to,
        globOptions: {
          ignore: ['*.DS_Store'],
        },
        noErrorOnMissing: true,
      },
    ],
  })
}

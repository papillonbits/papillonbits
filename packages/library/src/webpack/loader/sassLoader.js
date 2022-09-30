// https://github.com/webpack-contrib/sass-loader

export function getSassLoaderStandardSetup({ includePaths }) {
  return {
    loader: 'sass-loader',
    options: {
      sassOptions: {
        indentWidth: 4,
        includePaths,
      },
    },
  }
}

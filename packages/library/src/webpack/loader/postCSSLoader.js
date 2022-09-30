// https://github.com/webpack-contrib/postcss-loader

export function getPostCSSLoaderStandardSetup() {
  return {
    loader: 'postcss-loader',
    options: {
      postcssOptions: {
        sourceMap: true,
        plugins: () => ['postcss-preset-env'],
        parser: 'postcss-scss',
      },
    },
  }
}

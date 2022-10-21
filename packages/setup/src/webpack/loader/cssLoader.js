// https://github.com/webpack-contrib/css-loader

export function getCSSLoaderStandardSetup({ sourceMap, modules }) {
  return {
    loader: 'css-loader',
    options: {
      importLoaders: 2,
      sourceMap,
      modules,
    },
  }
}

// https://webpack.js.org/guides/asset-management/#loading-fonts

export function getFontLoaderStandardSetup() {
  return {
    test: /\.(woff|woff2|eot|ttf|otf)$/i,
    type: 'asset/resource',
  }
}

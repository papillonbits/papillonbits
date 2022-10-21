// https://webpack.js.org/guides/asset-management/#loading-images

export function getImageLoaderStandardSetup() {
  return {
    test: /\.(png|jpg|jpeg|gif)$/i,
    type: 'asset/resource',
  }
}

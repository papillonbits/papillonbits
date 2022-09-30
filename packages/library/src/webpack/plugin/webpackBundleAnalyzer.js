// https://github.com/webpack-contrib/webpack-bundle-analyzer

import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer'

export function getWebpackBundleAnalyzerStandardSetup() {
  return new BundleAnalyzerPlugin({ analyzerMode: 'static', openAnalyzer: false })
}

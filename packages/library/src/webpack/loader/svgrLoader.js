// https://github.com/gregberge/svgr/tree/main/packages/webpack

export function getSVGRLoaderStandardSetup() {
  return {
    test: /\.svg$/,
    use: ['@svgr/webpack'],
  }
}

export function getSVGRLoaderAdvancedSetup() {
  return {
    test: /\.svg$/i,
    issuer: /\.[jt]sx?$/,
    resourceQuery: { not: [/url/] },
    use: ['@svgr/webpack'],
  }
}

// https://github.com/webpack-contrib/sass-loader

export function getSassLoaderStandardSetup({ includePaths }) {
  return {
    loader: 'sass-loader',
    options: {
      sassOptions: {
        indentWidth: 4,
        includePaths,
        // https://sass-lang.com/documentation/js-api/interfaces/options/#quietDeps
        // https://sass-lang.com/documentation/js-api/interfaces/options/#silenceDeprecations
        // https://sass-lang.com/documentation/js-api/interfaces/deprecations/
        quietDeps: true,
        silenceDeprecations: ['import', 'global-builtin'],
      },
    },
  }
}

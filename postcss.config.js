const autoprefixer = require('autoprefixer')
const postcssPresetEnv = require('postcss-preset-env')

module.exports = {
  plugins: [
    autoprefixer,
    'postcss-nested',
    postcssPresetEnv({
      browsers: 'last 2 versions',
    }),
  ],
}

const autoprefixer = require('autoprefixer')
const postcssNested = require('postcss-nested')
const postcssPresetEnv = require('postcss-preset-env')

module.exports = {
  plugins: [
    autoprefixer,
    postcssNested,
    postcssPresetEnv({
      browsers: 'last 2 versions',
    }),
  ],
}

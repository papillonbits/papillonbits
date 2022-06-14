/* eslint-disable global-require */
// import './asset/npm/primer.css'
// import './asset/custom.css'
// import './asset/github/styleguide.css'
import './asset/main.css'

import './asset/github/styleguide'
import './asset/npm/elasticlunr'
import './asset/animation'
// import './asset/search'

require('@babel/register')({
  extensions: ['.js', '.jsx'],
  ignore: [],
})

require('whatwg-fetch')

require('./clientRenderApp')

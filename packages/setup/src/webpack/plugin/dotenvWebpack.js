// https://github.com/mrsteele/dotenv-webpack

import DotenvWebpack from 'dotenv-webpack'

export function getDotenvWebpackStandardSetup({ path }) {
  return new DotenvWebpack({ path })
}

export function getDotenvWebpackAdvancedSetup({ path, safe, allowEmptyValues, systemvars, silent, defaults, prefix }) {
  return new DotenvWebpack({
    path,
    safe,
    allowEmptyValues,
    systemvars,
    silent,
    defaults,
    prefix,
  })
}

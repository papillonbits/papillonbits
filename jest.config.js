// https://docs.codecov.com/docs/codecov-uploader
/* eslint-disable prefer-destructuring */
const getJestSetup = require('@papillonbits/library/jest').getJestSetup

const testPathIgnorePatterns = []
const coverageDirectory = './.coverage/'
const collectCoverage = true
const collectCoverageFrom = [
  '!**/.docs/**',
  '!**/.mock/**',
  '!**/.storybook/**',
  '!**/.storybook-static-develop/**',
  '!**/.storybook-static-release/**',
  '!**/coverage/**',
  '!**/node_modules/**',
  'packages/**/*.{js,jsx}',
  '!packages/**/index.js',
  '!packages/**/*.part.js',
  '!packages/**/*.prop.js',
  '!packages/**/*.story.js',
  '!packages/**/*.test.js',
  '!packages/**/build/**',
  '!packages/**/node_modules/**',
  '!packages/**/webpack*',
  '!packages/css/**',
  '!packages/library/**',
]
const coverageThreshold = {
  global: {
    statements: 59,
    branches: 68,
    functions: 44,
    lines: 60,
  },
}

module.exports = getJestSetup({ testPathIgnorePatterns, coverageDirectory, collectCoverage, collectCoverageFrom, coverageThreshold })

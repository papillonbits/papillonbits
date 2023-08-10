// https://docs.codecov.com/docs/codecov-uploader
/* eslint-disable prefer-destructuring */
const getJestSetup = require('@papillonbits/setup/jest').getJestSetup

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
  '!packages/setup/**',
]
const coverageThreshold = {
  global: {
    statements: 60,
    branches: 66,
    functions: 45,
    lines: 61,
  },
}

module.exports = getJestSetup({ testPathIgnorePatterns, coverageDirectory, collectCoverage, collectCoverageFrom, coverageThreshold })

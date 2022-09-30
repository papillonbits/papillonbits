// https://github.com/dequelabs/axe-core-npm
// https://www.npmjs.com/package/@axe-core/react

/* eslint-disable global-require */

export function checkAccessibilityIssues(react, reactDOM, delay) {
  if (process.env.NODE_ENV !== 'production') {
    const axe = require('@axe-core/react')
    axe(react, reactDOM, delay)
  }
}

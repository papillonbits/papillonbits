import axe from '@axe-core/react'

export function checkAccessibilityIssues(react, reactDOM, delay) {
  if (process.env.NODE_ENV !== 'production') {
    axe(react, reactDOM, delay)
  }
}

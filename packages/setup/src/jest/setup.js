// import 'jsdom-global/register'
import 'jsdom-global/register.js'
import { render } from '@testing-library/react'
// import { configureAxe, toHaveNoViolations } from 'jest-axe'

export function runJestSetup() {
  global.renderToJSON = (component) => render(component).container
  // global.axe = configureAxe({ rules: { region: { enabled: false } } })
  // expect.extend(toHaveNoViolations)
}

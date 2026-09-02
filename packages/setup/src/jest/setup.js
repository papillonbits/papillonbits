import 'jsdom-global/register.js'
import { atob, btoa } from 'node:buffer'
import { render } from '@testing-library/react'
// import { configureAxe, toHaveNoViolations } from 'jest-axe'
import jestAxe from 'jest-axe'

// jsdom-global copies jsdom's window.atob/btoa onto the Node global, but those just
// delegate to the ambient global atob/btoa — once copied, that delegation becomes
// self-referential and overflows the stack. Restore Node's real implementations.
global.atob = atob
global.btoa = btoa

export function runJestSetup() {
  global.renderToJSON = (component) => render(component).container
  global.axe = jestAxe.configureAxe({ rules: { region: { enabled: false } } })
  expect.extend(jestAxe.toHaveNoViolations)
}

import 'jsdom-global/register'

import { render } from '@testing-library/react'

import { configureAxe, toHaveNoViolations } from 'jest-axe'

global.renderToJSON = (component) => render(component).container

global.axe = configureAxe({
  rules: {
    region: { enabled: false },
  },
})

expect.extend(toHaveNoViolations)

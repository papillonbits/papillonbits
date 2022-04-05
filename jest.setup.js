import 'jsdom-global/register'
import 'jest-enzyme'

import renderer from 'react-test-renderer'

import Enzyme, { shallow, mount } from 'enzyme'

import { configureAxe, toHaveNoViolations } from 'jest-axe'

global.renderToJSON = (component) => renderer.create(component).toJSON()

global.renderMount = (component) => mount(component)
global.renderShallow = (component) => shallow(component)

global.axe = configureAxe({
  rules: {
    region: { enabled: false },
  },
})
global.renderMountHTML = (component) => mount(component).html()
global.renderShallowHTML = (component) => mount(component).html()
expect.extend(toHaveNoViolations)

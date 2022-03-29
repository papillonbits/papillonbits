import { regular } from './ErrorBoundary.int.story'

describe('<ErrorBoundary />', () => {
  describe('Render', () => {
    test('must match regular()', () => {
      expect(global.renderToJSON(regular())).toMatchSnapshot()
    })
  })
})

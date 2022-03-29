import { plain, spacious } from './Subhead.int.story'

describe('<Subhead />', () => {
  describe('Render', () => {
    test('must match plain()', () => {
      expect(global.renderToJSON(plain())).toMatchSnapshot()
    })

    test('must match spacious()', () => {
      expect(global.renderToJSON(spacious())).toMatchSnapshot()
    })
  })
})

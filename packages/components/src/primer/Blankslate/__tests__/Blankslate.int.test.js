import { regular, narrow, capped, spacious, large, cleanBackground } from './Blankslate.int.story'

describe('<Blankslate />', () => {
  describe('Render', () => {
    test('must match regular()', () => {
      expect(global.renderToJSON(regular())).toMatchSnapshot()
    })

    test('must match narrow()', () => {
      expect(global.renderToJSON(narrow())).toMatchSnapshot()
    })

    test('must match capped()', () => {
      expect(global.renderToJSON(capped())).toMatchSnapshot()
    })

    test('must match spacious()', () => {
      expect(global.renderToJSON(spacious())).toMatchSnapshot()
    })

    test('must match large()', () => {
      expect(global.renderToJSON(large())).toMatchSnapshot()
    })

    test('must match cleanBackground()', () => {
      expect(global.renderToJSON(cleanBackground())).toMatchSnapshot()
    })
  })
})

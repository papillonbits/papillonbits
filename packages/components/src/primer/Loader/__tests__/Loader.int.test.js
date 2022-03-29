import { heading, text, label, button } from './Loader.int.story'

describe('<Loader />', () => {
  describe('Render', () => {
    test('must match heading()', () => {
      expect(global.renderToJSON(heading())).toMatchSnapshot()
    })

    test('must match text()', () => {
      expect(global.renderToJSON(text())).toMatchSnapshot()
    })

    test('must match label()', () => {
      expect(global.renderToJSON(label())).toMatchSnapshot()
    })

    test('must match button()', () => {
      expect(global.renderToJSON(button())).toMatchSnapshot()
    })
  })
})

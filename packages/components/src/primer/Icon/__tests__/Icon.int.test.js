import { regular, allIcons } from './Icon.int.story'

describe('<Icon />', () => {
  describe('Render', () => {
    test('must match regular()', () => {
      expect(global.renderToJSON(regular({}))).toMatchSnapshot()
    })

    test('must match allIcons()', () => {
      expect(global.renderToJSON(allIcons())).toMatchSnapshot()
    })
  })
})

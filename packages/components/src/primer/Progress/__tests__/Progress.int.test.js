import { normal, large, small } from './Progress.int.story'

describe('<Progress />', () => {
  describe('Render', () => {
    test('must match normal()', () => {
      expect(global.renderToJSON(normal())).toMatchSnapshot()
    })

    test('must match large()', () => {
      expect(global.renderToJSON(large())).toMatchSnapshot()
    })

    test('must match small()', () => {
      expect(global.renderToJSON(small())).toMatchSnapshot()
    })
  })
})

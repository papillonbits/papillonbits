import { regular, inactive } from './Radio.int.story'

describe('<Radio />', () => {
  describe('Render', () => {
    test('must match regular()', () => {
      expect(global.renderToJSON(regular())).toMatchSnapshot()
    })

    test('must match inactive()', () => {
      expect(global.renderToJSON(inactive())).toMatchSnapshot()
    })
  })
})

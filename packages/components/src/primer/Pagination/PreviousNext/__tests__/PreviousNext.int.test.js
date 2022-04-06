import { regular, inactive } from './PreviousNext.int.story'

describe('<PreviousNext />', () => {
  afterEach(() => jest.clearAllMocks())

  describe('Render', () => {
    test('must match regular()', () => {
      expect(global.renderToJSON(regular())).toMatchSnapshot()
    })

    test('must match inactive()', () => {
      expect(global.renderToJSON(inactive())).toMatchSnapshot()
    })
  })
})

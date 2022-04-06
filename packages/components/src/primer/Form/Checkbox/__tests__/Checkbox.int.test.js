import { isChecked, isNotChecked, isCheckedInactive, isNotCheckedInactive } from './Checkbox.int.story'

describe('<Checkbox />', () => {
  afterEach(() => jest.clearAllMocks())

  describe('Render', () => {
    test('must match isChecked()', () => {
      expect(global.renderToJSON(isChecked())).toMatchSnapshot()
    })

    test('must match isCheckedInactive()', () => {
      expect(global.renderToJSON(isCheckedInactive())).toMatchSnapshot()
    })

    test('must match isNotChecked()', () => {
      expect(global.renderToJSON(isNotChecked())).toMatchSnapshot()
    })

    test('must match isNotCheckedInactive()', () => {
      expect(global.renderToJSON(isNotCheckedInactive())).toMatchSnapshot()
    })
  })
})

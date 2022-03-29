import { custom, isChecked, isNotChecked, isCheckedInactive, isNotCheckedInactive } from './Checkbox.int.story'

describe('<Checkbox />', () => {
  const onChangeMockFn = jest.fn()

  afterEach(() => jest.clearAllMocks())

  describe('Event', () => {
    test('must handle event when onChange()', () => {
      const mountCustomRender = global.renderMount(custom(onChangeMockFn))
      mountCustomRender.find('input').simulate('change')
      expect(mountCustomRender.props().onChange).toBe(onChangeMockFn)
      expect(mountCustomRender.props().onChange).toHaveBeenCalledWith(expect.any(Object))
    })
  })

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

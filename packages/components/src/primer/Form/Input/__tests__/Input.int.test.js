import { custom, regular, inactive } from './Input.int.story'

describe('<Input />', () => {
  const onChangeMockFn = jest.fn()
  const onKeyUpMockFn = jest.fn()
  const onFocusMockFn = jest.fn()
  const onBlurMockFn = jest.fn()

  afterEach(() => jest.clearAllMocks())

  describe('Event', () => {
    test('must handle event when onChange()', () => {
      const mountCustomRender = global.renderMount(custom(onChangeMockFn, onKeyUpMockFn, onFocusMockFn, onBlurMockFn))
      mountCustomRender.find('input').simulate('change')
      expect(mountCustomRender.props().onChange).toBe(onChangeMockFn)
      expect(mountCustomRender.props().onChange).toHaveBeenCalledWith(expect.any(Object))
    })

    test('must handle event when onKeyUp()', () => {
      const mountCustomRender = global.renderMount(custom(onChangeMockFn, onKeyUpMockFn, onFocusMockFn, onBlurMockFn))
      mountCustomRender.find('input').simulate('keyup')
      expect(mountCustomRender.props().onKeyUp).toBe(onKeyUpMockFn)
      expect(mountCustomRender.props().onKeyUp).toHaveBeenCalledWith(expect.any(Object))
    })

    test('must handle event when onFocus()', () => {
      const mountCustomRender = global.renderMount(custom(onChangeMockFn, onKeyUpMockFn, onFocusMockFn, onBlurMockFn))
      mountCustomRender.find('input').simulate('focus')
      expect(mountCustomRender.props().onFocus).toBe(onFocusMockFn)
      expect(mountCustomRender.props().onFocus).toHaveBeenCalled()
    })

    test('must handle event when onBlur()', () => {
      const mountCustomRender = global.renderMount(custom(onChangeMockFn, onKeyUpMockFn, onFocusMockFn, onBlurMockFn))
      mountCustomRender.find('input').simulate('blur')
      expect(mountCustomRender.props().onBlur).toBe(onBlurMockFn)
      expect(mountCustomRender.props().onBlur).toHaveBeenCalled()
    })
  })

  describe('Render', () => {
    test('must match regular()', () => {
      expect(global.renderToJSON(regular())).toMatchSnapshot()
    })

    test('must match inactive()', () => {
      expect(global.renderToJSON(inactive())).toMatchSnapshot()
    })
  })
})

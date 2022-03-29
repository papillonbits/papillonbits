import { custom, info, success, warning, error, dismissable } from './Toast.int.story'

describe('<Button />', () => {
  const onClickMockFn = jest.fn()

  describe('Event', () => {
    test('must call onClick() when isDismissable', () => {
      const mountCustomRender = global.renderMount(custom(onClickMockFn))
      mountCustomRender.find('button').first().simulate('click')
      expect(mountCustomRender.props().onClick).toBe(onClickMockFn)
      expect(mountCustomRender.props().onClick).toHaveBeenCalled()
    })
  })

  describe('Render', () => {
    test('must match info()', () => {
      expect(global.renderToJSON(info())).toMatchSnapshot()
    })

    test('must match success()', () => {
      expect(global.renderToJSON(success())).toMatchSnapshot()
    })

    test('must match warning()', () => {
      expect(global.renderToJSON(warning())).toMatchSnapshot()
    })

    test('must match error()', () => {
      expect(global.renderToJSON(error())).toMatchSnapshot()
    })

    test('must match dismissable()', () => {
      expect(global.renderToJSON(dismissable())).toMatchSnapshot()
    })
  })
})

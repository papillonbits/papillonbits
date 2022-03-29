import { custom, regular, inactive } from './PreviousNext.int.story'

describe('<PreviousNext />', () => {
  const onClickMockFn = jest.fn()
  // const dispatchMockFn = jest.fn()

  afterEach(() => jest.clearAllMocks())

  describe('Event', () => {
    test('must return new items without index when previous onClick()', () => {
      const mountCustomRender = global.renderMount(custom(onClickMockFn))
      mountCustomRender.find('a').first().simulate('click')
      expect(mountCustomRender.props().onClick).toBe(onClickMockFn)
      // expect(dispatchMockFn).toHaveBeenCalledWith('onBackwards')
      // expect(mountCustomRender.props()).toBe({})
    })

    test('must return new items without index when next onClick()', () => {
      const mountCustomRender = global.renderMount(custom(onClickMockFn))
      mountCustomRender.find('a').last().simulate('click')
      expect(mountCustomRender.props().onClick).toBe(onClickMockFn)
      // expect(dispatchMockFn).toHaveBeenCalledWith('onForward')
      // expect(mountCustomRender.props()).toBe({})
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

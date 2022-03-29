import {
  custom,
  regular,
  regularLarge,
  bottom,
  bottomRight,
  bottomLeft,
  left,
  leftBottom,
  leftTop,
  right,
  rightBottom,
  rightTop,
  topLeft,
  topRight,
} from './Popover.int.story'

describe('<Popover />', () => {
  const introOnClickMockFn = jest.fn()
  const acknowledgeOnClickMockFn = jest.fn()

  describe('Event', () => {
    test('must call introOnClick()', () => {
      const mountCustomRender = global.renderMount(custom(introOnClickMockFn, acknowledgeOnClickMockFn))
      mountCustomRender.find('button').first().simulate('click')
      expect(mountCustomRender.props().introOnClick).toBe(introOnClickMockFn)
      expect(mountCustomRender.props().introOnClick).toHaveBeenCalled()
    })

    test('must call acknowledgeOnClick()', () => {
      const mountCustomRender = global.renderMount(custom(introOnClickMockFn, acknowledgeOnClickMockFn))
      mountCustomRender.find('button').last().simulate('click')
      expect(mountCustomRender.props().acknowledgeOnClick).toBe(acknowledgeOnClickMockFn)
      expect(mountCustomRender.props().acknowledgeOnClick).toHaveBeenCalled()
    })
  })

  describe('Render', () => {
    test('must match regular()', () => {
      expect(global.renderToJSON(regular())).toMatchSnapshot()
    })

    test('must match regularLarge()', () => {
      expect(global.renderToJSON(regularLarge())).toMatchSnapshot()
    })

    test('must match bottom()', () => {
      expect(global.renderToJSON(bottom())).toMatchSnapshot()
    })

    test('must match bottomRight()', () => {
      expect(global.renderToJSON(bottomRight())).toMatchSnapshot()
    })

    test('must match bottomLeft()', () => {
      expect(global.renderToJSON(bottomLeft())).toMatchSnapshot()
    })

    test('must match left()', () => {
      expect(global.renderToJSON(left())).toMatchSnapshot()
    })

    test('must match leftBottom()', () => {
      expect(global.renderToJSON(leftBottom())).toMatchSnapshot()
    })

    test('must match leftTop()', () => {
      expect(global.renderToJSON(leftTop())).toMatchSnapshot()
    })

    test('must match right()', () => {
      expect(global.renderToJSON(right())).toMatchSnapshot()
    })

    test('must match rightBottom()', () => {
      expect(global.renderToJSON(rightBottom())).toMatchSnapshot()
    })

    test('must match rightTop()', () => {
      expect(global.renderToJSON(rightTop())).toMatchSnapshot()
    })

    test('must match topLeft()', () => {
      expect(global.renderToJSON(topLeft())).toMatchSnapshot()
    })

    test('must match topRight()', () => {
      expect(global.renderToJSON(topRight())).toMatchSnapshot()
    })
  })
})

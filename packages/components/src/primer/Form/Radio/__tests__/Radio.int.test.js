import { custom, regular, inactive } from './Radio.int.story'

describe('<Radio />', () => {
  const onChangeMockFn = jest.fn()

  describe('Event', () => {
    test('must handle event when onChange()', () => {
      const mountCustomRender = global.renderMount(custom(onChangeMockFn))
      mountCustomRender.find('input').simulate('change')
      expect(mountCustomRender.props().onChange).toBe(onChangeMockFn)
      expect(mountCustomRender.props().onChange).toHaveBeenCalledWith(expect.any(Object))
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

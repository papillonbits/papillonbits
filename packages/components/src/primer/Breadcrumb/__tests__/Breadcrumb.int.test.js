import { ariaAttr, items, custom, regular, inactive } from './Breadcrumb.int.story'

jest.mock('@papillonbits/library/array', () => ({
  getIndexItems: () => {},
  getIndexItemsWithSelected: () => {},
}))

const libraryArrayMockObject = require('@papillonbits/library/array')

describe('<Breadcrumb />', () => {
  const indexItemsDataObject = [
    { ...items[0], index: 0 },
    { ...items[1], index: 1 },
    { ...items[2], index: 2 },
  ]

  const newIndexItemsWithSelectedDataObject = [
    { ...items[0], index: 0, isSelected: true },
    { ...items[1], index: 1, isSelected: false },
    { ...items[2], index: 2, isSelected: false },
  ]

  const newItemsDataObject = [
    { ...items[0], isSelected: true },
    { ...items[1], isSelected: false },
    { ...items[2], isSelected: false },
  ]

  const onClickMockFn = jest.fn()

  beforeEach(() => {
    jest.spyOn(libraryArrayMockObject, 'getIndexItems').mockReturnValue(indexItemsDataObject)

    jest.spyOn(libraryArrayMockObject, 'getIndexItemsWithSelected').mockReturnValue(newIndexItemsWithSelectedDataObject)
  })

  afterEach(() => jest.clearAllMocks())

  describe('Event', () => {
    test('must return new items without index when onClick()', () => {
      const mountCustomRender = global.renderMount(custom(onClickMockFn))
      mountCustomRender.find('li').first().simulate('click')
      expect(mountCustomRender.props().onClick).toBe(onClickMockFn)
      expect(mountCustomRender.props().onClick).toHaveBeenCalledWith({
        active: newItemsDataObject[0].text,
        ariaAttr,
        items: newItemsDataObject,
      })
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

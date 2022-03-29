import { ariaAttr, items, custom, regular } from './SelectMenu.int.story'

jest.mock('@papillonbits/library/array', () => ({
  getIndexItems: () => {},
  getIndexItemsWithSelected: () => {},
}))

jest.mock('@papillonbits/library/hooks', () => ({
  useRef: () => {},
  useState: () => {},
}))

const libraryArrayMockObject = require('@papillonbits/library/array')
const libraryHooksMockObject = require('@papillonbits/library/hooks')

describe('<SelectMenu />', () => {
  let indexItemsDataObject = [
    { ...items[0], index: 0 },
    { ...items[1], index: 1 },
    { ...items[2], index: 2 },
    { ...items[3], index: 3 },
  ]

  const newIndexItemsWithSelectedDataObject = [
    { ...items[0], index: 0, isSelected: true },
    { ...items[1], index: 1, isSelected: false },
    { ...items[2], index: 2, isSelected: false },
    { ...items[3], index: 3, isSelected: false },
  ]

  const newItemsDataObject = [
    { ...items[0], isSelected: true },
    { ...items[1], isSelected: false },
    { ...items[2], isSelected: false },
    { ...items[3], isSelected: false },
  ]

  const onClickMockFn = jest.fn()

  const setIndexItemsMockFn = jest.fn((indexItems) => {
    indexItemsDataObject = indexItems
  })

  beforeEach(() => {
    jest.spyOn(libraryArrayMockObject, 'getIndexItems').mockReturnValue(indexItemsDataObject)

    jest.spyOn(libraryArrayMockObject, 'getIndexItemsWithSelected').mockReturnValue(newIndexItemsWithSelectedDataObject)

    jest.spyOn(libraryHooksMockObject, 'useState').mockImplementation(() => [indexItemsDataObject, setIndexItemsMockFn])

    jest.spyOn(libraryHooksMockObject, 'useRef').mockImplementation(() => ({
      current: {
        removeAttribute: () => {},
      },
    }))
  })

  afterEach(() => jest.clearAllMocks())

  describe('Event', () => {
    test('must return new items without index when onClick()', () => {
      const mountCustomRender = global.renderMount(custom(onClickMockFn))
      mountCustomRender.find('button').last().simulate('click')
      expect(mountCustomRender.props().onClick).toBe(onClickMockFn)
      expect(mountCustomRender.props().onClick).toHaveBeenCalledWith({
        ariaAttr,
        items: newItemsDataObject,
      })
    })
  })

  describe('Render', () => {
    test('must match regular()', () => {
      expect(global.renderToJSON(regular())).toMatchSnapshot()
    })
  })

  describe('State', () => {
    test('must reset new items with index when onClick()', () => {
      const mountCustomRender = global.renderMount(custom(onClickMockFn))
      mountCustomRender.find('button').last().simulate('click')
      expect(setIndexItemsMockFn).toHaveBeenCalledWith(newIndexItemsWithSelectedDataObject)
      expect(indexItemsDataObject).toBe(newIndexItemsWithSelectedDataObject)
    })
  })
})

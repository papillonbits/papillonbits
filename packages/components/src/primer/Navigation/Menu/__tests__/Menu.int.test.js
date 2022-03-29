import { defaultItems as items, custom, regular, withIcons, withHeading } from './Menu.int.story'

jest.mock('@papillonbits/library/array', () => ({
  getIndexItems: () => {},
  getIndexItemsWithSelected: () => {},
}))

jest.mock('@papillonbits/library/hooks', () => ({
  useState: () => {},
}))

const libraryArrayMockObject = require('@papillonbits/library/array')
const libraryHooksMockObject = require('@papillonbits/library/hooks')

describe('<Menu />', () => {
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

  const onClickMockFn = jest.fn()

  const setIndexItemsMockFn = jest.fn((indexItems) => {
    indexItemsDataObject = indexItems
  })

  beforeEach(() => {
    jest.spyOn(libraryArrayMockObject, 'getIndexItems').mockReturnValue(indexItemsDataObject)

    jest.spyOn(libraryArrayMockObject, 'getIndexItemsWithSelected').mockReturnValue(newIndexItemsWithSelectedDataObject)

    jest.spyOn(libraryHooksMockObject, 'useState').mockImplementation(() => [indexItemsDataObject, setIndexItemsMockFn])
  })

  afterEach(() => jest.clearAllMocks())

  describe('Event', () => {
    test('must return new items without index when onClick()', () => {
      const mountCustomRender = global.renderMount(custom(onClickMockFn))
      mountCustomRender.find('nav').first().find('a').first().simulate('click')
      expect(mountCustomRender.props().onClick).toBe(onClickMockFn)
      expect(mountCustomRender.props().onClick).toHaveBeenCalledWith(newIndexItemsWithSelectedDataObject)
    })
  })

  describe('Render', () => {
    test('must match regular()', () => {
      expect(global.renderToJSON(regular())).toMatchSnapshot()
    })

    test('must match withIcons()', () => {
      expect(global.renderToJSON(withIcons())).toMatchSnapshot()
    })

    test('must match withHeading()', () => {
      expect(global.renderToJSON(withHeading())).toMatchSnapshot()
    })
  })

  describe('State', () => {
    test('must reset new items with index when onClick()', () => {
      const mountCustomRender = global.renderMount(custom(onClickMockFn))
      mountCustomRender.find('nav').first().find('a').first().simulate('click')
      expect(setIndexItemsMockFn).toHaveBeenCalledWith(newIndexItemsWithSelectedDataObject)
      expect(indexItemsDataObject).toBe(newIndexItemsWithSelectedDataObject)
    })
  })
})

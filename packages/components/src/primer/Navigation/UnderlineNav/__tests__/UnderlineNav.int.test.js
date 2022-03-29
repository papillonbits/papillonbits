import {
  buttonItems,
  anchorItems,
  custom,
  regular,
  withActions,
  rightAligned,
  rightAlignedWithActions,
  withIcons,
  fullContainer,
} from './UnderlineNav.int.story'
import { underlineNavItemType } from '../UnderlineNav.prop'

jest.mock('@papillonbits/library/array', () => ({
  getIndexItems: () => {},
  getIndexItemsWithSelected: () => {},
}))

jest.mock('@papillonbits/library/hooks', () => ({
  useState: () => {},
}))

const libraryArrayMockObject = require('@papillonbits/library/array')
const libraryHooksMockObject = require('@papillonbits/library/hooks')

describe('<UnderlineNav />', () => {
  let indexButtonItemsDataObject = [
    { ...buttonItems[0], index: 0 },
    { ...buttonItems[1], index: 1 },
    { ...buttonItems[2], index: 2 },
    { ...buttonItems[3], index: 3 },
  ]

  let indexAnchorItemsDataObject = [
    { ...anchorItems[0], index: 0 },
    { ...anchorItems[1], index: 1 },
    { ...anchorItems[2], index: 2 },
    { ...anchorItems[3], index: 3 },
  ]

  const newIndexButtonItemsWithSelectedDataObject = [
    { ...buttonItems[0], index: 0, isSelected: true },
    { ...buttonItems[1], index: 1, isSelected: false },
    { ...buttonItems[2], index: 2, isSelected: false },
    { ...buttonItems[3], index: 3, isSelected: false },
  ]

  const newIndexAnchorItemsWithSelectedDataObject = [
    { ...anchorItems[0], index: 0, isSelected: true },
    { ...anchorItems[1], index: 1, isSelected: false },
    { ...anchorItems[2], index: 2, isSelected: false },
    { ...anchorItems[3], index: 3, isSelected: false },
  ]

  const onClickMockFn = jest.fn()

  const setIndexButtonItemsMockFn = jest.fn((indexButtonItems) => {
    indexButtonItemsDataObject = indexButtonItems
  })

  const setIndexAnchorItemsMockFn = jest.fn((indexAnchorItems) => {
    indexAnchorItemsDataObject = indexAnchorItems
  })

  function mockLibraryForButtonItems() {
    jest.spyOn(libraryArrayMockObject, 'getIndexItems').mockReturnValue(indexButtonItemsDataObject)

    jest.spyOn(libraryArrayMockObject, 'getIndexItemsWithSelected').mockReturnValue(newIndexButtonItemsWithSelectedDataObject)

    jest.spyOn(libraryHooksMockObject, 'useState').mockImplementation(() => [indexButtonItemsDataObject, setIndexButtonItemsMockFn])
  }

  function mockLibraryForAnchorItems() {
    jest.spyOn(libraryArrayMockObject, 'getIndexItems').mockReturnValue(indexAnchorItemsDataObject)

    jest.spyOn(libraryArrayMockObject, 'getIndexItemsWithSelected').mockReturnValue(newIndexAnchorItemsWithSelectedDataObject)

    jest.spyOn(libraryHooksMockObject, 'useState').mockImplementation(() => [indexAnchorItemsDataObject, setIndexAnchorItemsMockFn])
  }

  describe('Event', () => {
    test('must return new items without index when button items and onClick()', () => {
      mockLibraryForButtonItems()
      const mountCustomRender = global.renderMount(custom(buttonItems, underlineNavItemType.button, onClickMockFn))
      mountCustomRender.find('button').first().simulate('click')
      expect(mountCustomRender.props().onClick).toBe(onClickMockFn)
      expect(mountCustomRender.props().onClick).toHaveBeenCalledWith(newIndexButtonItemsWithSelectedDataObject)
    })

    test('must return new items without index when anchor items and onClick()', () => {
      mockLibraryForAnchorItems()
      const mountCustomRender = global.renderMount(custom(anchorItems, underlineNavItemType.a, onClickMockFn))
      mountCustomRender.find('a').first().simulate('click')
      expect(mountCustomRender.props().onClick).toBe(onClickMockFn)
      expect(mountCustomRender.props().onClick).toHaveBeenCalledWith(newIndexAnchorItemsWithSelectedDataObject)
    })
  })

  describe('Render', () => {
    test('must match regular()', () => {
      mockLibraryForButtonItems()
      expect(global.renderToJSON(regular())).toMatchSnapshot()
    })

    test('must match withActions()', () => {
      mockLibraryForButtonItems()
      expect(global.renderToJSON(withActions())).toMatchSnapshot()
    })

    test('must match rightAligned()', () => {
      mockLibraryForButtonItems()
      expect(global.renderToJSON(rightAligned())).toMatchSnapshot()
    })

    test('must match rightAlignedWithActions()', () => {
      mockLibraryForButtonItems()
      expect(global.renderToJSON(rightAlignedWithActions())).toMatchSnapshot()
    })

    test('must match withIcons()', () => {
      mockLibraryForButtonItems()
      expect(global.renderToJSON(withIcons())).toMatchSnapshot()
    })

    test('must match fullContainer()', () => {
      mockLibraryForButtonItems()
      expect(global.renderToJSON(fullContainer())).toMatchSnapshot()
    })
  })

  describe('State', () => {
    test('must reset new items with index when button items and onClick()', () => {
      mockLibraryForButtonItems()
      const mountCustomRender = global.renderMount(custom(buttonItems, underlineNavItemType.button, onClickMockFn))
      mountCustomRender.find('button').first().simulate('click')
      expect(setIndexButtonItemsMockFn).toHaveBeenCalledWith(newIndexButtonItemsWithSelectedDataObject)
      expect(indexButtonItemsDataObject).toBe(newIndexButtonItemsWithSelectedDataObject)
    })

    test('must reset new items with index when anchor items and onClick()', () => {
      mockLibraryForAnchorItems()
      const mountCustomRender = global.renderMount(custom(anchorItems, underlineNavItemType.a, onClickMockFn))
      mountCustomRender.find('a').first().simulate('click')
      expect(setIndexAnchorItemsMockFn).toHaveBeenCalledWith(newIndexAnchorItemsWithSelectedDataObject)
      expect(indexAnchorItemsDataObject).toBe(newIndexAnchorItemsWithSelectedDataObject)
    })
  })
})

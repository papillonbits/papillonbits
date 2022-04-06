import {
  buttonItems,
  regular,
  withActions,
  rightAligned,
  rightAlignedWithActions,
  withIcons,
  fullContainer,
} from './UnderlineNav.int.story'

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

  const newIndexButtonItemsWithSelectedDataObject = [
    { ...buttonItems[0], index: 0, isSelected: true },
    { ...buttonItems[1], index: 1, isSelected: false },
    { ...buttonItems[2], index: 2, isSelected: false },
    { ...buttonItems[3], index: 3, isSelected: false },
  ]

  const setIndexButtonItemsMockFn = jest.fn((indexButtonItems) => {
    indexButtonItemsDataObject = indexButtonItems
  })

  function mockLibraryForButtonItems() {
    jest.spyOn(libraryArrayMockObject, 'getIndexItems').mockReturnValue(indexButtonItemsDataObject)

    jest.spyOn(libraryArrayMockObject, 'getIndexItemsWithSelected').mockReturnValue(newIndexButtonItemsWithSelectedDataObject)

    jest.spyOn(libraryHooksMockObject, 'useState').mockImplementation(() => [indexButtonItemsDataObject, setIndexButtonItemsMockFn])
  }

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
})

import {
  defaultItems as items,
  regular,
  withButtonActions,
  withTextActions,
  withLinkActions,
  withNavigation,
  withMixedEnabledVisibleItems,
  inactive,
} from './TabNav.int.story'

jest.mock('@papillonbits/library/array', () => ({
  getIndexItems: () => {},
  getIndexItemsWithSelected: () => {},
}))

const libraryArrayMockObject = require('@papillonbits/library/array')

describe('<TabNav />', () => {
  const indexItemsDataObject = [
    { ...items[0], index: 0 },
    { ...items[1], index: 1 },
  ]

  const newIndexItemsWithSelectedDataObject = [
    { ...items[0], index: 0, isSelected: true, enabled: true, visible: true },
    { ...items[1], index: 1, isSelected: false, enabled: true, visible: true },
  ]

  function mockLibraryForRegularItems() {
    jest.spyOn(libraryArrayMockObject, 'getIndexItems').mockReturnValue(indexItemsDataObject)

    jest.spyOn(libraryArrayMockObject, 'getIndexItemsWithSelected').mockReturnValue(newIndexItemsWithSelectedDataObject)
  }

  afterEach(() => jest.clearAllMocks())

  describe('Render', () => {
    test('must match regular()', () => {
      mockLibraryForRegularItems()
      expect(global.renderToJSON(regular())).toMatchSnapshot()
    })

    test('must match withButtonActions()', () => {
      mockLibraryForRegularItems()
      expect(global.renderToJSON(withButtonActions())).toMatchSnapshot()
    })

    test('must match withTextActions()', () => {
      mockLibraryForRegularItems()
      expect(global.renderToJSON(withTextActions())).toMatchSnapshot()
    })

    test('must match withLinkActions()', () => {
      mockLibraryForRegularItems()
      expect(global.renderToJSON(withLinkActions())).toMatchSnapshot()
    })

    test('must match withNavigation()', () => {
      mockLibraryForRegularItems()
      expect(global.renderToJSON(withNavigation())).toMatchSnapshot()
    })

    test('must match withMixedEnabledVisibleItems()', () => {
      mockLibraryForRegularItems()
      expect(global.renderToJSON(withMixedEnabledVisibleItems())).toMatchSnapshot()
    })

    test('must match inactive()', () => {
      mockLibraryForRegularItems()
      expect(global.renderToJSON(inactive())).toMatchSnapshot()
    })
  })
})

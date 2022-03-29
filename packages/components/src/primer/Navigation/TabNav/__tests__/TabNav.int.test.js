import {
  ariaAttr,
  defaultItems as items,
  navigationItems,
  mixedEnabledVisibleItems,
  custom,
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

  const indexNavigationItemsDataObject = [
    { ...navigationItems[0], index: 0 },
    { ...navigationItems[1], index: 1 },
  ]

  const indexMixedEnabledVisibleItemsDataObject = [
    { ...mixedEnabledVisibleItems[0], index: 0 },
    { ...mixedEnabledVisibleItems[1], index: 1 },
    { ...mixedEnabledVisibleItems[2], index: 2 },
  ]

  const newIndexItemsWithSelectedDataObject = [
    { ...items[0], index: 0, isSelected: true, enabled: true, visible: true },
    { ...items[1], index: 1, isSelected: false, enabled: true, visible: true },
  ]

  const newIndexNavigationItemsWithSelectedDataObject = [
    { ...navigationItems[0], index: 0, isSelected: true, enabled: true, visible: true },
    { ...navigationItems[1], index: 1, isSelected: false, enabled: true, visible: true },
  ]

  const newIndexMixedEnabledVisibleItemsDataObject = [
    { ...mixedEnabledVisibleItems[0], index: 0, isSelected: true, enabled: true, visible: true },
    { ...mixedEnabledVisibleItems[1], index: 1, isSelected: false, enabled: false, visible: true },
    { ...mixedEnabledVisibleItems[2], index: 2, isSelected: false, enabled: false, visible: false },
  ]

  const newItemsDataObject = [
    { ...items[0], isSelected: true, enabled: true, visible: true },
    { ...items[1], isSelected: false, enabled: true, visible: true },
  ]

  const newNavigationItemsDataObject = [
    { ...navigationItems[0], isSelected: true, enabled: true, visible: true },
    { ...navigationItems[1], isSelected: false, enabled: true, visible: true },
  ]

  const newMixedEnabledVisibleItemsDataObject = [
    { ...mixedEnabledVisibleItems[0], isSelected: true, enabled: true, visible: true },
    { ...mixedEnabledVisibleItems[1], isSelected: false, enabled: false, visible: true },
    { ...mixedEnabledVisibleItems[2], isSelected: false, enabled: false, visible: false },
  ]

  const onClickMockFn = jest.fn()

  function mockLibraryForRegularItems() {
    jest.spyOn(libraryArrayMockObject, 'getIndexItems').mockReturnValue(indexItemsDataObject)

    jest.spyOn(libraryArrayMockObject, 'getIndexItemsWithSelected').mockReturnValue(newIndexItemsWithSelectedDataObject)
  }

  function mockLibraryForNavigationItems() {
    jest.spyOn(libraryArrayMockObject, 'getIndexItems').mockReturnValue(indexNavigationItemsDataObject)

    jest.spyOn(libraryArrayMockObject, 'getIndexItemsWithSelected').mockReturnValue(newIndexNavigationItemsWithSelectedDataObject)
  }

  function mockLibraryForMixedEnabledVisibleItems() {
    jest.spyOn(libraryArrayMockObject, 'getIndexItems').mockReturnValue(indexMixedEnabledVisibleItemsDataObject)

    jest.spyOn(libraryArrayMockObject, 'getIndexItemsWithSelected').mockReturnValue(newIndexMixedEnabledVisibleItemsDataObject)
  }

  afterEach(() => jest.clearAllMocks())

  describe('Event', () => {
    test('must return new items without index when regular items and onClick()', () => {
      mockLibraryForRegularItems()
      const mountCustomRender = global.renderMount(custom(items, onClickMockFn)).find('TabNav')
      mountCustomRender.find('nav').first().find('a').first().simulate('click')
      expect(mountCustomRender.props().onClick).toBe(onClickMockFn)
      expect(mountCustomRender.props().onClick).toHaveBeenCalledWith({
        ariaAttr,
        items: newItemsDataObject,
      })
    })

    test('must return new items without index when navigation items and onClick()', () => {
      mockLibraryForNavigationItems()
      const mountCustomRender = global.renderMount(custom(navigationItems, onClickMockFn)).find('TabNav')
      mountCustomRender.find('nav').first().find('a').first().simulate('click')
      expect(mountCustomRender.props().onClick).toBe(onClickMockFn)
      expect(mountCustomRender.props().onClick).toHaveBeenCalledWith({
        ariaAttr,
        items: newNavigationItemsDataObject,
      })
    })

    test('must return new items without index when mixed enabled visuble items and onClick()', () => {
      mockLibraryForMixedEnabledVisibleItems()
      const mountCustomRender = global.renderMount(custom(mixedEnabledVisibleItems, onClickMockFn)).find('TabNav')
      mountCustomRender.find('nav').first().find('a').first().simulate('click')
      expect(mountCustomRender.props().onClick).toBe(onClickMockFn)
      expect(mountCustomRender.props().onClick).toHaveBeenCalledWith({
        ariaAttr,
        items: newMixedEnabledVisibleItemsDataObject,
      })
    })
  })

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

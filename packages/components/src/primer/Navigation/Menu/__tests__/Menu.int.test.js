import { defaultItems as items, regular, withIcons, withHeading } from './Menu.int.story'

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

  const setIndexItemsMockFn = jest.fn((indexItems) => {
    indexItemsDataObject = indexItems
  })

  beforeEach(() => {
    jest.spyOn(libraryArrayMockObject, 'getIndexItems').mockReturnValue(indexItemsDataObject)

    jest.spyOn(libraryArrayMockObject, 'getIndexItemsWithSelected').mockReturnValue(newIndexItemsWithSelectedDataObject)

    jest.spyOn(libraryHooksMockObject, 'useState').mockImplementation(() => [indexItemsDataObject, setIndexItemsMockFn])
  })

  afterEach(() => jest.clearAllMocks())

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
})

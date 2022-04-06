import { items, regular, inactive } from './Dropdown.int.story'

jest.mock('@papillonbits/library/array', () => ({
  getIndexItems: () => {},
  getIndexItemsWithSelected: () => {},
}))

jest.mock('@papillonbits/library/hooks', () => ({
  useRef: () => {},
}))

const libraryArrayMockObject = require('@papillonbits/library/array')
const libraryHooksMockObject = require('@papillonbits/library/hooks')

describe('<Dropdown />', () => {
  const indexItemsDataObject = [
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

  beforeEach(() => {
    jest.spyOn(libraryArrayMockObject, 'getIndexItems').mockReturnValue(indexItemsDataObject)

    jest.spyOn(libraryArrayMockObject, 'getIndexItemsWithSelected').mockReturnValue(newIndexItemsWithSelectedDataObject)

    jest.spyOn(libraryHooksMockObject, 'useRef').mockImplementation(() => ({
      current: {
        removeAttribute: () => {},
      },
    }))
  })

  afterEach(() => jest.clearAllMocks())

  describe('Render', () => {
    test('must match regular()', () => {
      expect(global.renderToJSON(regular())).toMatchSnapshot()
    })

    test('must match inacive()', () => {
      expect(global.renderToJSON(inactive())).toMatchSnapshot()
    })
  })
})

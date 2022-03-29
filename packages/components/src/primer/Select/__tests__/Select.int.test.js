import { items, custom, regular, inactive } from './Select.int.story'

jest.mock('@papillonbits/library/array', () => ({
  getIndexItems: () => {},
  getIndexItemsWithSelected: () => {},
}))

const libraryArrayMockObject = require('@papillonbits/library/array')

describe('<Select />', () => {
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

  const newItemsDataObject = [
    { ...items[0], isSelected: true },
    { ...items[1], isSelected: false },
    { ...items[2], isSelected: false },
    { ...items[3], isSelected: false },
  ]

  const onChangeMockFn = jest.fn()

  beforeEach(() => {
    jest.spyOn(libraryArrayMockObject, 'getIndexItems').mockReturnValue(indexItemsDataObject)

    jest.spyOn(libraryArrayMockObject, 'getIndexItemsWithSelected').mockReturnValue(newIndexItemsWithSelectedDataObject)
  })

  afterEach(() => jest.clearAllMocks())

  describe('Event', () => {
    test('must return new items without index when onChange()', () => {
      const mountCustomRender = global.renderMount(custom(onChangeMockFn))
      mountCustomRender.find('select').first().simulate('change')
      expect(mountCustomRender.props().onChange).toBe(onChangeMockFn)
      expect(mountCustomRender.props().onChange).toHaveBeenCalledWith({
        selectedText: newItemsDataObject[0].text,
        items: newItemsDataObject,
      })
    })
  })

  describe('Render', () => {
    test('must match regular()', () => {
      expect(global.renderToJSON(regular())).toMatchSnapshot()
    })

    test('must match inacive()', () => {
      expect(global.renderToJSON(inactive())).toMatchSnapshot()
    })
  })
})

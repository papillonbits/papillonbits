import { getCurrentIndex, getIndexItems, getIndexItemsWithSelected, getRandomItemFromArray, getRange } from '../index'

describe('index', () => {
  describe('getCurrentIndex()', () => {
    test('must return current item index when there is a current item', () => {
      const indexItems = [
        { isCurrent: true, index: 0 },
        { isCurrent: false, index: 1 },
      ]
      expect(getCurrentIndex(indexItems)).toEqual(indexItems[0].index)
    })

    test('must return -1 when there is no current item', () => {
      const indexItems = [
        { isCurrent: false, index: 0 },
        { isCurrent: false, index: 1 },
      ]
      expect(getCurrentIndex(indexItems)).toEqual(-1)
    })

    test('must return -1 when there are no index items', () => {
      let indexItems
      expect(getCurrentIndex(indexItems)).toEqual(-1)
    })
  })

  describe('getIndexItems()', () => {
    const items = [{ fantasticKey1: 'fantastic-value-1' }, { fantasticKey2: 'fantastic-value-2' }, { fantasticKey3: 'fantastic-value-3' }]

    test('must return items with index when there are items', () => {
      const itemsWithoutIndex = [items[0], items[1], items[2]]
      const itemsWithIndex = [
        { ...items[0], index: 0 },
        { ...items[1], index: 1 },
        { ...items[2], index: 2 },
      ]

      expect(getIndexItems(itemsWithoutIndex)).toEqual(itemsWithIndex)
    })

    test('must return empty array when items are empty', () => {
      const itemsWithoutIndex = []

      expect(getIndexItems(itemsWithoutIndex)).toEqual([])
    })

    test('must return empty array when there are no items', () => {
      let itemsWithoutIndex

      expect(getIndexItems(itemsWithoutIndex)).toEqual([])
    })
  })

  describe('getIndexItemsWithSelected()', () => {
    test('must return index items with selected when there are items', () => {
      const selectedItem = { fantasticKey3: 'fantastic-value-3', index: 2 }
      const items = [{ fantasticKey1: 'fantastic-value-1' }, { fantasticKey2: 'fantastic-value-2' }, selectedItem]
      const indexItems = [{ ...items[0], index: 0 }, { ...items[1], index: 1 }, { ...selectedItem }]
      const indexItemsWithSelected = [
        { ...items[0], index: 0, isSelected: false },
        { ...items[1], index: 1, isSelected: false },
        { ...selectedItem, isSelected: true },
      ]

      expect(getIndexItemsWithSelected(indexItems, selectedItem)).toEqual(indexItemsWithSelected)
    })

    test('must return empty array when items are empty', () => {
      const indexItems = []

      expect(getIndexItemsWithSelected(indexItems, expect.anything())).toEqual([])
    })

    test('must return empty array when there are no items', () => {
      let indexItems

      expect(getIndexItemsWithSelected(indexItems, expect.anything())).toEqual([])
    })
  })

  describe('getRandomItemFromArray()', () => {
    beforeEach(() => {
      jest.spyOn(Math, 'random').mockImplementation(jest.fn(() => 3))
      jest.spyOn(Math, 'floor').mockImplementation(jest.fn(() => 0))
    })

    afterEach(() => jest.clearAllMocks())

    test('must return random item from array when array has items', () => {
      const array = [{ fantasticKey1: 'fantastic-value-1' }, { fantasticKey2: 'fantastic-value-2' }, { fantasticKey3: 'fantastic-value-3' }]

      expect(getRandomItemFromArray(array)).toEqual(array[0])
    })

    test('must return undefined when array has no items', () => {
      const array = []

      expect(getRandomItemFromArray(array)).toBeUndefined()
    })
  })

  describe('getRange()', () => {
    const range = 3
    const indexSeed = 5
    const valueSeed = 7

    test('must return range without index seed and without value seed', () => {
      expect(getRange({ range })).toEqual([0, 1, 2])
    })

    test('must return range with index seed and without value seed', () => {
      expect(getRange({ range, indexSeed })).toEqual([5, 6, 7])
    })

    test('must return range without index seed and with value seed', () => {
      expect(getRange({ range, valueSeed })).toEqual([7, 8, 9])
    })

    test('must return range with index seed and with value seed', () => {
      expect(getRange({ range, indexSeed, valueSeed })).toEqual([12, 13, 14])
    })
  })
})

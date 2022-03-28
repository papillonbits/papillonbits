import * as index from '../index'

jest.mock('../../array', () => ({ getCurrentIndex: jest.fn(), getIndexItems: jest.fn(), getRange: jest.fn() }))

describe('index', () => {
  describe('constants', () => {
    test('must return all pagination constants', () => {
      expect(index).toHaveProperty('paginationActionTypes')
    })
  })

  describe('paginate()', () => {
    const { paginate } = index

    test('must paginate array with page size and return items of given page number', () => {
      const array = [
        { fantasticKey1: 'fantastic-value-1' },
        { fantasticKey2: 'fantastic-value-2' },
        { fantasticKey3: 'fantastic-value-3' },
        { fantasticKey4: 'fantastic-value-4' },
        { fantasticKey5: 'fantastic-value-5' },
      ]
      const pageSize = 2
      const pageNumber = 3
      expect(paginate({ array, pageSize, pageNumber })).toEqual([array[4]])
    })
  })

  describe('setNewIndexItemsOnMove()', () => {
    const { setNewIndexItemsOnMove } = index

    test('must not be able to move backwards when at start', () => {
      expect(
        setNewIndexItemsOnMove({
          currentPage: {
            canMoveBackwards: false,
            canMoveForward: true,
            currentIndex: 0,
            indexItems: [
              { index: 0, isCurrent: true },
              { index: 1, isCurrent: false },
              { index: 2, isCurrent: false },
            ],
          },
          onBackwards: true,
        }),
      ).toEqual([
        { index: 0, isCurrent: true },
        { index: 1, isCurrent: false },
        { index: 2, isCurrent: false },
      ])
    })

    test('must be able to move forward when at start', () => {
      expect(
        setNewIndexItemsOnMove({
          currentPage: {
            canMoveBackwards: false,
            canMoveForward: true,
            currentIndex: 0,
            indexItems: [
              { index: 0, isCurrent: true },
              { index: 1, isCurrent: false },
              { index: 2, isCurrent: false },
            ],
          },
          onForward: true,
        }),
      ).toEqual([
        { index: 0, isCurrent: false },
        { index: 1, isCurrent: true },
        { index: 2, isCurrent: false },
      ])
    })

    test('must not be able to move forward when at end', () => {
      expect(
        setNewIndexItemsOnMove({
          currentPage: {
            canMoveBackwards: true,
            canMoveForward: false,
            currentIndex: 2,
            indexItems: [
              { index: 0, isCurrent: false },
              { index: 1, isCurrent: false },
              { index: 2, isCurrent: true },
            ],
          },
          onForward: true,
        }),
      ).toEqual([
        { index: 0, isCurrent: false },
        { index: 1, isCurrent: false },
        { index: 2, isCurrent: true },
      ])
    })

    test('must be able to move backwards when at end', () => {
      expect(
        setNewIndexItemsOnMove({
          currentPage: {
            canMoveBackwards: true,
            canMoveForward: false,
            currentIndex: 2,
            indexItems: [
              { index: 0, isCurrent: false },
              { index: 1, isCurrent: false },
              { index: 2, isCurrent: true },
            ],
          },
          onBackwards: true,
        }),
      ).toEqual([
        { index: 0, isCurrent: false },
        { index: 1, isCurrent: true },
        { index: 2, isCurrent: false },
      ])
    })
  })
})

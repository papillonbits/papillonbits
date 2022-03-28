import * as index from '../index'

describe('index', () => {
  describe('constants', () => {
    test('must return all sort constants', () => {
      expect(index).toHaveProperty('sortOrder')
      expect(index).toHaveProperty('sortDefault')
    })
  })

  describe('getSort()', () => {
    const { sortOrder, sortDefault, getSort } = index

    test('must return newSort with sortDefault order when currentSort equals sortDefault', () => {
      const currentSort = sortDefault

      const newSort = { index: 1, order: sortOrder.descending, value: 'fantastic-new-value' }

      expect(getSort({ currentSort, newSort })).toEqual({
        index: newSort.index,
        order: sortDefault.order,
        value: newSort.value,
      })
    })

    test('must return newSort with order reversed from ascending to descending when currentSort index equals newSort index', () => {
      const currentSort = { index: 1, order: sortOrder.ascending, value: 'fantastic-current-value' }

      const newSort = { index: 1, order: sortOrder.ascending, value: 'fantastic-new-value' }

      expect(getSort({ currentSort, newSort })).toEqual({
        index: newSort.index,
        order: sortOrder.descending,
        value: newSort.value,
      })
    })

    test('must return newSort with order reversed from descending to ascending when currentSort index equals newSort index', () => {
      const currentSort = { index: 1, order: sortOrder.descending, value: 'fantastic-current-value' }

      const newSort = { index: 1, order: sortOrder.ascending, value: 'fantastic-new-value' }

      expect(getSort({ currentSort, newSort })).toEqual({
        index: newSort.index,
        order: sortOrder.ascending,
        value: newSort.value,
      })
    })

    test('must return newSort with sortDefault order when currentSort not equal sortDefault and currentSort index not equal newSort index', () => {
      const currentSort = { index: 0, order: sortOrder.ascending, value: 'fantastic-current-value' }

      const newSort = { index: 1, order: sortOrder.descending, value: 'fantastic-new-value' }

      expect(getSort({ currentSort, newSort })).toEqual({ index: newSort.index, order: sortDefault.order, value: newSort.value })
    })
  })
})

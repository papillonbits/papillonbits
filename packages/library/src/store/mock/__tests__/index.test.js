import { getAppMockStore } from '../index'

describe('index', () => {
  describe('getAppMockStore()', () => {
    const customDataObject = { someCustomData: 'fantastic-custom-data' }

    test('must return a store with custom data when custom data provided', () => {
      const store = getAppMockStore(customDataObject)

      expect(store.getState()).toMatchObject(customDataObject)
    })
  })
})

describe('index', () => {
  describe('isBrowser', () => {
    // let windowMockObject

    // beforeEach(() => {
    //   windowMockObject = jest.spyOn(window, 'window', 'get')
    // })

    afterEach(() => {
      // windowMockObject.mockRestore()
      jest.resetModules()
    })

    test('must return true when there is a window object', async () => {
      // windowMockObject.mockReturnValue({})
      window = {} // eslint-disable-line
      const { isBrowser } = await import('../index')
      expect(isBrowser).toBeTruthy()
    })

    test('must return false when there is no window object', async () => {
      // windowMockObject.mockReturnValue(undefined)
      window = undefined // eslint-disable-line
      const { isBrowser } = await import('../index')
      expect(isBrowser).toBeFalsy()
    })
  })
})

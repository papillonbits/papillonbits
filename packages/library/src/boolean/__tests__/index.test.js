import { getRandomBoolean } from '../index'

describe('index', () => {
  describe('getRandomBoolean()', () => {
    test('must return true when Math.random() return value is greater than 0.5', () => {
      jest.spyOn(Math, 'random').mockReturnValue(0.7)
      expect(getRandomBoolean()).toBeTruthy()
    })

    test('must return true when Math.random() return value is less than 0.5', () => {
      jest.spyOn(Math, 'random').mockReturnValue(0.3)
      expect(getRandomBoolean()).toBeFalsy()
    })
  })
})

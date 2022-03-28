import { getCapizalizedString } from '../index'

describe('index', () => {
  describe('getCapizalizedString()', () => {
    test('must return a capitalized string', () => {
      expect(getCapizalizedString({ string: 'fantastic-string', separator: '-' })).toEqual('Fantastic String')
    })
  })
})

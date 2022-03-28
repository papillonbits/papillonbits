import { regular, regularMultipleParagraphs, info, warning, error, success, consent, consentWithInput } from './Alert.int.story'

describe('<Alert />', () => {
  describe('Render', () => {
    test('must match regular()', () => {
      expect(global.renderToJSON(regular())).toMatchSnapshot()
    })

    test('must match regularMultipleParagraphs()', () => {
      expect(global.renderToJSON(regularMultipleParagraphs())).toMatchSnapshot()
    })

    test('must match info()', () => {
      expect(global.renderToJSON(info())).toMatchSnapshot()
    })

    test('must match warning()', () => {
      expect(global.renderToJSON(warning())).toMatchSnapshot()
    })

    test('must match error()', () => {
      expect(global.renderToJSON(error())).toMatchSnapshot()
    })

    test('must match success()', () => {
      expect(global.renderToJSON(success())).toMatchSnapshot()
    })

    test('must match consent()', () => {
      expect(global.renderToJSON(consent())).toMatchSnapshot()
    })

    test('must match consentWithInput()', () => {
      expect(global.renderToJSON(consentWithInput())).toMatchSnapshot()
    })
  })
})

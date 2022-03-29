import {
  radioWithSelection,
  radioWithSelectionInactive,
  radioWithoutSelection,
  radioWithoutSelectionInactive,
  checkboxWithSelection,
  checkboxWithSelectionInactive,
  checkboxWithoutSelection,
  checkboxWithoutSelectionInactive,
} from './FlexGrid.int.story'

describe('<FlexGrid />', () => {
  describe('Render', () => {
    test('must match radioWithSelection()', () => {
      expect(global.renderToJSON(radioWithSelection())).toMatchSnapshot()
    })

    test('must match radioWithSelectionInactive()', () => {
      expect(global.renderToJSON(radioWithSelectionInactive())).toMatchSnapshot()
    })

    test('must match radioWithoutSelection()', () => {
      expect(global.renderToJSON(radioWithoutSelection())).toMatchSnapshot()
    })

    test('must match radioWithoutSelectionInactive()', () => {
      expect(global.renderToJSON(radioWithoutSelectionInactive())).toMatchSnapshot()
    })

    test('must match checkboxWithSelection()', () => {
      expect(global.renderToJSON(checkboxWithSelection())).toMatchSnapshot()
    })

    test('must match checkboxWithSelectionInactive()', () => {
      expect(global.renderToJSON(checkboxWithSelectionInactive())).toMatchSnapshot()
    })

    test('must match checkboxWithoutSelection()', () => {
      expect(global.renderToJSON(checkboxWithoutSelection())).toMatchSnapshot()
    })

    test('must match checkboxWithoutSelectionInactive()', () => {
      expect(global.renderToJSON(checkboxWithoutSelectionInactive())).toMatchSnapshot()
    })
  })
})

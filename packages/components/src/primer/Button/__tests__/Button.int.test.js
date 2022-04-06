import {
  defaultNormal,
  defaultSmall,
  defaultLarge,
  defaultInactive,
  defaultIconLeftAligned,
  defaultIconRightAligned,
  defaultLink,
  primary,
  primarySmall,
  primaryLarge,
  primaryInactive,
  primaryIconLeftAligned,
  primaryIconRightAligned,
  danger,
  dangerSmall,
  dangerLarge,
  dangerInactive,
  dangerIconLeftAligned,
  dangerIconRightAligned,
  outline,
  outlineSmall,
  outlineLarge,
  outlineInactive,
  outlineIconLeftAligned,
  outlineIconRightAligned,
  blue,
  blueSmall,
  blueLarge,
  blueInactive,
  blueIconLeftAligned,
  blueIconRightAligned,
  orange,
  orangeSmall,
  orangeLarge,
  orangeInactive,
  orangeIconLeftAligned,
  orangeIconRightAligned,
} from './Button.int.story'

describe('<Button />', () => {
  describe('Render', () => {
    test('must match defaultNormal()', () => {
      expect(global.renderToJSON(defaultNormal())).toMatchSnapshot()
    })

    test('must match defaultSmall()', () => {
      expect(global.renderToJSON(defaultSmall())).toMatchSnapshot()
    })

    test('must match defaultLarge()', () => {
      expect(global.renderToJSON(defaultLarge())).toMatchSnapshot()
    })

    test('must match defaultInactive()', () => {
      expect(global.renderToJSON(defaultInactive())).toMatchSnapshot()
    })

    test('must match defaultIconLeftAligned()', () => {
      expect(global.renderToJSON(defaultIconLeftAligned())).toMatchSnapshot()
    })

    test('must match defaultIconRightAligned()', () => {
      expect(global.renderToJSON(defaultIconRightAligned())).toMatchSnapshot()
    })

    test('must match defaultLink()', () => {
      expect(global.renderToJSON(defaultLink())).toMatchSnapshot()
    })

    test('must match primary()', () => {
      expect(global.renderToJSON(primary())).toMatchSnapshot()
    })

    test('must match primarySmall()', () => {
      expect(global.renderToJSON(primarySmall())).toMatchSnapshot()
    })

    test('must match primaryLarge()', () => {
      expect(global.renderToJSON(primaryLarge())).toMatchSnapshot()
    })

    test('must match primaryInactive()', () => {
      expect(global.renderToJSON(primaryInactive())).toMatchSnapshot()
    })

    test('must match primaryIconLeftAligned()', () => {
      expect(global.renderToJSON(primaryIconLeftAligned())).toMatchSnapshot()
    })

    test('must match primaryIconRightAligned()', () => {
      expect(global.renderToJSON(primaryIconRightAligned())).toMatchSnapshot()
    })

    test('must match danger()', () => {
      expect(global.renderToJSON(danger())).toMatchSnapshot()
    })

    test('must match dangerSmall()', () => {
      expect(global.renderToJSON(dangerSmall())).toMatchSnapshot()
    })

    test('must match dangerLarge()', () => {
      expect(global.renderToJSON(dangerLarge())).toMatchSnapshot()
    })

    test('must match dangerInactive()', () => {
      expect(global.renderToJSON(dangerInactive())).toMatchSnapshot()
    })

    test('must match dangerIconLeftAligned()', () => {
      expect(global.renderToJSON(dangerIconLeftAligned())).toMatchSnapshot()
    })

    test('must match dangerIconRightAligned()', () => {
      expect(global.renderToJSON(dangerIconRightAligned())).toMatchSnapshot()
    })

    test('must match outline()', () => {
      expect(global.renderToJSON(outline())).toMatchSnapshot()
    })

    test('must match outlineSmall()', () => {
      expect(global.renderToJSON(outlineSmall())).toMatchSnapshot()
    })

    test('must match outlineLarge()', () => {
      expect(global.renderToJSON(outlineLarge())).toMatchSnapshot()
    })

    test('must match outlineInactive()', () => {
      expect(global.renderToJSON(outlineInactive())).toMatchSnapshot()
    })

    test('must match outlineIconLeftAligned()', () => {
      expect(global.renderToJSON(outlineIconLeftAligned())).toMatchSnapshot()
    })

    test('must match outlineIconRightAligned()', () => {
      expect(global.renderToJSON(outlineIconRightAligned())).toMatchSnapshot()
    })

    test('must match blue()', () => {
      expect(global.renderToJSON(blue())).toMatchSnapshot()
    })

    test('must match blueSmall()', () => {
      expect(global.renderToJSON(blueSmall())).toMatchSnapshot()
    })

    test('must match blueLarge()', () => {
      expect(global.renderToJSON(blueLarge())).toMatchSnapshot()
    })

    test('must match blueInactive()', () => {
      expect(global.renderToJSON(blueInactive())).toMatchSnapshot()
    })

    test('must match blueIconLeftAligned()', () => {
      expect(global.renderToJSON(blueIconLeftAligned())).toMatchSnapshot()
    })

    test('must match blueIconRightAligned()', () => {
      expect(global.renderToJSON(blueIconRightAligned())).toMatchSnapshot()
    })

    test('must match orange()', () => {
      expect(global.renderToJSON(orange())).toMatchSnapshot()
    })

    test('must match orangeSmall()', () => {
      expect(global.renderToJSON(orangeSmall())).toMatchSnapshot()
    })

    test('must match orangeLarge()', () => {
      expect(global.renderToJSON(orangeLarge())).toMatchSnapshot()
    })

    test('must match orangeInactive()', () => {
      expect(global.renderToJSON(orangeInactive())).toMatchSnapshot()
    })

    test('must match orangeIconLeftAligned()', () => {
      expect(global.renderToJSON(orangeIconLeftAligned())).toMatchSnapshot()
    })

    test('must match orangeIconRightAligned()', () => {
      expect(global.renderToJSON(orangeIconRightAligned())).toMatchSnapshot()
    })
  })
})

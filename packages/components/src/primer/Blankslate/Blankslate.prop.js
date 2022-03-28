import { string, oneOf, bool } from 'prop-types'

export const blankslateVariant = {
  default: 'default',
  narrow: 'narrow',
  capped: 'capped',
  spacious: 'spacious',
  large: 'large',
}

export const propTypes = {
  className: string,
  heading: string.isRequired,
  text: string.isRequired,
  variant: oneOf(Object.keys(blankslateVariant)),
  hasCleanBackground: bool,
}

export const defaultProps = {
  className: null,
  variant: blankslateVariant.default,
  hasCleanBackground: false,
}

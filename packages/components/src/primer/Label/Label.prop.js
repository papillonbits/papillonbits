import { string, oneOf } from 'prop-types'

export const labelVariant = {
  regular: 'regular',
  state: 'state',
  counter: 'counter',
  issue: 'issue',
}

export const labelBackgroundColor = {
  blue: 'blue',
  red: 'red',
  green: 'green',
}

export const labelTextColor = {
  white: 'white',
}

export const propTypes = {
  className: string,
  text: string.isRequired,
  variant: oneOf(Object.keys(labelVariant)),
  backgroundColor: oneOf(Object.keys(labelBackgroundColor)),
  textColor: oneOf(Object.keys(labelTextColor)),
}

export const defaultProps = {
  className: null,
  variant: labelVariant.issue,
  backgroundColor: labelBackgroundColor.blue,
  textColor: labelTextColor.white,
}

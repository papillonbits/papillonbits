import { string, oneOf } from 'prop-types'

export const loaderVariant = {
  heading: 'heading',
  text: 'text',
  label: 'label',
  button: 'button',
}

export const propTypes = {
  className: string,
  variant: oneOf(Object.keys(loaderVariant)).isRequired,
  text: string.isRequired,
}

export const defaultProps = {
  className: null,
}

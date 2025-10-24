import { string, oneOf, shape, func, bool } from 'prop-types'
import { iconName } from '../Icon/Icon.prop'

export const buttonElement = {
  button: 'button',
  a: 'a',
}

export const buttonVariant = {
  default: 'default',
  primary: 'primary',
  danger: 'danger',
  outline: 'outline',
  blue: 'blue',
  orange: 'orange',
}

export const buttonSize = {
  small: 'small',
  normal: 'normal',
  large: 'large',
}

export const buttonState = {
  active: 'active',
  inactive: 'inactive',
}

export const iconAlignment = {
  left: 'left',
  right: 'right',
}

export const buttonInputType = {
  file: 'file',
}

export const propTypes = {
  dataTest: string,
  id: string,
  className: string,
  element: oneOf(Object.keys(buttonElement)),
  href: string,
  text: string.isRequired,
  variant: oneOf(Object.keys(buttonVariant)),
  size: oneOf(Object.keys(buttonSize)),
  state: oneOf(Object.keys(buttonState)),
  icon: shape({
    name: oneOf(Object.keys(iconName)).isRequired,
    alignment: oneOf(Object.keys(iconAlignment)),
  }),
  onClick: func.isRequired,
  inputType: oneOf(Object.keys(buttonInputType)),
  autoFocus: bool,
}

export const defaultProps = {
  dataTest: null,
  id: null,
  className: null,
  element: buttonElement.button,
  href: null,
  variant: buttonVariant.default,
  size: buttonSize.normal,
  state: buttonState.active,
  icon: null,
  inputType: null,
  autoFocus: false,
}

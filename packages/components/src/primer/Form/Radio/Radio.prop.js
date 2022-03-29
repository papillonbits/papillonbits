import { string, oneOf, bool, func } from 'prop-types'

export const radioState = {
  active: 'active',
  inactive: 'inactive',
}

export const inputType = {
  radio: 'radio',
}

export const propTypes = {
  dataTest: string,
  className: string,
  htmlFor: string,
  inputType: oneOf(Object.keys(inputType)),
  name: string.isRequired,
  isChecked: bool,
  text: string,
  onChange: func.isRequired,
  state: oneOf(Object.keys(radioState)),
}

export const defaultProps = {
  dataTest: null,
  className: null,
  htmlFor: 'checkbox',
  inputType: inputType.radio,
  isChecked: false,
  text: null,
  state: radioState.active,
}

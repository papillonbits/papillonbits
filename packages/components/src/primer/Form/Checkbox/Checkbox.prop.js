import { string, shape, oneOf, bool, func } from 'prop-types'

export const checkboxState = {
  active: 'active',
  inactive: 'inactive',
}

export const inputType = {
  checkbox: 'checkbox',
}

export const propTypes = {
  dataTest: string,
  className: string,
  htmlFor: string,
  ariaAttr: shape({
    describedBy: string,
  }).isRequired,
  inputType: oneOf(Object.keys(inputType)),
  isChecked: bool,
  text: string,
  onChange: func.isRequired,
  state: oneOf(Object.keys(checkboxState)),
}

export const defaultProps = {
  dataTest: null,
  className: null,
  htmlFor: 'checkbox',
  inputType: inputType.checkbox,
  isChecked: false,
  text: null,
  state: checkboxState.active,
}

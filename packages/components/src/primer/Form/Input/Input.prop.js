import { string, shape, oneOf, func } from 'prop-types'

export const inputState = {
  active: 'active',
  inactive: 'inactive',
}

export const inputType = {
  text: 'text',
  password: 'password',
}

export const propTypes = {
  dataTest: string,
  id: string,
  className: string,
  placeholder: string,
  ariaAttr: shape({
    label: string,
  }),
  inputType: oneOf(Object.keys(inputType)),
  initialValue: string,
  onChange: func.isRequired,
  onKeyUp: func.isRequired,
  onFocus: func,
  onBlur: func,
  state: oneOf(Object.keys(inputState)),
}

export const defaultProps = {
  dataTest: null,
  id: null,
  className: null,
  placeholder: null,
  ariaAttr: {
    input: '',
  },
  inputType: inputType.text,
  initialValue: null,
  onFocus: () => {},
  onBlur: () => {},
  state: inputState.active,
}

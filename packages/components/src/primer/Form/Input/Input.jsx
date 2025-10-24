import cx from 'classnames'
import { propTypes, defaultProps, inputState } from './Input.prop'
import styles from './Input.scss'
import formStyles from '../index.scss'

export function Input({
  dataTest = defaultProps.dataTest,
  id = defaultProps.id,
  className = defaultProps.className,
  placeholder = defaultProps.placeholder,
  ariaAttr = defaultProps.ariaAttr,
  inputType = defaultProps.inputType,
  value,
  onChange,
  onKeyUp,
  onFocus = defaultProps.onFocus,
  onBlur = defaultProps.onBlur,
  autoFocus,
  state = defaultProps.state,
}) {
  return (
    <input
      data-test={dataTest}
      id={id}
      className={cx(className, formStyles['form-control'], {
        [styles['input-inactive']]: state === inputState.inactive,
      })}
      value={value}
      onChange={(event) => {
        onChange(event)
      }}
      onKeyUp={(event) => {
        onKeyUp(event)
      }}
      onFocus={onFocus}
      onBlur={onBlur}
      type={inputType}
      placeholder={placeholder}
      aria-label={ariaAttr.label}
      autoFocus={autoFocus} // eslint-disable-line
    />
  )
}

Input.propTypes = propTypes

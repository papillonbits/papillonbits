import cx from 'classnames'
import marginStyles from '@papillonbits/css/build/primer/utilities/margin.scss'
import { propTypes, defaultProps, checkboxState } from './Checkbox.prop'
import styles from './Checkbox.scss'
import formStyles from '../index.scss'

export function Checkbox({
  dataTest = defaultProps.dataTest,
  className = defaultProps.className,
  htmlFor = defaultProps.htmlFor,
  ariaAttr,
  inputType = defaultProps.inputType,
  isChecked = defaultProps.isChecked,
  text = defaultProps.text,
  onChange,
  state = defaultProps.state,
}) {
  const { describedBy } = ariaAttr

  return (
    <div
      data-test={dataTest}
      className={cx(className, marginStyles['m-0'], formStyles['form-checkbox'], {
        [styles['checkbox-inactive']]: state === checkboxState.inactive,
      })}
    >
      <label htmlFor={htmlFor}>
        <input
          type={inputType}
          aria-describedby={describedBy}
          onChange={(event) => {
            onChange(event)
          }}
          checked={isChecked}
        />
        {text}
      </label>
    </div>
  )
}

Checkbox.propTypes = propTypes

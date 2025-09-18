import cx from 'classnames'
import marginStyles from '@papillonbits/css/build/primer/utilities/margin.scss'
import { propTypes, defaultProps, checkboxState } from './Checkbox.prop'
import styles from './Checkbox.scss'
import formStyles from '../index.scss'

export function Checkbox({ dataTest, className, htmlFor, ariaAttr, inputType, isChecked, text, onChange, state }) {
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

Checkbox.defaultProps = defaultProps

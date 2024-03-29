import cx from 'classnames'
import marginStyles from '@papillonbits/css/build/primer/utilities/margin.scss'
import { propTypes, defaultProps, radioState } from './Radio.prop'
import styles from './Radio.scss'
import formStyles from '../index.scss'

export function Radio({ dataTest, className, htmlFor, inputType, name, isChecked, text, onChange, state }) {
  return (
    <div
      data-test={dataTest}
      className={cx(className, marginStyles['m-0'], formStyles['form-checkbox'], {
        [styles['radio-inactive']]: state === radioState.inactive,
      })}
    >
      <label htmlFor={htmlFor}>
        <input
          type={inputType}
          name={name}
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

Radio.propTypes = propTypes

Radio.defaultProps = defaultProps

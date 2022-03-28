import cx from 'classnames'
import { propTypes, defaultProps } from './Button.prop'
import styles from './Button.scss'

export function Button({ className, text }) {
  return (
    <button className={cx(className, styles.btn)} type="button">
      {text}
    </button>
  )
}

Button.propTypes = propTypes

Button.defaultProps = defaultProps

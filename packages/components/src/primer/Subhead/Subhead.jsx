import cx from 'classnames'
import { propTypes, defaultProps } from './Subhead.prop'
import styles from './Subhead.scss'

export function Subhead({ className, heading, isSpacious }) {
  return (
    <div
      className={cx(className, styles.Subhead, {
        [styles['Subhead--spacious']]: isSpacious === true,
      })}
    >
      <div className={styles['Subhead-heading']}>{heading}</div>
    </div>
  )
}

Subhead.propTypes = propTypes

Subhead.defaultProps = defaultProps

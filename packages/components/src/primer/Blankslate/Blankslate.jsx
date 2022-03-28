import cx from 'classnames'
import { propTypes, defaultProps, blankslateVariant } from './Blankslate.prop'
import styles from './Blankslate.scss'

export function Blankslate({ className, heading, text, variant, hasCleanBackground }) {
  return (
    <div
      className={cx(className, styles.blankslate, {
        [styles['blankslate-narrow']]: variant === blankslateVariant.narrow,
        [styles['blankslate-capped']]: (variant === blankslateVariant.capped) === true,
        [styles['blankslate-spacious']]: variant === blankslateVariant.spacious,
        [styles['blankslate-large']]: variant === blankslateVariant.large,
        [styles['blankslate-clean-background']]: hasCleanBackground === true,
      })}
    >
      <h3>{heading}</h3>
      <p>{text}</p>
    </div>
  )
}

Blankslate.propTypes = propTypes

Blankslate.defaultProps = defaultProps

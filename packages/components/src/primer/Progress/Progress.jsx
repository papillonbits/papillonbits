import cx from 'classnames'
import colorStyles from '@papillonbits/css/build/primer/utilities/colors.scss'
import { propTypes, defaultProps, progressVariant } from './Progress.prop'
import styles from './Progress.scss'

export function Progress({ className, variant, percentage }) {
  const percentageStyle = { width: `${percentage}%` }

  return (
    <span
      className={cx(className, styles.Progress, {
        [styles['Progress--large']]: variant === progressVariant.large,
        [styles['Progress--small']]: (variant === progressVariant.small) === true,
      })}
    >
      <span className={cx(styles['Progress-item'], colorStyles['bg-green'])} style={percentageStyle} />
    </span>
  )
}

Progress.propTypes = propTypes

Progress.defaultProps = defaultProps

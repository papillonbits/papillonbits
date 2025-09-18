import cx from 'classnames'
// import paddingStyles from '@papillonbits/css/build/primer/utilities/padding.scss'
import paddingStyles from '../../../../css/src/primer/utilities/padding.scss'
import { propTypes, defaultProps, toastVariant } from './Toast.prop'
import styles from './Toast.scss'
import { Icon, iconName, iconSize } from '../Icon'

export function Toast({ className, variant, text, isDismissable, onClick }) {
  return (
    <div className={cx(className, paddingStyles['p-1'])}>
      <div
        className={cx(styles.Toast, {
          [styles['Toast--success']]: variant === toastVariant.success,
          [styles['Toast--warning']]: variant === toastVariant.warning,
          [styles['Toast--error']]: variant === toastVariant.error,
        })}
      >
        <span className={styles['Toast-icon']}>
          {variant === toastVariant.info && <Icon icon={iconName.Info16} />}
          {variant === toastVariant.success && <Icon icon={iconName.Check16} />}
          {variant === toastVariant.warning && <Icon icon={iconName.Alert16} />}
          {variant === toastVariant.error && <Icon icon={iconName.Stop16} />}
        </span>
        <span className={styles['Toast-content']}>{text}</span>
        {isDismissable && (
          <button type="button" className={styles['Toast-dismissButton']} onClick={onClick}>
            <Icon icon={iconName.X16} size={iconSize.small} />
          </button>
        )}
      </div>
    </div>
  )
}

Toast.propTypes = propTypes

Toast.defaultProps = defaultProps

import cx from 'classnames'
import { useRef } from '@papillonbits/library/hooks'
// import utilityStyles from '@papillonbits/css/build/primer/utilities/margin.scss'
import utilityStyles from '../../../../css/src/primer/utilities/margin.scss'
import {
  propTypes,
  defaultProps,
  buttonElement,
  buttonVariant,
  buttonSize,
  buttonState,
  iconAlignment,
  buttonInputType,
} from './Button.prop'
import styles from './Button.scss'
import { Icon, iconSize } from '../Icon'

export function Button({ dataTest, id, className, element, href, text, variant, size, state, icon, onClick, inputType, autoFocus }) {
  const stateProps = state === buttonState.inactive ? { ...{ disabled: 'true', 'aria-disabled': 'true' } } : null
  const fileInputRef = useRef(null)

  if (element === buttonElement.button) {
    return (
      <button
        data-test={dataTest}
        id={id}
        className={cx(className, styles.btn, {
          [styles['btn-sm']]: size === buttonSize.small,
          [styles['btn-large']]: size === buttonSize.large,
          [styles['btn-primary']]: variant === buttonVariant.primary,
          [styles['btn-danger']]: variant === buttonVariant.danger,
          [styles['btn-outline']]: variant === buttonVariant.outline,
          [styles['btn-blue']]: variant === buttonVariant.blue,
          [styles['btn-orange']]: variant === buttonVariant.orange,
          [styles['button-inactive']]: state === buttonState.inactive,
        })}
        type="button"
        autoFocus={autoFocus} // eslint-disable-line
        onClick={() => {
          if (inputType === buttonInputType.file) {
            fileInputRef.current.click()
          }
          if (!inputType) {
            onClick()
          }
        }}
        {...stateProps}
      >
        {icon?.alignment === iconAlignment.left && <Icon className={utilityStyles['mr-2']} icon={icon.name} size={iconSize.small} />}
        {text}
        {icon?.alignment === iconAlignment.right && <Icon className={utilityStyles['ml-2']} icon={icon.name} size={iconSize.small} />}
        {inputType && inputType === buttonInputType.file && (
          <input
            onChange={() => {
              onClick(fileInputRef.current.files)
            }}
            ref={fileInputRef}
            type="file"
            autoFocus={autoFocus} // eslint-disable-line
            multiple
            style={{ display: 'none' }}
          />
        )}
      </button>
    )
  }

  if (element === buttonElement.a) {
    return (
      <a className={cx(className, styles.btn)} href={href} role="button" onClick={onClick} {...stateProps}>
        {text}
      </a>
    )
  }
}

Button.propTypes = propTypes

Button.defaultProps = defaultProps

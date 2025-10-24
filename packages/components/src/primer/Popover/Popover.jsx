import cx from 'classnames'
import boxShadowStyles from '@papillonbits/css/build/primer/utilities/box-shadow.scss'
import layoutStyles from '@papillonbits/css/build/primer/utilities/layout.scss'
import marginStyles from '@papillonbits/css/build/primer/utilities/margin.scss'
import paddingStyles from '@papillonbits/css/build/primer/utilities/padding.scss'
import typographyStyles from '@papillonbits/css/build/primer/utilities/typography.scss'
import boxStyles from '../Box/box.scss'
import { propTypes, defaultProps, popoverVariant, popoverSize } from './Popover.prop'
import styles from './Popover.scss'
import { Button, buttonVariant } from '../Button'

export function Popover({
  className = defaultProps.className,
  variant = defaultProps.variant,
  size = defaultProps.size,
  intro,
  heading,
  message,
  acknowledge,
  introOnClick,
  acknowledgeOnClick,
}) {
  return (
    <div
      className={cx(className, layoutStyles['position-relative'], {
        [typographyStyles['text-center']]: variant === popoverVariant.default || variant === popoverVariant.bottom,
        [cx(typographyStyles['text-right'], paddingStyles['pr-2'])]: variant === popoverVariant.bottomRight,
      })}
    >
      {variant === popoverVariant.default && <Button variant={buttonVariant.primary} text={intro} onClick={introOnClick} />}
      <div
        className={
          (cx(styles.Popover, layoutStyles['position-relative']),
          {
            [cx(layoutStyles['right-0'], layoutStyles['left-0'])]: variant === popoverVariant.default,
            [paddingStyles['pl-2']]: variant === popoverVariant.bottomLeft,
          })
        }
      >
        <div
          className={cx(
            styles['Popover-message'],
            typographyStyles['text-left'],
            paddingStyles['p-4'],
            boxStyles.Box,
            boxShadowStyles['box-shadow-large'],
            {
              [cx(marginStyles['mx-auto'], marginStyles['mt-2'])]: variant === popoverVariant.default,
              [cx(styles['Popover-message--bottom'], marginStyles['mx-auto'], marginStyles['mb-2'])]: variant === popoverVariant.bottom,
              [cx(styles['Popover-message--bottom-right'], marginStyles['mb-2'])]: variant === popoverVariant.bottomRight,
              [cx(styles['Popover-message--bottom-left'], marginStyles['mb-2'])]: variant === popoverVariant.bottomLeft,
              [styles['Popover-message--left']]: variant === popoverVariant.left,
              [styles['Popover-message--left-bottom']]: variant === popoverVariant.leftBottom,
              [styles['Popover-message--left-top']]: variant === popoverVariant.leftTop,
              [styles['Popover-message--right']]: variant === popoverVariant.right,
              [styles['Popover-message--right-bottom']]: variant === popoverVariant.rightBottom,
              [styles['Popover-message--right-top']]: variant === popoverVariant.rightTop,
              [styles['Popover-message--top-left']]: variant === popoverVariant.topLeft,
              [styles['Popover-message--top-right']]: variant === popoverVariant.topRight,
              [styles['Popover-message--large']]: size === popoverSize.large,
            },
          )}
        >
          <h4 className={marginStyles['mb-2']}>{heading}</h4>
          <p>{message}</p>
          <Button
            className={cx(marginStyles['mt-2'], typographyStyles['text-bold'])}
            text={acknowledge}
            variant={buttonVariant.outline}
            onClick={acknowledgeOnClick}
          />
        </div>
      </div>
      {(variant === popoverVariant.bottom || variant === popoverVariant.bottomRight || variant === popoverVariant.bottomLeft) && (
        <Button variant={buttonVariant.primary} text={intro} onClick={introOnClick} />
      )}
    </div>
  )
}

Popover.propTypes = propTypes

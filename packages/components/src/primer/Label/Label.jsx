import cx from 'classnames'
import colorStyles from '@papillonbits/css/build/primer/utilities/colors.scss'
import { propTypes, defaultProps, labelVariant, labelBackgroundColor, labelTextColor } from './Label.prop'
import labelsStyles from './labels.scss'
import issueLabelsStyles from './issue-labels.scss'

export function Label({
  className = defaultProps.className,
  text,
  variant = defaultProps.variant,
  backgroundColor = defaultProps.backgroundColor,
  textColor = defaultProps.textColor,
}) {
  return (
    <span
      title={`Label: ${text}`}
      className={cx(className, {
        [labelsStyles.Label]: variant === labelVariant.regular,
        [issueLabelsStyles.IssueLabel]: variant === labelVariant.issue,
        [colorStyles['bg-blue']]: backgroundColor === labelBackgroundColor.blue,
        [colorStyles['text-white']]: textColor === labelTextColor.white,
      })}
    >
      {text}
    </span>
  )
}

Label.propTypes = propTypes

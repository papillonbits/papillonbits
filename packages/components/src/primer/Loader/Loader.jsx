import cx from 'classnames'
// import colorStyles from '@papillonbits/css/build/primer/utilities/colors.scss'
// import marginStyles from '@papillonbits/css/build/primer/utilities/margin.scss'
import colorStyles from '../../../../css/src/primer/utilities/colors.scss'
import marginStyles from '../../../../css/src/primer/utilities/margin.scss'
import { propTypes, defaultProps, loaderVariant } from './Loader.prop'
import styles from './Loader.scss'
import branchNameStyles from '../BranchName/branch-name.scss'
import buttonStyles from '../Button/Button.scss'
import labelStyles from '../Label/labels.scss'

export function Loader({ className, variant, text }) {
  switch (variant) {
    case loaderVariant.heading:
      return (
        <h2 className={className}>
          <span>{text}</span>
          <span className={styles.AnimatedEllipsis} />
        </h2>
      )
    case loaderVariant.text:
      return (
        <span className={cx(branchNameStyles['branch-name'], marginStyles['mt-2'])}>
          <span>{text}</span>
          <span className={styles.AnimatedEllipsis} />
        </span>
      )
    case loaderVariant.label:
      return (
        <span className={cx(labelStyles.Label, colorStyles['bg-blue'], marginStyles['mt-3'])}>
          <span>{text}</span>
          <span className={styles.AnimatedEllipsis} />
        </span>
      )
    case loaderVariant.button:
      return (
        <button type="button" className={cx(buttonStyles.btn, marginStyles['mt-3'])} aria-disabled="true">
          <span>{text}</span>
          <span className={styles.AnimatedEllipsis} />
        </button>
      )
    default:
      return null
  }
}

Loader.propTypes = propTypes

Loader.defaultProps = defaultProps

import cx from 'classnames'
import displayStyles from '@papillonbits/css/build/primer/utilities/visibility-display.scss'
import { paginationActionTypes } from '@papillonbits/library/pagination'
import { propTypes, defaultProps, previousNextState } from './PreviousNext.prop'
import styles from './PreviousNext.scss'

export function PreviousNext({ className, ariaAttr, currentPage, previous, next, onClick, state }) {
  const { label } = ariaAttr

  const { indexItems, currentIndex, canMoveBackwards, canMoveForward } = currentPage
  const backwardsAriaProps = !canMoveBackwards ? { ...{ 'aria-disabled': 'true' } } : null
  const forwardAriaProps = !canMoveForward ? { ...{ 'aria-disabled': 'true' } } : null

  if (indexItems === [] || currentIndex === -1) {
    return null
  }

  return (
    <nav
      className={cx(className, styles['paginate-container'], {
        [styles['previousnext-inactive']]: state === previousNextState.inactive,
      })}
      aria-label={label}
    >
      <div className={cx(styles.pagination, displayStyles['d-flex'])}>
        {!canMoveBackwards ? (
          <span {...backwardsAriaProps}>{previous.text}</span>
        ) : (
          <a
            onClick={(event) => {
              event.preventDefault()
              onClick(paginationActionTypes.onBackwards)
            }}
            rel={previous.rel}
            href={previous.href}
            aria-label={previous.ariaAttr.label}
          >
            {previous.text}
          </a>
        )}
        <span>{`Viewing ${currentIndex + 1} to ${indexItems.length}`}</span>
        {!canMoveForward ? (
          <span {...forwardAriaProps}>{next.text}</span>
        ) : (
          <a
            onClick={(event) => {
              event.preventDefault()
              onClick(paginationActionTypes.onForward)
            }}
            rel={next.rel}
            href={next.href}
            aria-label={next.ariaAttr.label}
          >
            {next.text}
          </a>
        )}
      </div>
    </nav>
  )
}

PreviousNext.propTypes = propTypes

PreviousNext.defaultProps = defaultProps

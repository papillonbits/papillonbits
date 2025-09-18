/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import cx from 'classnames'
import { v1 as uuidv1 } from 'uuid'
// import utilityStyles from '@papillonbits/css/build/primer/utilities/typography.scss'
import { getIndexItems, getIndexItemsWithSelected } from '@papillonbits/library/array'
import utilityStyles from '../../../../css/src/primer/utilities/typography.scss'
import { propTypes, defaultProps, breadcrumbState } from './Breadcrumb.prop'
import styles from './Breadcrumb.scss'

export function Breadcrumb({ className, ariaAttr, items, onClick, state }) {
  const indexItems = getIndexItems(items)
  const { label, current } = ariaAttr

  return (
    <nav
      className={cx(className, {
        [styles['breadcrumb-inactive']]: state === breadcrumbState.inactive,
      })}
      aria-label={label}
    >
      <ol>
        {indexItems.map((indexItem) => {
          const { href, text, isSelected } = indexItem

          const itemOtherProps = isSelected ? { ...{ 'aria-current': current } } : null

          return (
            <li
              key={uuidv1()}
              onClick={(e) => {
                e.preventDefault()
                const newIndexItems = getIndexItemsWithSelected(indexItems, indexItem)
                onClick({
                  active: text,
                  ariaAttr,
                  items: newIndexItems.map(
                    (newIndexItem) => (({ href, text, isSelected }) => ({ href, text, isSelected }))(newIndexItem), // eslint-disable-line
                  ),
                })
              }}
              className={
                !isSelected
                  ? cx(styles['breadcrumb-item'])
                  : cx(styles['breadcrumb-item'], styles['breadcrumb-item-selected'], utilityStyles['text-gray'])
              }
              href={href}
              {...itemOtherProps}
            >
              {isSelected ? text : <a href={href}>{text}</a>}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}

Breadcrumb.propTypes = propTypes

Breadcrumb.defaultProps = defaultProps

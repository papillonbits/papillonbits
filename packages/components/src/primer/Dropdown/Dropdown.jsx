import cx from 'classnames'
import { v1 as uuidv1 } from 'uuid'
import detailsUtilityStyles from '@papillonbits/css/build/primer/utilities/details.scss'
import displayStyles from '@papillonbits/css/build/primer/utilities/visibility-display.scss'
import layoutStyles from '@papillonbits/css/build/primer/utilities/layout.scss'
import flexboxStyles from '@papillonbits/css/build/primer/utilities/flexbox.scss'
import { getIndexItems, getIndexItemsWithSelected } from '@papillonbits/library/array'
import { useRef } from '@papillonbits/library/hooks'
import buttonStyles from '../Button/Button.scss'
import { propTypes, defaultProps, dropdownState } from './Dropdown.prop'
import styles from './Dropdown.scss'

export function Dropdown({ className, summary, ariaAttr, items, onClick, state }) {
  const details = useRef(null)

  if (!items) {
    return null
  }

  const indexItems = getIndexItems(items)

  return (
    <div className={className}>
      <details
        ref={details}
        className={cx(
          styles.dropdown,
          detailsUtilityStyles['details-reset'],
          detailsUtilityStyles['details-overlay'],
          displayStyles['d-inline-block'],
          {
            [styles['dropdown-inactive']]: state === dropdownState.inactive,
          },
        )}
      >
        <summary className={cx(buttonStyles.btn)} aria-haspopup={ariaAttr?.haspopup ?? false}>
          <div
            className={cx(displayStyles['d-flex'], flexboxStyles['flex-justify-between'], flexboxStyles['flex-items-center'], {
              [styles['dropdown-inactive']]: state === dropdownState.inactive,
            })}
          >
            <div>{summary}</div> <div className={styles['dropdown-caret']} />
          </div>
        </summary>

        <ul className={cx(styles['dropdown-menu'], styles['dropdown-menu-se'], layoutStyles['width-full'])}>
          {indexItems.map((indexItem) => {
            const { href, text, isSelected } = indexItem

            const itemOtherProps = isSelected ? { ...{ 'aria-current': ariaAttr?.current } } : null

            return (
              <li key={uuidv1()}>
                <a
                  onClick={(e) => {
                    e.preventDefault()
                    const newIndexItems = getIndexItemsWithSelected(indexItems, indexItem)
                    onClick({
                      summary: text,
                      ariaAttr,
                      items: newIndexItems.map((newIndexItem) =>
                        (({
                          id: newIndexItemId,
                          href: newIndexItemHref,
                          text: newIndexItemText,
                          'date-modified': dateModified,
                          'date-created': dateCreated,
                          isSelected: newIndexItemIsSelected,
                        }) => ({
                          id: newIndexItemId,
                          href: newIndexItemHref,
                          text: newIndexItemText,
                          'date-modified': dateModified,
                          'date-created': dateCreated,
                          isSelected: newIndexItemIsSelected,
                        }))(newIndexItem),
                      ),
                    })
                    details.current.removeAttribute('open')
                  }}
                  className={styles['dropdown-item']}
                  href={href}
                  {...itemOtherProps}
                >
                  {text}
                </a>
              </li>
            )
          })}
        </ul>
      </details>
    </div>
  )
}

Dropdown.propTypes = propTypes

Dropdown.defaultProps = defaultProps

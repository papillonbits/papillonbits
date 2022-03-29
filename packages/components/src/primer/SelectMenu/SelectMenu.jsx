import cx from 'classnames'
import { v1 as uuidv1 } from 'uuid'
import { getIndexItems, getIndexItemsWithSelected } from '@papillonbits/library/array'
import { useRef, useState } from '@papillonbits/library/hooks'
import utilityStyles from '@papillonbits/css/build/primer/utilities/margin.scss'
import detailsStyles from '@papillonbits/css/build/primer/utilities/details.scss'
import { propTypes, defaultProps } from './SelectMenu.prop'
import styles from './SelectMenu.scss'
import buttonStyles from '../Button/Button.scss'
import { Icon, iconSize } from '../Icon'

export function SelectMenu({ className, summary, icon, title, ariaAttr, items, onClick }) {
  const [indexItems, setIndexItems] = useState(getIndexItems(items))
  const { haspopup } = ariaAttr
  const details = useRef(null)

  return (
    <details ref={details} className={cx(className, detailsStyles['details-reset'], detailsStyles['details-overlay'])}>
      <summary className={cx(buttonStyles.btn, buttonStyles['btn-outline'])} aria-haspopup={haspopup}>
        {summary} <Icon className={cx(utilityStyles['ml-2'])} icon={icon} size={iconSize.small} />
      </summary>
      <div className={styles.SelectMenu}>
        <div className={styles['SelectMenu-modal']}>
          {title && (
            <header className={styles['SelectMenu-header']}>
              <h3 className={styles['SelectMenu-title']}>{title}</h3>
              <button className={styles['SelectMenu-closeButton']} type="button" />
            </header>
          )}
          <div className={styles['SelectMenu-list']}>
            {indexItems.map((indexItem) => {
              const { text } = indexItem

              return (
                <button
                  type="button"
                  key={uuidv1()}
                  onClick={(e) => {
                    e.preventDefault()
                    const newIndexItems = getIndexItemsWithSelected(indexItems, indexItem)
                    setIndexItems(newIndexItems)
                    onClick({
                      ariaAttr,
                      items: newIndexItems.map((newIndexItem) => (({ text, isSelected }) => ({ text, isSelected }))(newIndexItem)), // eslint-disable-line
                    })
                    details.current.removeAttribute('open')
                  }}
                  className={styles['SelectMenu-item']}
                  role="menuitem"
                >
                  {text}
                </button>
              )
            })}
          </div>
        </div>
      </div>
    </details>
  )
}

SelectMenu.propTypes = propTypes

SelectMenu.defaultProps = defaultProps

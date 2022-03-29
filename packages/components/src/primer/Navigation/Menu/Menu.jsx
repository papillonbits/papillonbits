import cx from 'classnames'
import { v1 as uuidv1 } from 'uuid'
import { getIndexItems, getIndexItemsWithSelected } from '@papillonbits/library/array'
import { useState } from '@papillonbits/library/hooks'
import { propTypes, defaultProps } from './Menu.prop'
import styles from './Menu.scss'
import { Icon, iconSize } from '../../Icon'

export function Menu({ className, heading, ariaAttr, items, onClick }) {
  const [indexItems, setIndexItems] = useState(getIndexItems(items))
  const { label, labelledBy, current } = ariaAttr

  return (
    <nav className={cx(className, styles.menu)} aria-label={label} aria-labelledby={labelledBy}>
      {heading && <span className={styles['menu-heading']}>{heading}</span>}
      {indexItems.map((indexItem) => {
        const { href, icon, text, html, isSelected } = indexItem

        const itemOtherProps = isSelected ? { ...{ 'aria-current': current } } : null

        return (
          <a
            key={uuidv1()}
            onClick={(e) => {
              e.preventDefault()
              const newIndexItems = getIndexItemsWithSelected(indexItems, indexItem)
              setIndexItems(newIndexItems)
              onClick(newIndexItems)
            }}
            className={styles['menu-item']}
            href={href}
            {...itemOtherProps}
          >
            {icon && <Icon className={styles.octicon} icon={icon} size={iconSize.small} />}
            {html || null}
            {text}
          </a>
        )
      })}
    </nav>
  )
}

Menu.propTypes = propTypes

Menu.defaultProps = defaultProps

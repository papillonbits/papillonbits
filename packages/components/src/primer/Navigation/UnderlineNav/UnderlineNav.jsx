import { Fragment } from 'react'
import cx from 'classnames'
import { v1 as uuidv1 } from 'uuid'
import { getIndexItems, getIndexItemsWithSelected } from '@papillonbits/library/array'
import { useState } from '@papillonbits/library/hooks'
import { propTypes, defaultProps, underlineNavAlignmentType } from './UnderlineNav.prop'
import styles from './UnderlineNav.scss'
import containerStyles from '../../Layout/container.scss'
import { Icon, iconSize } from '../../Icon'

export function UnderlineNav({
  className = defaultProps.className,
  ariaAttr,
  items,
  itemType,
  actions = defaultProps.actions,
  align = defaultProps.align,
  fullContainer = defaultProps.fullContainer,
  onClick,
}) {
  const [indexItems, setIndexItems] = useState(getIndexItems(items))
  const { label, selected, current } = ariaAttr

  function renderActions() {
    return <div className={styles['UnderlineNav-actions']}>{actions}</div>
  }

  function renderBody() {
    return (
      <Fragment>
        {align === underlineNavAlignmentType.right && actions && renderActions()}
        <div className={styles['UnderlineNav-body']} role="tablist">
          {indexItems.map((indexItem) => {
            const { href, icon, text, html, isSelected } = indexItem
            const anchorOtherProps = isSelected ? { ...{ 'aria-selected': selected } } : null
            const buttonOtherProps = isSelected ? { ...{ 'aria-current': current } } : null

            switch (itemType) {
              case 'button':
                return (
                  <button
                    key={uuidv1()}
                    onClick={(e) => {
                      e.preventDefault()
                      const newIndexItems = getIndexItemsWithSelected(indexItems, indexItem)
                      setIndexItems(newIndexItems)
                      onClick(newIndexItems)
                    }}
                    className={styles['UnderlineNav-item']}
                    role="tab"
                    type="button"
                    href={href}
                    {...anchorOtherProps}
                  >
                    {icon && <Icon className={styles['UnderlineNav-octicon']} icon={icon} size={iconSize.small} />}
                    {html || null}
                    {text}
                  </button>
                )
              case 'a':
                return (
                  <a
                    key={uuidv1()}
                    onClick={(e) => {
                      e.preventDefault()
                      const newIndexItems = getIndexItemsWithSelected(indexItems, indexItem)
                      setIndexItems(newIndexItems)
                      onClick(newIndexItems)
                    }}
                    className={styles['UnderlineNav-item']}
                    href={href}
                    {...buttonOtherProps}
                  >
                    {icon && <Icon className={styles['UnderlineNav-octicon']} icon={icon} size={iconSize.small} />}
                    {html || null}
                    {text}
                  </a>
                )
              default:
                return null
            }
          })}
        </div>
        {align === underlineNavAlignmentType.left && actions && renderActions()}
      </Fragment>
    )
  }

  function renderBodyFullContainer() {
    return <div className={cx(containerStyles['container-lg'], styles['UnderlineNav-container'])}>{renderBody()}</div>
  }

  return (
    <nav
      className={cx(className, styles.UnderlineNav, {
        [styles['UnderlineNav--right']]: align === underlineNavAlignmentType.right,
        [styles['UnderlineNav--full']]: fullContainer === true,
      })}
      aria-label={label}
    >
      {fullContainer === false && renderBody()}
      {fullContainer === true && renderBodyFullContainer()}
    </nav>
  )
}

UnderlineNav.propTypes = propTypes

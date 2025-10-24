import { Fragment } from 'react'
import cx from 'classnames'
import { v1 as uuidv1 } from 'uuid'
import { getIndexItems, getIndexItemsWithSelected } from '@papillonbits/library/array'
import { propTypes, defaultProps, tabNavState } from './TabNav.prop'
import styles from './TabNav.scss'

export function TabNav({
  className = defaultProps.className,
  ariaAttr,
  items,
  actions = defaultProps.actions,
  onClick,
  children = defaultProps.children,
  state = defaultProps.state,
}) {
  if (!items) {
    return null
  }

  const { label, current } = ariaAttr
  const indexItems = getIndexItems(items)

  function renderActions() {
    return <Fragment>{actions}</Fragment> // eslint-disable-line react/jsx-no-useless-fragment
  }

  return (
    <div
      className={cx(className, styles.tabnav, {
        [styles['tabnav-inactive']]: state === tabNavState.inactive,
      })}
    >
      {actions && renderActions()}
      <nav className={styles['tabnav-tabs']} aria-label={label}>
        {indexItems.map((indexItem) => {
          const { href, text, link, isSelected, enabled, visible } = indexItem

          const itemOtherProps = isSelected ? { ...{ 'aria-current': current } } : null

          if (href && text) {
            return (
              <a
                key={uuidv1()}
                onClick={() => {
                  if (!enabled) {
                    return
                  }

                  const newIndexItems = getIndexItemsWithSelected(indexItems, indexItem)
                  onClick({
                    ariaAttr,
                    items: newIndexItems.map(
                      (newIndexItem) => (({ href, text, isSelected }) => ({ href, text, isSelected, enabled, visible }))(newIndexItem), // eslint-disable-line
                    ),
                  })
                }}
                className={styles['tabnav-tab']}
                href={href}
                {...itemOtherProps}
              >
                {text}
              </a>
            )
          }

          if (link) {
            const Link = link.component

            return (
              <Link
                key={uuidv1()}
                onClick={() => {
                  if (!enabled) {
                    return
                  }

                  const newIndexItems = getIndexItemsWithSelected(indexItems, indexItem)
                  onClick({
                    ariaAttr,
                    items: newIndexItems.map(
                      (newIndexItem) =>
                        (({ link, isSelected, enabled, visible }) => ({ link, isSelected, enabled, visible }))(newIndexItem), // eslint-disable-line
                    ),
                  })
                }}
                className={cx(className, styles['tabnav-tab'], {
                  [styles['tabnav-tab-inactive']]: enabled === false,
                  [styles['tabnav-tab-hidden']]: visible === false,
                })}
                {...itemOtherProps}
                {...link.props}
              >
                {link.children}
              </Link>
            )
          }

          return null
        })}
      </nav>
      {children}
    </div>
  )
}

TabNav.propTypes = propTypes

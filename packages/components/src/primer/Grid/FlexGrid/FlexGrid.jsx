import { Fragment } from 'react'
import cx from 'classnames'
import { v1 as uuidv1 } from 'uuid'
import { getCapizalizedString } from '@papillonbits/library/string'
import { sortOrder } from '@papillonbits/library/sort'
import displayStyles from '@papillonbits/css/build/primer/utilities/visibility-display.scss'
import flexboxStyles from '@papillonbits/css/build/primer/utilities/flexbox.scss'
import borderStyles from '@papillonbits/css/build/primer/utilities/borders.scss'
import paddingStyles from '@papillonbits/css/build/primer/utilities/padding.scss'
import marginStyles from '@papillonbits/css/build/primer/utilities/margin.scss'
import typographyStyles from '@papillonbits/css/build/primer/utilities/typography.scss'
import layoutStyles from '@papillonbits/css/build/primer/utilities/layout.scss'
import colorStyles from '@papillonbits/css/build/primer/utilities/colors.scss'
import truncateStyles from '@papillonbits/css/build/primer/truncate/index.scss'
import gridStyles from '../../Layout/grid.scss'
import { propTypes, defaultProps, flexGridSelection, flexGridState } from './FlexGrid.prop'
import styles from './FlexGrid.scss'
import { Radio } from '../../Form/Radio'
import { Checkbox } from '../../Form/Checkbox'
import { Icon, iconName, iconSize } from '../../Icon'

export function FlexGrid({
  className,
  items,
  idIndex,
  isSelectedIndex,
  selection,
  sort,
  onChange,
  onClick,
  onDoubleClick,
  iconColor,
  state,
}) {
  return (
    <div
      className={cx(className, {
        [styles['flexGrid-inactive']]: state === flexGridState.inactive,
      })}
    >
      <div
        className={cx(displayStyles['d-flex'], flexboxStyles['flex-row'], flexboxStyles['flex-items-start'], colorStyles['bg-blue-light'], {
          [borderStyles.border]: items?.[0],
        })}
      >
        {items?.[0]?.names?.map((name, nameIndex) => {
          const isIdColumn = nameIndex === idIndex
          const isSelectedColumn = nameIndex === isSelectedIndex
          const isSelectedComponent =
            selection === flexGridSelection.radio ? null : (
              <Checkbox
                ariaAttr={{ describedBy: name }}
                isChecked={items.map((item) => item.values[1]).every((isSelected) => isSelected === true)}
                onChange={(event) => {
                  const newItems = items
                    ?.map(({ values }) =>
                      values?.map((value, valueIndex) => (valueIndex === isSelectedIndex ? event.target.checked : value)),
                    )
                    .map((newItem) => ({
                      id: newItem[idIndex],
                      isSelected: newItem[isSelectedIndex],
                    }))
                  onChange(newItems)
                }}
              />
            )

          let sortComponent

          if (sort.index === nameIndex && sort.value === name) {
            if (sort.order === sortOrder.ascending) {
              sortComponent = <Icon icon={iconName.TriangleUp16} size={iconSize.small} fill={iconColor.sort} />
            } else {
              sortComponent = <Icon icon={iconName.TriangleDown16} size={iconSize.small} fill={iconColor.sort} />
            }
          }

          return (
            <Fragment key={uuidv1()}>
              {!isIdColumn && (
                <div
                  className={cx(
                    typographyStyles.h6,
                    displayStyles['d-flex'],
                    flexboxStyles['flex-row'],
                    paddingStyles['p-2'],
                    truncateStyles['css-truncate'],
                    truncateStyles['css-truncate-overflow'],
                    styles.item,
                    {
                      [gridStyles['col-2']]: isSelectedColumn,
                      [gridStyles['col-12']]: !isSelectedColumn,
                      [flexboxStyles['flex-justify-center']]: isSelectedColumn,
                      [flexboxStyles['flex-justify-between']]: !isSelectedColumn,
                    },
                  )}
                  onClick={() => {
                    if (!isSelectedColumn) {
                      onClick({
                        index: nameIndex,
                        value: name,
                        order: sort.order,
                      })
                    }
                  }}
                  onKeyPress={() => {}}
                  role="button"
                  tabIndex={0}
                >
                  {isSelectedColumn ? (
                    isSelectedComponent
                  ) : (
                    <div className={cx(displayStyles['d-flex'], flexboxStyles['flex-justify-between'], layoutStyles['width-full'])}>
                      <div className={cx(truncateStyles['css-truncate'], truncateStyles['css-truncate-overflow'])}>
                        {getCapizalizedString({ string: name })}
                      </div>
                      <div className={cx(displayStyles['d-flex'], flexboxStyles['flex-items-start'], marginStyles['ml-1'])}>
                        {sortComponent}
                        {nameIndex < items?.[0]?.names.length - 1 ? ( // eslint-disable-line no-unsafe-optional-chaining
                          <span className={cx(marginStyles['ml-1'], colorStyles['text-gray-light'])}> |</span>
                        ) : null}
                      </div>
                    </div>
                  )}
                </div>
              )}
            </Fragment>
          )
        })}
      </div>
      {items?.map((item, itemIndex) => (
        <div
          key={uuidv1()}
          className={cx(
            displayStyles['d-flex'],
            flexboxStyles['flex-row'],
            flexboxStyles['flex-items-start'],
            borderStyles.border,
            styles.item,
            styles.row,
          )}
          onClick={() => {
            let bubleUpNewItems = true

            const newItems = items
              ?.map(({ values }, newItemIndex) =>
                values?.map((newValue, newValueIndex) => {
                  if (typeof newValue === 'object' && ['FileDirectory16', 'File16'].includes(newValue?.icon)) {
                    bubleUpNewItems = false
                  }
                  return newItemIndex === itemIndex && newValueIndex === isSelectedIndex ? !newValue : newValue
                }),
              )
              .map((newItem) => ({
                id: newItem[idIndex],
                isSelected: newItem[isSelectedIndex],
              }))
            if (bubleUpNewItems) {
              onChange(newItems)
            }
          }}
          onKeyPress={() => {}}
          role="button"
          tabIndex={0}
          onDoubleClick={() => {
            onDoubleClick(itemIndex)
          }}
        >
          {item.values.map((value, valueIndex) => {
            const isIdColumn = valueIndex === idIndex
            const isSelectedColumn = valueIndex === isSelectedIndex
            const isSelectedComponent =
              selection === flexGridSelection.radio ? (
                <Radio
                  name="isSelected"
                  isChecked={item.values[isSelectedIndex] === true}
                  onChange={(event) => {
                    const newItems = items?.map(({ names, values }, newItemIndex) => ({
                      names,
                      values: values.map((newValue, newValueIndex) => {
                        if (newItemIndex === itemIndex && newValueIndex === isSelectedIndex) {
                          return event.target.checked
                        }

                        if (newItemIndex === itemIndex && newValueIndex !== isSelectedIndex) {
                          return newValue
                        }

                        if (newItemIndex !== itemIndex && newValueIndex === isSelectedIndex) {
                          return false
                        }

                        if (newItemIndex !== itemIndex && newValueIndex !== isSelectedIndex) {
                          return newValue
                        }

                        return newValue
                      }),
                    }))
                    onChange(newItems)
                  }}
                />
              ) : (
                <Checkbox
                  ariaAttr={{ describedBy: 'isSelected' }}
                  isChecked={item.values[isSelectedIndex] === true}
                  onChange={(event) => {
                    const newItems = items
                      ?.map(({ values }, newItemIndex) =>
                        values?.map((newValue, newValueIndex) =>
                          newItemIndex === itemIndex && newValueIndex === isSelectedIndex ? event.target.checked : newValue,
                        ),
                      )
                      .map((newItem) => ({
                        id: newItem[idIndex],
                        isSelected: newItem[isSelectedIndex],
                      }))
                    onChange(newItems)
                  }}
                />
              )
            const iconComponent = value?.icon ? <Icon icon={iconName[value.icon]} size={iconSize.small} fill={iconColor.object} /> : null

            return (
              <Fragment key={uuidv1()}>
                {!isIdColumn && (
                  <div
                    key={uuidv1()}
                    className={cx(
                      displayStyles['d-flex'],
                      flexboxStyles['flex-row'],
                      paddingStyles['p-2'],
                      truncateStyles['css-truncate'],
                      truncateStyles['css-truncate-overflow'],
                      typographyStyles['no-wrap'],
                      {
                        [gridStyles['col-2']]: isSelectedColumn,
                        [gridStyles['col-12']]: !isSelectedColumn,
                        [flexboxStyles['flex-justify-center']]: isSelectedColumn,
                        [flexboxStyles['flex-justify-start']]: !isSelectedColumn,
                      },
                    )}
                  >
                    {isSelectedColumn ? (
                      isSelectedComponent
                    ) : (
                      <div className={cx(truncateStyles['css-truncate'], truncateStyles['css-truncate-overflow'])}>
                        {value?.icon && (
                          <Fragment>
                            {iconComponent}
                            <span className={marginStyles['ml-2']}>{value.value}</span>
                          </Fragment>
                        )}
                        {value instanceof Date && `${value.toLocaleDateString()} ${value.toLocaleTimeString()}`}
                        {Array.isArray(value) && value.find(({ isSelected }) => isSelected === true).text}
                        {!value?.icon && !(value instanceof Date) && !Array.isArray(value) && value?.toString()}
                      </div>
                    )}
                  </div>
                )}
              </Fragment>
            )
          })}
        </div>
      ))}
    </div>
  )
}

FlexGrid.propTypes = propTypes

FlexGrid.defaultProps = defaultProps

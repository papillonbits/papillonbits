import { Fragment } from 'react'
import cx from 'classnames'
import { v1 as uuidv1 } from 'uuid'
import displayStyles from '@papillonbits/css/build/primer/utilities/visibility-display.scss'
import borderStyles from '@papillonbits/css/build/primer/utilities/borders.scss'
import paddingStyles from '@papillonbits/css/build/primer/utilities/padding.scss'
import typographyStyles from '@papillonbits/css/build/primer/utilities/typography.scss'
import colorStyles from '@papillonbits/css/build/primer/utilities/colors.scss'
import gridStyles from '../../Layout/grid.scss'
import { propTypes, defaultProps } from './DisplayTable.prop'

export function DisplayTable({ className, items, idIndex, isSelectedIndex }) {
  return (
    <Fragment>
      <div className={cx(className, displayStyles['d-table'], gridStyles['col-12'], colorStyles['bg-blue-light'])}>
        {items[0].names.map((name, index) => {
          const isIdColumn = index === idIndex
          const isSelectedColumn = index === isSelectedIndex

          return (
            <Fragment key={uuidv1()}>
              {!isIdColumn && (
                <div
                  key={uuidv1()}
                  className={cx(
                    gridStyles['col-2'],
                    displayStyles['d-table-cell'],
                    borderStyles.border,
                    paddingStyles['p-2'],
                    typographyStyles.h6,
                  )}
                >
                  {isSelectedColumn ? '' : name}
                </div>
              )}
            </Fragment>
          )
        })}
      </div>
      {items.map((item) => (
        <div key={uuidv1()} className={cx(className, displayStyles['d-table'], gridStyles['col-12'])}>
          {item.values.map((value, valueIndex) => {
            const isIdColumn = valueIndex === idIndex
            const isSelectedColumn = valueIndex === isSelectedIndex

            return (
              <Fragment key={uuidv1()}>
                {!isIdColumn && (
                  <div
                    key={uuidv1()}
                    className={cx(gridStyles['col-2'], displayStyles['d-table-cell'], borderStyles.border, paddingStyles['p-2'])}
                  >
                    {isSelectedColumn ? '' : (value?.value ?? value)}
                  </div>
                )}
              </Fragment>
            )
          })}
        </div>
      ))}
    </Fragment>
  )
}

DisplayTable.propTypes = propTypes

DisplayTable.defaultProps = defaultProps

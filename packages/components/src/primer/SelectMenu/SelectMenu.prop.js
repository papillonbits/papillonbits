import { string, oneOf, shape, bool, arrayOf, func } from 'prop-types'
import { iconName } from '../Icon/Icon.prop'

export const propTypes = {
  className: string,
  summary: string.isRequired,
  icon: oneOf(Object.keys(iconName)),
  title: string,
  ariaAttr: shape({
    haspopup: bool,
  }).isRequired,
  items: arrayOf(
    shape({
      text: string,
      isSelected: bool,
    }),
  ).isRequired,
  onClick: func.isRequired,
}

export const defaultProps = {
  className: null,
  title: null,
}

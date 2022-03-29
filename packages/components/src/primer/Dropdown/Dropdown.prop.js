import { string, arrayOf, oneOf, shape, bool, func } from 'prop-types'

export const dropdownState = {
  active: 'active',
  inactive: 'inactive',
}

export const propTypes = {
  className: string,
  summary: string.isRequired,
  ariaAttr: shape({
    haspopup: bool,
    current: string,
  }),
  items: arrayOf(
    shape({
      href: string,
      text: string,
      isSelected: bool,
    }),
  ).isRequired,
  onClick: func.isRequired,
  state: oneOf(Object.keys(dropdownState)),
}

export const defaultProps = {
  className: null,
  ariaAttr: {
    haspopup: false,
    current: 'page',
  },
  state: dropdownState.active,
}

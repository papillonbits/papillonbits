import { arrayOf, oneOf, shape, string, bool, func } from 'prop-types'

export const breadcrumbState = {
  active: 'active',
  inactive: 'inactive',
}

export const propTypes = {
  className: string,
  ariaAttr: shape({
    label: string,
    current: string,
  }).isRequired,
  items: arrayOf(
    shape({
      href: string,
      text: string,
      isSelected: bool,
    }),
  ).isRequired,
  onClick: func.isRequired,
  state: oneOf(Object.keys(breadcrumbState)),
}

export const defaultProps = {
  className: null,
  state: breadcrumbState.active,
}

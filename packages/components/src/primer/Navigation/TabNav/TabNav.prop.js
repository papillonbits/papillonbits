import { string, arrayOf, oneOf, shape, bool, node, func } from 'prop-types'

export const tabNavState = {
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
      link: shape,
      isSelected: bool,
      enabled: bool,
      visible: bool,
    }),
  ).isRequired,
  actions: arrayOf(node),
  onClick: func.isRequired,
  children: node,
  state: oneOf(Object.keys(tabNavState)),
}

export const defaultProps = {
  className: null,
  actions: null,
  children: null,
  state: tabNavState.active,
}

import { string, node, arrayOf, shape, bool, oneOf, func } from 'prop-types'

export const underlineNavItemType = {
  a: 'a',
  button: 'button',
}

export const underlineNavAlignmentType = {
  right: 'right',
  left: 'left',
}

export const propTypes = {
  className: string,
  ariaAttr: shape({
    label: string,
    selected: string,
    current: string,
  }).isRequired,
  items: arrayOf(
    shape({
      href: string,
      icon: string,
      text: string,
      html: node,
      isSelected: bool,
    }),
  ).isRequired,
  itemType: oneOf(Object.keys(underlineNavItemType)).isRequired,
  actions: arrayOf(node),
  align: oneOf(Object.keys(underlineNavAlignmentType)).isRequired,
  fullContainer: bool,
  onClick: func.isRequired,
}

export const defaultProps = {
  className: null,
  actions: null,
  align: 'left',
  fullContainer: false,
}

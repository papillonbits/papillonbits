import { string, arrayOf, shape, node, bool, func } from 'prop-types'

export const propTypes = {
  className: string,
  heading: string,
  ariaAttr: shape({
    label: string,
    labelledBy: string,
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
  onClick: func.isRequired,
}

export const defaultProps = {
  className: null,
  heading: null,
}

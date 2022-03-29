import { string, arrayOf, oneOf, shape, bool, func } from 'prop-types'

export const selectState = {
  active: 'active',
  inactive: 'inactive',
}

export const propTypes = {
  id: string,
  className: string,
  selectedText: string.isRequired,
  items: arrayOf(
    shape({
      text: string,
      isSelected: bool,
    }),
  ).isRequired,
  onChange: func.isRequired,
  state: oneOf(Object.keys(selectState)),
}

export const defaultProps = {
  id: null,
  className: null,
  state: selectState.active,
}

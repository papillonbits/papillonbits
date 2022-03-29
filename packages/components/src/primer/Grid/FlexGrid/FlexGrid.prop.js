import { string, array, shape, number, oneOf, func } from 'prop-types'

export const flexGridState = {
  active: 'active',
  inactive: 'inactive',
}

export const flexGridSelection = {
  checkbox: 'checkbox',
  radio: 'radio',
}

export const propTypes = {
  className: string,
  items: array.isRequired,
  idIndex: number,
  isSelectedIndex: number,
  selection: oneOf(Object.keys(flexGridSelection)),
  sort: shape({
    index: number,
    value: string,
    order: string,
  }).isRequired,
  onChange: func,
  onClick: func,
  onDoubleClick: func,
  iconColor: shape({
    sort: string,
    object: string,
  }),
  state: oneOf(Object.keys(flexGridState)),
}

export const defaultProps = {
  className: null,
  idIndex: -1,
  isSelectedIndex: -1,
  selection: flexGridSelection.checkbox,
  onChange: () => {},
  onClick: () => {},
  onDoubleClick: () => {},
  iconColor: {
    sort: '#990000',
    object: '#79b8ff',
  },
  state: flexGridState.active,
}

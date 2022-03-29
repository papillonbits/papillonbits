import { string, array, number } from 'prop-types'

export const propTypes = {
  className: string,
  items: array.isRequired,
  idIndex: number,
  isSelectedIndex: number,
}

export const defaultProps = {
  className: null,
  idIndex: -1,
  isSelectedIndex: -1,
}

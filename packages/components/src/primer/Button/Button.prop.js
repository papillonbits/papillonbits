import { string } from 'prop-types'

export const propTypes = {
  className: string,
  text: string.isRequired,
}

export const defaultProps = {
  className: null,
}

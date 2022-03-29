import { string, oneOf, number } from 'prop-types'

export const progressVariant = {
  small: 'small',
  normal: 'normal',
  large: 'large',
}

export const propTypes = {
  className: string,
  variant: oneOf(Object.keys(progressVariant)),
  percentage: number.isRequired,
}

export const defaultProps = {
  className: null,
  variant: progressVariant.normal,
}

import { string, oneOf, func } from 'prop-types'

export const popoverVariant = {
  default: 'default',
  bottom: 'bottom',
  bottomRight: 'bottomRight',
  bottomLeft: 'bottomLeft',
  left: 'left',
  leftBottom: 'leftBottom',
  leftTop: 'leftTop',
  right: 'right',
  rightBottom: 'rightBottom',
  rightTop: 'rightTop',
  topLeft: 'topLeft',
  topRight: 'topRight',
}

export const popoverSize = {
  normal: 'normal',
  large: 'large',
}

export const propTypes = {
  className: string,
  variant: oneOf(Object.keys(popoverVariant)),
  size: oneOf(Object.keys(popoverSize)),
  intro: string.isRequired,
  heading: string.isRequired,
  message: string.isRequired,
  acknowledge: string.isRequired,
  introOnClick: func.isRequired,
  acknowledgeOnClick: func.isRequired,
}

export const defaultProps = {
  className: null,
  variant: popoverVariant.default,
  size: popoverSize.normal,
}

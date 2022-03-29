import { string, oneOf, bool, func } from 'prop-types'

export const toastVariant = {
  info: 'info',
  success: 'success',
  warning: 'warning',
  error: 'error',
}

export const propTypes = {
  className: string,
  variant: oneOf(Object.keys(toastVariant)),
  text: string.isRequired,
  isDismissable: bool,
  onClick: func,
}

export const defaultProps = {
  className: null,
  variant: toastVariant.info,
  isDismissable: false,
  onClick: () => {},
}

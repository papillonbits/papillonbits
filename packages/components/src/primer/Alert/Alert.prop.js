import { string, oneOf, shape, func, bool, node } from 'prop-types'

export const alertVariant = {
  default: 'default',
  info: 'info',
  warning: 'warning',
  error: 'error',
  success: 'success',
  consent: 'consent',
}

export const propTypes = {
  dataTest: shape({
    default: string,
    approve: string,
    cancel: string,
    value: string,
  }),
  className: string,
  variant: oneOf(Object.keys(alertVariant)),
  children: node.isRequired,
  consent: shape({
    action: shape({
      approve: func,
      cancel: func,
    }),
    withInput: bool,
  }),
}

export const defaultProps = {
  dataTest: null,
  className: null,
  variant: alertVariant.default,
}
